// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // optional CSS
import { useAuth } from '../context/usercontext';
import { removeToken } from '../utils/helper';
const Navbar = () => {
    const{ user, logout } = useAuth();
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" className="site-title">CivicTrack</Link>
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                {user ? (
                    <>
                        <Link to="/profile">Profile</Link>
                        <button style={{color:'white',border:"none",background:"none"}} onClick={()=>{
                            logout();
                            removeToken();
                            
                        }} className="logout-button">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                )}  
          </div>
        </nav>
    );
};

export default Navbar;
