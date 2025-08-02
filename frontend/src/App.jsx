import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './pages/Home';
import CreateIssuePage from './pages/CreateIssuePage'; // ✅ import the page
import Navbar from './components/Navbar';
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<RegisterForm />} /> {/* ✅ add this */}
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
