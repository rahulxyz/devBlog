import React from "react";
import { withRouter } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {

    return (
        <header className="navbar-wrapper">
            <div className="container">
                <div className="navbar-content">
                    <div className="logo">DevBlog</div>
                    <div className="navbar-btn">
                        {props.location.pathname === "/" ? 
                        <button onClick={() => props.toggleAdd(true)}>Add</button> 
                        : <button onClick={() => props.toggleAdd(true)}>Update</button>}
                        About Us
                    </div>
                </div>
            </div>
        </header>
    );
};

export default withRouter(Navbar);
