import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar-wrapper">
            <div className="container">
                <div className="navbar-content">
                    <div className="logo">DevBlog</div>
                    <div>About Us</div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;