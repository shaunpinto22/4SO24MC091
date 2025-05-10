import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Stock Aggregator</h1>
      <ul>
        <li><Link to="/">Stock Page</Link></li>
        <li><Link to="/correlation-heatmap">Correlation Heatmap</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;