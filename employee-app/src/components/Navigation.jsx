// src/components/Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="employee-nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/tasks">Tasks</Link>
        </li>
        <li className="nav-item">
          <Link to="/courses">Training Courses</Link>
        </li>
        <li className="nav-item">
          <Link to="/leave">Leave Application</Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default Navigation;
