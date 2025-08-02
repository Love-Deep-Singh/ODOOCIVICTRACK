import React, { useState } from 'react';
import './CreateIssuePage.css'; // ✅ Correct import for styles

const CreateIssuePage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [reporter, setReporter] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newIssue = { title, description, location, reporter };
        console.log('Submitted Issue:', newIssue);
        alert('Issue submitted successfully!');
        // TODO: Save data to backend or localStorage
    };

    return (
        <div className="create-issue-container">
            <h2>Report New Issue</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label><br />
                    <input value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Description:</label><br />
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div>
                    <label>Location:</label><br />
                    <input value={location} onChange={(e) => setLocation(e.target.value)} required />
                </div>
                <div>
                    <label>Reported By:</label><br />
                    <input value={reporter} onChange={(e) => setReporter(e.target.value)} required />
                </div>
                <button type="submit">Submit Issue</button>
            </form>
        </div>
    );
};

export default CreateIssuePage;
