import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm'; // ✅ import the register form
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<RegisterForm />} /> {/* ✅ add this */}
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
