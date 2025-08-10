import React, { useEffect, useState } from 'react';
import './IssueCard.css';
import { Link } from 'react-router-dom';
import { getIssueById } from '../services/issue';

const IssueCard = ({ title,_id, description, address, date, status, reporterName,photos }) => {


    return (
        <Link className="issue-card"  
                    to={`/issue/${_id}`}
        >
            {
            photos && photos.length > 0 ? (
                <img className='issue-img' src={photos[0]} alt="Issue"  />
            ):(
                <div  className="image-placeholder">Image</div>
            )
            }
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

       </Link>
    );
};

export default IssueCard;
