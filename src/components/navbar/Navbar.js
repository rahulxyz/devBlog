import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./Navbar.css";

const Navbar = (props) => {
    const getActionButtons = () => {
        if (!props.isAuthorised) return null;

        const btn = props.location.pathname === "/" ? <button onClick={() => props.toggleAdd(true)}>Add</button> : <button onClick={() => props.toggleAdd(true)}>Update</button>;

        return btn;
    };

    return (
        <header className="navbar-wrapper">
            <div className="container">
                <div className="navbar-content">
                    <div className="logo">DevBlog</div>
                    <div className="navbar-btn">
                        {getActionButtons()}
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthorised: state.auth.isAuthorised,
    };
};

export default connect(mapStateToProps, null)(withRouter(Navbar));
