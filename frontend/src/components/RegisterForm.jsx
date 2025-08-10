import React from 'react';
import './RegisterForm.css';
import { registerUser } from '../services/auth'; 
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../utils/helper';
import { useAuth } from '../context/usercontext';

const RegisterForm = () => {
    const { signup } = useAuth();
   
  
    const navigate = useNavigate();
    const handleRegister = async () => {
            const user ={
                username: username,
                email: email,
                phone: phone,
                password: password
            }
            try {
                const response = await registerUser(user);
                const id = Math.random().toString(36).substring(2, 10); // simulate unique ID
                 signup({ id, email });
                console.log('Registration successful:', response);
                saveToken(response.token);
                 
                
                setTimeout(() => {
                    alert('Registration successful! Redirecting to home.');
                                    navigate('/')

                }
                , 1000);

            } catch (error) {
                console.error('Registration failed:', error);
                alert(error.response?.data?.message || 'Registration failed. Please try again.');
            }

    
        console.log('Register button clicked');
    };
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <div className="register-container">
            <div className="register-box">
                <h2 className="login-title">Register For Civ<span className="highlight">Track</span></h2>
                <p className="register-subtitle">Create your account to get started</p>

                <input className="register-input" value={username}  onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter your username" />
                <input className="register-input" value-={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter your email" />
                <input className="register-input" value={phone} onChange={(e)=>setPhone(e.target.value)} type="tel" placeholder="Enter your phone number" />
                <input className="register-input" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Create a password" />

                <button onClick={handleRegister} className="register-button">Register</button>

                <p className="login-link">Already have an account? <a href="/login">Login</a></p>

                {/* <div className="divider">Or continue with</div>

                <div className="social-buttons">
                    <button className="social-btn google">G</button>
                    <button className="social-btn facebook">f</button>
                    <button className="social-btn apple"></button>
                </div> */}
            </div>
        </div>
    );
};

export default RegisterForm;
