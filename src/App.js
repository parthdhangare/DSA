import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import BedEngine from './BedEngine';
import Queue from './Queue';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/beds" element={<BedEngine />} />
        <Route path="/queue" element={<Queue />} />
      </Routes>
    </Router>
  );
}

export default App;