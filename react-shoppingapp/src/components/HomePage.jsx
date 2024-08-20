import React, { useState } from "react";
import "../components/styles/HomePage.css";
import NavbarHome from "./Navbar-Home";
// import EditableTextField from "./Editable-field";
// import Dropdown from "./drop-down";
// import { GrAdd } from "react-icons/gr";
import SearchBar from "./mini-searchbar";


const HomePage = () => {
   

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
                <div></div>
                <div></div>
                <div></div>
               
            </div>
        </div>
    );
};

export default HomePage;
