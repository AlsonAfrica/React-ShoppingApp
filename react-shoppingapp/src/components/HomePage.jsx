import React from "react";
import "../components/styles/HomePage.css"
import NavbarHome from "./Navbar-Home";
import EditableTextField from "./Editable-field";
import Dropdown from "./drop-down";
// import SearchBar from "./mini-searchbar";


const HomePage = () => (
    <div className="wrapper2">
        <div><NavbarHome /></div>
        <div className="home-hero">
            <div className="home-text"><h1>Your Shopping Lists</h1>
                <p>Manage all your shopping lists in one place,Create new lists, add items, and share with friends andd family</p>
            </div>
            <div className="home-button"><button>Create New List +</button></div>
        </div>
        <div className="lists">
            <div className="my-shopping-lists">
                <div className="list-container1">
                    <div className="textfield"><EditableTextField/><Dropdown/></div>
                    <div></div>
                    <div className="floating-btn"></div>
                </div>
                <div className="list-container2">
                    <div className="textfield"><EditableTextField/><Dropdown/></div>
                    <div></div>
                    <div className="floating-btn"></div>
                </div>
                {/* <div className="tags"><h1>My Shopping lists <Dropdown/> <SearchBar/></h1></div> */}
                {/* <div> */}
                    {/* <ShoppingListCard/> */}
                    {/* <ShoppingListCard/> */}
                
                {/* </div> */}
            </div>
            <div className="shared-lists">
                <div className="list-container3">
                <div className="textfield"><EditableTextField/><Dropdown/></div>
                <div></div>
                <div className="floating-btn"></div>
                </div>
                <div className="list-container4">
                <div className="textfield"><EditableTextField/><Dropdown/></div>
                <div></div>
                <div className="floating-btn"></div>
                </div>
            </div>
            <div className="sent-list">
                <div className="sent-list-container"><h1>Shared Lists</h1></div>
            </div>
        </div>
    </div>)
 
export default HomePage;