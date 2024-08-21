import React, { useState } from 'react';
import "../components/styles/HomePage.css";
import NavbarHome from './Navbar-Home';
import SearchBar from "./mini-searchbar";
import CategoryContainer from './CategoryContainer'; 
import { Button } from '@mui/material';

const HomePage = () => {
    const [categories, setCategories] = useState([]);

    const handleAddCategory = () => {
        setCategories([...categories, { id: Date.now(), name: 'New Category', items: [] }]);
    };

    const handleDeleteCategory = (id) => {
        setCategories(categories.filter(category => category.id !== id));
    };

    const handleAddItemToCategory = (categoryId, item) => {
        setCategories(categories.map(category =>
            category.id === categoryId
                ? { ...category, items: [...category.items, item] }
                : category
        ));
    };

    const handleUpdateItemInCategory = (categoryId, updatedItem) => {
        setCategories(categories.map(category =>
            category.id === categoryId
                ? { ...category, items: category.items.map(item =>
                    item.id === updatedItem.id ? updatedItem : item
                )}
                : category
        ));
    };

    const handleDeleteItemInCategory = (categoryId, itemId) => {
        setCategories(categories.map(category =>
            category.id === categoryId
                ? { ...category, items: category.items.filter(item => item.id !== itemId) }
                : category
        ));
    };

    return (
        <div className="wrapper2">
            <div><NavbarHome /></div>
            <div className="home-hero">
                <div className="home-text">
                    <h1>Your Shopping Lists</h1>
                    <p>Manage all your shopping lists in one place. Create new lists, add items, and share with friends and family.</p>
                </div>
                <div className="btn-search">
                    <div className="home-button">
                        <Button variant="contained" onClick={handleAddCategory}>
                            Add Category
                        </Button>
                    </div>
                    <div className="search-bar"><SearchBar /></div>
                </div>
            </div>
            <div className="lists">
                {categories.map(category => (
                    <CategoryContainer
                        key={category.id}
                        category={category}
                        onDelete={() => handleDeleteCategory(category.id)}
                        onAddItem={handleAddItemToCategory}
                        onUpdateItem={handleUpdateItemInCategory}
                        onDeleteItem={handleDeleteItemInCategory}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePage;

