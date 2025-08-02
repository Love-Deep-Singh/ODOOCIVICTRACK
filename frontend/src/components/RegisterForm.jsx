import React from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
    return (
        <div className="register-container">
            <div className="register-box">
                <h2 className="register-title">Register for <span className="highlight">CivTrack</span></h2>
                <p className="register-subtitle">Create your account to get started</p>

                <input className="register-input" type="text" placeholder="Enter your username" />
                <input className="register-input" type="email" placeholder="Enter your email" />
                <input className="register-input" type="tel" placeholder="Enter your phone number" />
                <input className="register-input" type="password" placeholder="Create a password" />

                <button className="register-button">Register</button>

                <p className="login-link">Already have an account? <a href="/login">Login</a></p>

                <div className="divider">Or continue with</div>

                <div className="social-buttons">
                    <button className="social-btn google">G</button>
                    <button className="social-btn facebook">f</button>
                    <button className="social-btn apple"></button>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
