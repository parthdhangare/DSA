import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CommonGlass.css';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="glass-page center-content">
      <div className="dashboard-wrapper">
        <h1 className="glow-text main-title">Simplificant Command</h1>
        <p className="subtitle">Unified Hospital Resource Management</p>
        
        <div className="hub-container">
          <div className="hub-card neon-border-blue" onClick={() => navigate('/beds')}>
            <div className="card-icon">🛏️</div>
            <h3>Bed Engine</h3>
            <p>Live Ward Tracking & Allocation</p>
            <div className="enter-link">Enter System →</div>
          </div>

          <div className="hub-card neon-border-blue" onClick={() => navigate('/queue')}>
            <div className="card-icon">📋</div>
            <h3>Patient Queue</h3>
            <p>Predictive ETAs & Flow Control</p>
            <div className="enter-link">View Live Queue →</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;