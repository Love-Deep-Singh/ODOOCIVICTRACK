import React from 'react';
import './IssueCard.css';

const IssueCard = ({ title, description, location, date, status, reporter }) => {
    return (
        <div className="issue-card">
            <div className="image-placeholder">Image</div>
            <div className="issue-info">
                <h3>{title}</h3>
                {status && <span className={`status ${status.toLowerCase()}`}>{status}</span>}
                <p>{description}</p>
                <div className="meta">
                    <span>{location}</span>
                    <span>{date}</span>
                </div>
                <p className="reporter">Reported by: {reporter}</p>
            </div>
        </div>
    );
};

export default IssueCard;
