// src/components/HomePage.js
import React from "react";
import "../components/styles/HomePage.css";
import NavbarHome from "./Navbar-Home";
import EditableTextField from "./Editable-field";
import Dropdown from "./drop-down";
import { GrAdd } from "react-icons/gr";
import SearchBar from "./mini-searchbar";
import { useDispatch, useSelector } from 'react-redux';
import { toggleFormVisibility } from "../store/formSlice";
import AddItemForm from "./AddItemForm"; // Import your form component

const HomePage = () => {
    const dispatch = useDispatch();
    const isFormVisible = useSelector((state) => state.form.isFormVisible);
    const items = useSelector((state) => state.list.items); // Get the list items from Redux store

    return (
        <div className="wrapper2">
            <div><NavbarHome /></div>
            <div className="home-hero">
                <div className="home-text">
                    <h1>Your Shopping Lists</h1>
                    <p>Manage all your shopping lists in one place. Create new lists, add items, and share with friends and family.</p>
                </div>
                <div className="btn-search">
                    <div className="home-button"><button>Create New List +</button></div>
                    <div className="search-bar"><SearchBar /></div>
                </div>
            </div>
            <div className="lists">
                <div className="my-shopping-lists">
                    <div className="list-container1">
                        <div className="textfield">
                            <EditableTextField />
                            <Dropdown />
                            <button 
                                className="floating-btn1" 
                                title="Add-list" 
                                onClick={() => dispatch(toggleFormVisibility())}
                            >
                                <GrAdd />
                            </button>
                        </div>
                        {isFormVisible && (
                            <div className="form-tab">
                                <AddItemForm />
                            </div>
                        )}
                        {/* Display the list items */}
                        <div className="list-container">
                            {items.map((item, index) => (
                                <div key={index} className="list-item">
                                    <p>{item.itemName}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Notes: {item.notes}</p>
                                </div>
                            ))}
                        </div> 

                    </div>
                    {/* Repeat similar structure for other list containers */}
                    <div className="list-container2">
                        <div className="textfield">
                            <EditableTextField />
                            <Dropdown />
                            <button 
                                className="floating-btn1" 
                                title="Add-list" 
                                onClick={() => dispatch(toggleFormVisibility())}
                            >
                                <GrAdd />
                            </button>
                        </div>
                        {isFormVisible && (
                            <div className="form-tab">
                                <AddItemForm />
                            </div>
                        )}
                        <div className="list-container">
                            {items.map((item, index) => (
                                <div key={index} className="list-item">
                                    <p>{item.itemName}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Notes: {item.notes}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="shared-lists">
                    <div className="list-container3">
                        <div className="textfield">
                            <EditableTextField />
                            <Dropdown />
                            <button className="floating-btn1" title="Add-list"><GrAdd /></button>
                        </div>
                    </div>
                    <div className="list-container4">
                        <div className="textfield">
                            <EditableTextField />
                            <Dropdown />
                            <button className="floating-btn1" title="Add-list"><GrAdd /></button>
                        </div>
                    </div>
                </div>
                <div className="sent-list">
                    <div className="sent-list-container"><h1>Shared Lists</h1></div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
