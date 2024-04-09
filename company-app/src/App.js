// App.js
import React from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <Dashboard />
    </div>
  );
};

export default App;
