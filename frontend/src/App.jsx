import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './pages/Home';
import CreateIssuePage from './pages/CreateIssuePage'; // ✅ import the page

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<RegisterForm />} />
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateIssuePage />} /> {/* ✅ new route */}
            </Routes>
        </Router>
    );
}

export default App;
