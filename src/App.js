// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Cars from './pages/Cars';
import Rents from './pages/Rents';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  return (
    <Router>
      <ToastContainer position="top-right" theme="colored" />
      <div className={theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white min-h-screen'}>
        <Navbar toggleTheme={toggleTheme} theme={theme} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/rents" element={<Rents />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
