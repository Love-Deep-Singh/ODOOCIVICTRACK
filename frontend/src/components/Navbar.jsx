// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // optional CSS

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" className="site-title">CivicTrack</Link>
            </div>
            <div className="navbar-links">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
        </nav>
    );
};

export default Navbar;
