import React from 'react';
import './IssueCard.css';

const IssueCard = ({ title, description, address, date, status, reporterName }) => {
    return (
        <div className="issue-card">
            <div className="image-placeholder">Image</div>
            <div className="issue-info">
                <h3>{title}</h3>
                {status && <span className={`status ${status.toLowerCase()}`}>{status}</span>}
                <p>{description}</p>
                <div className="meta">
                    <span>{address}</span>
                    <span>{date}</span>
                </div>
                <p className="reporter">Reported by: {reporterName}</p>
            </div>
        </div>
    );
};

export default IssueCard;
