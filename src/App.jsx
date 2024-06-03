// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import {All, Fullstackdevelopment,DataScience,Cybersecurity } from './Pages';
import './App.css';

const App = () => {
  return (
    <Router className="text">
      <nav>
        <ul className="nav">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              All
            </NavLink>
          </li>
          <li>
            <NavLink to="/fullstackdevelopment" className={({ isActive }) => (isActive ? 'active' : '')}>
              FULL STACK DEVELOPMENT
            </NavLink>
          </li>
          <li>
            <NavLink to="/dataScience" className={({ isActive }) => (isActive ? 'active' : '')}>
            DATA SCIENCE
            </NavLink>
          </li> 
          <li>
            <NavLink to="/cybersecurity" className={({ isActive }) => (isActive ? 'active' : '')}>
            CYBER SECURITY
            </NavLink>
          </li> 
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/fullstackdevelopment" element={<Fullstackdevelopment />} />
        <Route path="/dataScience" element={<DataScience />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
      </Routes>
    </Router>
  );
};

export default App;
