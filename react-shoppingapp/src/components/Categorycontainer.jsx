import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems, addItem, updateItem, deleteItem } from '../store/itemsSlice';
import { Card, CardContent, Typography, IconButton, TextField, Button, List, ListItem, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Delete, Add, Edit, Share, Save } from '@mui/icons-material';
import jsPDF from 'jspdf'; // Import jsPDF
import { saveAs } from 'file-saver'; // Import file-saver for saving files

const CategoryContainer = ({ category, onDelete, onAddItem, onUpdateItem, onDeleteItem, onSaveCategoryName }) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.items.items);
    const status = useSelector((state) => state.items.status);
    const [categoryName, setCategoryName] = useState(category.name);
    const [newItem, setNewItem] = useState({ name: '', quantity: 1, notes: '' });
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingItemId, setEditingItemId] = useState(null);
    const [liked, setLiked] = useState(false);
    const [shareLink, setShareLink] = useState('');

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchItems());
        }
    }, [status, dispatch]);

    const handleCategoryNameChange = (e) => {
        setCategoryName(e.target.value);
    };

    const handleSaveCategoryName = () => {
        if (onSaveCategoryName && categoryName.trim() !== '') {
            onSaveCategoryName(category.id, categoryName);
        }
    };

    const handleFormOpen = () => {
        setIsFormOpen(true);
    };

    const handleFormClose = () => {
        setIsFormOpen(false);
        setIsEditMode(false);
        setEditingItemId(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddItem = () => {
        if (newItem.name.trim() !== '') {
            if (isEditMode && editingItemId) {
                // Update existing item
                dispatch(updateItem({ ...newItem, id: editingItemId }));
                onUpdateItem(category.id, { ...newItem, id: editingItemId });
            } else {
                // Add new item
                dispatch(addItem({ ...newItem, categoryId: category.id }));
                onAddItem(category.id, { ...newItem, id: Date.now() }); // Simulate server ID for newly added item
            }
            setNewItem({ name: '', quantity: 1, notes: '' });
            handleFormClose();
        }
    };

    const handleEditItem = (item) => {
        setNewItem(item);
        setIsEditMode(true);
        setEditingItemId(item.id);
        setIsFormOpen(true);
    };

    const handleDeleteItem = (id) => {
        dispatch(deleteItem(id));
        onDeleteItem(category.id, id);
    };

    const handleShareCategory = () => {
        // Generate document
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text(`Category: ${categoryName}`, 10, 10);
        doc.setFontSize(12);
        items
            .filter(item => item.categoryId === category.id)
            .forEach((item, index) => {
                doc.text(`${index + 1}. ${item.name} (x${item.quantity})`, 10, 20 + (index * 10));
                if (item.notes) {
                    doc.text(`   Notes: ${item.notes}`, 10, 25 + (index * 10));
                }
            });
        
        // Save as blob and create shareable link
        const blob = doc.output('blob');
        saveAs(blob, `${categoryName}.pdf`); // This will save the file locally

        // For email sharing, you can use a mailto link
        const mailtoLink = `mailto:?subject=Shared Category Document&body=Please find the attached document for category: ${categoryName}.`;
        window.open(mailtoLink);
    };

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="category-container">
            <Card sx={{ maxWidth: 345, m: 2 }}>
                <CardContent>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <TextField
                                value={categoryName}
                                onChange={handleCategoryNameChange}
                                variant="outlined"
                                size="small"
                                aria-label="Category name"
                            />
                            <IconButton color="primary" onClick={handleSaveCategoryName}>
                                <Save />
                            </IconButton>
                            <IconButton color="secondary" onClick={onDelete}>
                                <Delete />
                            </IconButton>
                        </div>
                        <IconButton color={liked ? "primary" : "default"} onClick={toggleLike}>
                            <Share />
                        </IconButton>
                        <IconButton color="primary" onClick={handleShareCategory}>
                            <Share />
                        </IconButton>
                    </div>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                        Manage your items:
                    </Typography>
                    <List>
                        {items
                            .filter(item => item.categoryId === category.id)
                            .map((item) => (
                                <ListItem
                                    key={item.id}
                                    secondaryAction={
                                        <>
                                            <IconButton color="primary" onClick={() => handleEditItem(item)}>
                                                <Edit />
                                            </IconButton>
                                            <IconButton color="primary" onClick={() => handleShareItem(item)}>
                                                <Share />
                                            </IconButton>
                                            <IconButton edge="end" color="secondary" onClick={() => handleDeleteItem(item.id)}>
                                                <Delete />
                                            </IconButton>
                                        </>
                                    }
                                >
                                    <ListItemText 
                                      primary={`${item.name} (x${item.quantity})`} 
                                      secondary={item.notes && `Notes: ${item.notes}`}
                                    />
                                </ListItem>
                            ))}
                    </List>
                    <div style={{ display: 'flex', marginTop: '10px' }}>
                        <IconButton color="primary" onClick={handleFormOpen}>
                            <Add />
                        </IconButton>
                    </div>
                </CardContent>
            </Card>

            {/* Dialog Form */}
            <Dialog open={isFormOpen} onClose={handleFormClose} aria-labelledby="dialog-title">
                <DialogTitle id="dialog-title">{isEditMode ? "Edit Shopping Item" : "Add Shopping Item"}</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Shopping Item"
                        name="name"
                        value={newItem.name}
                        onChange={handleInputChange}
                        fullWidth
                        aria-label="Item name"
                    />
                    <TextField
                        margin="dense"
                        label="Number of Items"
                        name="quantity"
                        type="number"
                        value={newItem.quantity}
                        onChange={handleInputChange}
                        fullWidth
                        aria-label="Item quantity"
                    />
                    <TextField
                        margin="dense"
                        label="Additional Notes"
                        name="notes"
                        value={newItem.notes}
                        onChange={handleInputChange}
                        multiline
                        rows={3}
                        fullWidth
                        aria-label="Item notes"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleFormClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddItem} color="primary">
                        {isEditMode ? "Save Changes" : "Add Item"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CategoryContainer;
