import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { loginUser } from '../services/auth'; // Import the login service

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        
        if (email && password) {

            const user = {
                email: email,
                password: password
            };
           try {
                const response = await loginUser(user);
                console.log('Registration successful:', response);
                
                setTimeout(() => {
                    alert('Login successful! Redirecting to home.');
                                    navigate('/')
                }
                , 1000);
            } catch (error) {
                console.error('Registration failed:', error);
                alert(error.response?.data?.message || 'Registration failed. Please try again.');
            }
        } else {
        }
        console.log('Login button clicked');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Civ<span className="highlight">Track</span></h2>
                <hr className="underline" />

                <input
                    className="login-input"
                    type="mail"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="login-input"
                    required
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
