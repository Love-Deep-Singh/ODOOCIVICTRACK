import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username.trim() !== '' && password.trim() !== '') {
            // You can add backend login logic here later
            navigate('/home');
        } else {
            alert('Please enter both username and password.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Civ<span className="highlight">Track</span></h2>
                <hr className="underline" />

                <input
                    className="login-input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="login-button" onClick={handleLogin}>
                    Login
                </button>

                <p className="register-link">
                    Don’t have an account? <a href="/signup">Register here</a>
                </p>

                <p className="footer-text">
                    Secure and reliable civic engagement platform
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
