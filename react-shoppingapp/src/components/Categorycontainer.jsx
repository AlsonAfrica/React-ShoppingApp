// src/components/CategoryContainer.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, TextField, Button, List, ListItem, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Delete, Add, Edit, Share, Favorite, FavoriteBorder } from '@mui/icons-material';

const CategoryContainer = ({ category, onDelete }) => {
    const [categoryName, setCategoryName] = useState(category.name);
    const [items, setItems] = useState(category.items);
    const [newItem, setNewItem] = useState({ name: '', quantity: 1, notes: '' });
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [liked, setLiked] = useState(false);

    const handleCategoryNameChange = (e) => {
        setCategoryName(e.target.value);
    };

    const handleFormOpen = () => {
        setIsFormOpen(true);
    };

    const handleFormClose = () => {
        setIsFormOpen(false);
        setIsEditMode(false);
        setEditingIndex(null);
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
            if (isEditMode && editingIndex !== null) {
                // Update existing item
                const updatedItems = [...items];
                updatedItems[editingIndex] = newItem;
                setItems(updatedItems);
            } else {
                // Add new item
                setItems([...items, newItem]);
            }
            setNewItem({ name: '', quantity: 1, notes: '' });
            handleFormClose();
        }
    };

    const handleEditItem = (index) => {
        setNewItem(items[index]);
        setIsEditMode(true);
        setEditingIndex(index);
        setIsFormOpen(true);
    };

    const handleDeleteItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const handleShareItem = (item) => {
        // Implement share functionality here
        console.log(`Sharing item: ${item.name}`);
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
                            />
                            <IconButton color="secondary" onClick={onDelete}>
                                <Delete />
                            </IconButton>
                        </div>
                        <IconButton color={liked ? "primary" : "default"} onClick={toggleLike}>
                            {liked ? <Favorite /> : <FavoriteBorder />}
                        </IconButton>
                    </div>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                        Manage your items:
                    </Typography>
                    <List>
                        {items.map((item, index) => (
                            <ListItem
                                key={index}
                                secondaryAction={
                                    <>
                                        <IconButton color="primary" onClick={() => handleEditItem(index)}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton color="primary" onClick={() => handleShareItem(item)}>
                                            <Share />
                                        </IconButton>
                                        <IconButton edge="end" color="secondary" onClick={() => handleDeleteItem(index)}>
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
            <Dialog open={isFormOpen} onClose={handleFormClose}>
                <DialogTitle>{isEditMode ? "Edit Shopping Item" : "Add Shopping Item"}</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Shopping Item"
                        name="name"
                        value={newItem.name}
                        onChange={handleInputChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Number of Items"
                        name="quantity"
                        type="number"
                        value={newItem.quantity}
                        onChange={handleInputChange}
                        fullWidth
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

