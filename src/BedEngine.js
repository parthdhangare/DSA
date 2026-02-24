import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BedEngine.css';

function BedEngine() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Beds');
  const [isAddingPatient, setIsAddingPatient] = useState(false);
  const [newPatientName, setNewPatientName] = useState("");
  
  // Initial state
  const [beds, setBeds] = useState([
    { id: 1, ward: 'ICU', floor: '1', bedNo: '01', status: 'Occupied', patient: 'Rahul Kumar' },
    { id: 2, ward: 'ICU', floor: '1', bedNo: '02', status: 'Available', patient: '' },
    { id: 3, ward: 'General', floor: '2', bedNo: '15', status: 'Available', patient: '' },
    { id: 4, ward: 'General', floor: '2', bedNo: '16', status: 'Occupied', patient: 'Suresh Raina' },
    { id: 5, ward: 'PVT', floor: '3', bedNo: '09', status: 'Cleaning', patient: '' },
    { id: 6, ward: 'PVT', floor: '3', bedNo: '10', status: 'Available', patient: '' },
  ]);

  // --- NEW: DYNAMIC BED GENERATION FUNCTION ---
  const addNewBedToWard = (targetWard) => {
    const name = prompt(`Enter Patient Name for ${targetWard}:`);
    const floor = prompt("Enter Floor Number:", targetWard === 'ICU' ? '1' : targetWard === 'General' ? '2' : '3');
    
    if (name && floor) {
      // Find the next sequential bed number for this ward
      const wardBeds = beds.filter(b => b.ward === targetWard);
      const nextNum = wardBeds.length + 1;
      const bedNoStr = nextNum < 10 ? `0${nextNum}` : `${nextNum}`;

      const newBed = {
        id: Date.now(), // Unique ID for React keys
        ward: targetWard,
        floor: floor,
        bedNo: bedNoStr,
        status: 'Occupied',
        patient: name
      };

      // Appends the new bed card one after another
      setBeds([...beds, newBed]);
    }
  };

  const handleBedAction = (bed) => {
    if (isAddingPatient && bed.status === 'Available') {
      setBeds(beds.map(b => b.id === bed.id ? { ...b, status: 'Occupied', patient: newPatientName } : b));
      setIsAddingPatient(false);
      setNewPatientName("");
      return;
    }
    if (bed.status === 'Occupied') {
      if (window.confirm(`Discharge ${bed.patient}?`)) {
        setBeds(beds.map(b => b.id === bed.id ? { ...b, status: 'Cleaning', patient: '' } : b));
      }
    } else if (bed.status === 'Cleaning') {
      setBeds(beds.map(b => b.id === bed.id ? { ...b, status: 'Available' } : b));
    }
  };

  const renderWard = (wardName) => {
    // Sorts beds to ensure they appear in proper numerical order
    const wardBeds = beds.filter(b => b.ward === wardName).sort((a, b) => a.bedNo.localeCompare(b.bedNo));
    
    return (
      <div className="ward-section">
        <div className="ward-header">
          <h2 className="glow-text">{wardName}</h2>
          {/* Creative Pill-Shaped Button */}
          <button className="creative-neon-btn" onClick={() => addNewBedToWard(wardName)}>
            <span className="btn-icon">+</span> 
            <span className="btn-text">Add to {wardName}</span>
          </button>
        </div>
        <div className="ward-grid">
          {wardBeds.map((bed) => (
            <div 
              key={bed.id} 
              className={`bed-card-v3 ${bed.status.toLowerCase()} ${isAddingPatient && bed.status === 'Available' ? 'pulse' : ''}`}
              onClick={() => handleBedAction(bed)}
              title={`Status: ${bed.status} | Click to cycle status`} 
            >
              <div className="card-top">Bed {bed.bedNo} <span>Floor {bed.floor}</span></div>
              <div className="card-mid">
                <p className="status-label">{bed.status.toUpperCase()}</p>
                {bed.patient && <p className="p-name">👤 {bed.patient}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="cyber-layout">
      <aside className="cyber-sidebar">
        <div className="brand-header">❖ Simplificant</div>
        <nav className="side-nav">
          <div className={`nav-link ${activeTab === 'Beds' ? 'active' : ''}`} onClick={() => setActiveTab('Beds')}>🛏️ Beds</div>
          <div className={`nav-link ${activeTab === 'Patients' ? 'active' : ''}`} onClick={() => setActiveTab('Patients')}>👥 Patients</div>
          <div className={`nav-link ${activeTab === 'Discharges' ? 'active' : ''}`} onClick={() => setActiveTab('Discharges')}>➡️ Discharges</div>
        </nav>
        {/* Fixed Dashboard button at bottom */}
        <button className="dashboard-btn" onClick={() => navigate('/dashboard')}>← Dashboard</button>
      </aside>

      <main className="cyber-main">
        <div className="centered-content-wrapper">
          {activeTab === 'Beds' && (
            <div className="ward-view">
              {renderWard('ICU')}
              {renderWard('General')}
              {renderWard('PVT')}
            </div>
          )}

          {activeTab === 'Patients' && (
            <div className="tab-panel">
              <h1 className="glow-text">Active Patient Directory</h1>
              <div className="directory-list">
                {beds.filter(b => b.patient !== '').map((p, i) => (
                  <div key={i} className="directory-row glass-card">
                    <div className="dir-info">
                      <span className="dir-name">👤 {p.patient}</span>
                      <span className="dir-meta">Ward: {p.ward} | Bed: {p.bedNo} | Floor: {p.floor}</span>
                    </div>
                    <div className="dir-status neon-green">ACTIVE MONITORING</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Discharges' && (
            <div className="tab-panel">
              <h1 className="glow-text">Beds Ready for Cleaning</h1>
              <div className="ward-grid">
                {beds.filter(b => b.status === 'Cleaning').map((b, i) => (
                  <div key={i} className="bed-card-v3 cleaning" onClick={() => handleBedAction(b)}>
                    <div className="card-top">Bed {b.bedNo} <span>Floor {b.floor}</span></div>
                    <div className="card-mid">
                      <p className="status-label">CLEANING REQUIRED</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default BedEngine;