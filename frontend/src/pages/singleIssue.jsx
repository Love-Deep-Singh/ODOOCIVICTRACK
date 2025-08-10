import React, { useEffect, useState } from 'react';
import './singlepage.css';
import { useParams } from 'react-router-dom';
import { getIssueById} from '../services/issue';

const SingleIssue = () => {
  const { id } = useParams();
  const [issue, setIssue] = useState(null);
  const [newStatus, setNewStatus] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate auth state or use your actual auth logic
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    setUser(loggedInUser);
  }, []);

  const getissue = async () => {
    try {
      const response = await getIssueById(id);
      setIssue(response);
      setNewStatus(response.status); // pre-select current status
    } catch (err) {
      console.error('Error fetching issue:', err);
      alert('Failed to fetch issue details. Please try again later.');
    }
  };

  useEffect(() => {
    if (id) {
      getissue();
    }
  }, [id]);





  return (
      <div className="issue-container">
      <h1 className="app-title">CivicTrack</h1>

      <div className="issue-card-glass">
        {issue?.photos && issue?.photos?.length > 0 && (
          <img
            className="issue-image"
            src={issue?.photos[0]}
            alt={issue?.title}
          />
        )}

        <div className="issue-content">
          <h2>{issue?.title}</h2>
          <p className="description">{issue?.description}</p>

          <div className={`status-badge ${issue?.status?.toLowerCase()}`}>
            Status: {issue?.status}
          </div>

          <p className="meta">
            📍 {issue?.address} <br />
            🗓 {issue?.date || "Date not available"}
          </p>

          <p className="reporter">👤 Reported by: {issue?.reporterName}</p>

         {
          issue?.status !='Resolved' && (
          <div className="update-section">
            <label htmlFor="status-select">Update Status:</label>
            <select id="status-select" defaultValue={issue?.status}>
              <option value="Reported">Reported</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};


export default SingleIssue;
