// HomePage.js
import React, { useState } from 'react';
import "../components/styles/HomePage.css";
import NavbarHome from './Navbar-Home';
import SearchBar from "./mini-searchbar";
import CategoryContainer from './Categorycontainer';
import { Button } from '@mui/material';
import SortDropdown from './SortDropDown';
import Loader from './Loader'; // Import the Loader component

const HomePage = () => {
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('alphabetical');
    const [loading, setLoading] = useState(false); // Loading state

    const handleAddCategory = () => {
        setLoading(true); // Show loader
        setTimeout(() => {
            setCategories([...categories, { id: Date.now(), name: 'New Category', items: [] }]);
            setLoading(false); // Hide loader after adding category
        }, 500); // Simulate network delay
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

    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase());
    };

    const handleSortChange = (option) => {
        setSortOption(option);
    };

    // Sort function
    const sortCategories = (categories, option) => {
        return [...categories].sort((a, b) => {
            if (option === 'alphabetical') {
                return a.name.localeCompare(b.name);
            } else if (option === 'reverseAlphabetical') {
                return b.name.localeCompare(a.name);
            } else {
                return 0;
            }
        });
    };

    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchQuery) ||
        category.items.some(item =>
            item.name.toLowerCase().includes(searchQuery)
        )
    );

    const sortedCategories = sortCategories(filteredCategories, sortOption);

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
                        <Button variant="contained" onClick={handleAddCategory} disabled={loading}>
                            Add Category
                        </Button>
                    </div>
                    <div className="search-bar"><SearchBar onSearch={handleSearch} /></div>
                    <div className="Sort"><SortDropdown sortOption={sortOption} onSortChange={handleSortChange} /></div>
                </div>
            </div>
            {loading && <Loader />} {/* Show loader */}
            <div className="lists">
                {sortedCategories.map(category => (
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
