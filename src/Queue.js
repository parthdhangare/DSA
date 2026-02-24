import React, { useState } from 'react';
import './Queue.css';

function Queue() {
  const [patients, setPatients] = useState([
    { token: "A-101", name: "Rahul Kumar", status: "Waiting (Next)", active: true },
    { token: "A-102", name: "Priya Sharma", status: "In Queue", active: false },
    { token: "B-205", name: "Amit Verma", status: "In Queue", active: false },
    { token: "C-310", name: "Sneha Gupta", status: "In Queue", active: false },
  ]);

  const callNext = () => {
    const updated = [...patients];
    if (updated.length > 0) {
      alert(`Calling Patient: ${updated[0].name}`);
      updated.shift();
      if(updated[0]) updated[0].active = true;
      setPatients(updated);
    }
  };

  return (
    <div className="queue-page-layout">
      <div className="queue-centered-container">
        <header className="queue-header">
          <h1 className="glow-text">Doctor's Patient Queue</h1>
          <span className="dr-status-icon">👨‍⚕️</span>
        </header>

        <div className="queue-list">
          {patients.map((p, i) => (
            <div key={i} className={`queue-card ${p.active ? 'priority' : ''}`}>
              <div className="p-data">
                <h3 className="token-id">Token: {p.token}</h3>
                <p className="patient-name">Patient: {p.name}</p>
                <p className="visit-status">Status: {p.status}</p>
              </div>
              <div className="action-area">
                {p.active ? (
                  <button className="call-next-btn" onClick={callNext}>CALL NEXT</button>
                ) : (
                  <button className="view-details-btn">View Details</button>
                )}
              </div>
            </div>
          ))}
        </div>

        <button className="back-link-btn" onClick={() => window.history.back()}>
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Queue;