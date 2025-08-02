// CivicTrackIssueView.js
import React from 'react';
import './singlepage.css';

const dummyData = {
  title: 'Pothole on main road',
  status: 'In Progress',
  reporter: 'Anonymous',
  location: 'C.G road,Kharar, Punjab',
  datetime: 'Jun 02, 2025 - 10:34 AM',
  description:
    'The main road in C.G road, Kharar, is riddled with potholes, making it dangerous and difficult to travel on.',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Pothole.JPG/800px-Pothole.JPG',
  activity: [
    'Jun 02, 10:34 AM — Reported by user',
    'Jul 26, 09:00 AM — Assigned to Blissful Alpaca (worker)',
    'Jul 28, 04:15 PM — Marked "In Progress"',
  ],
};

const SingleIssue = () => {
  return (
    <div className="civic-container">
      <div className="civic-header">
        <h2>CivicTrack</h2>
      </div>
      <div className="civic-content">
        <img src="https://t3.ftcdn.net/jpg/02/01/41/92/360_F_201419237_YkYllKIEwJYpm4RfY1TSuBOqvfSAmXkB.jpg" alt="issue" className="civic-image" />
        <div className="civic-details">
          <h3>{dummyData.title}</h3>
          <p className="datetime">{dummyData.datetime}</p>
          <p className="description">{dummyData.description}</p>
          <div className="info-block">
            <p className="status-single">Status: {dummyData.status}</p>
            <span className="reporter">Reported by: {dummyData.reporter}</span>
          </div>
          <div className="location">📍 {dummyData.location}</div>
        </div>
      </div>

      <div className="activity">
        <h4>Activity</h4>
        <ul>
          {dummyData.activity.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
          <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13713.30215799922!2d76.67592144999999!3d30.765441499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1754132666045!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    </div>
  );
};

export default SingleIssue;
