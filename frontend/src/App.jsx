import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './pages/Home';
import CreateIssuePage from './pages/CreateIssuePage'; 
import Navbar from './components/Navbar';
import { AuthProvider } from './context/usercontext';
import SingleIssue from './pages/singleIssue';
function App() {
    return (
        <AuthProvider>
         <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<RegisterForm />} />
                <Route path="/create" element={<CreateIssuePage />} />
                <Route path="/issue/:id" element={<SingleIssue/>} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
        </AuthProvider>
       
    );
}

export default App;
