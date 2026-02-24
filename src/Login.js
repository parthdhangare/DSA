import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [role, setRole] = useState('staff'); // Toggle between staff and doctor
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Redirect to dashboard as planned
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Simplificant Portal</h2>
        
        <div className="toggle-group">
          <button 
            type="button" 
            className={`toggle-btn ${role === 'staff' ? 'active' : ''}`}
            onClick={() => setRole('staff')}
          >
            Staff & Admin
          </button>
          <button 
            type="button" 
            className={`toggle-btn ${role === 'doctor' ? 'active' : ''}`}
            onClick={() => setRole('doctor')}
          >
            Doctor
          </button>
        </div>

        <div className="input-group">
          <input 
            type="text" 
            placeholder={role === 'staff' ? "Admin ID" : "Doctor ID"}
            value={id}
            onChange={(e) => setId(e.target.value)}
            required 
          />
        </div>

        <div className="input-group">
          <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>

        <button type="submit" className="login-button">Login</button>
        
        <a href="#" className="forgot-pw">Forgot Password?</a>
      </form>
    </div>
  );
}

export default Login;