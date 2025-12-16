import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MobNavBar from './Component/MobNavBar';
import NavBar from './Component/NavBar';

import About from './Pages/About';
import Contact from './Pages/Contact';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div className="app-container flex dark:bg-gray-900 dark:text-white transition-all duration-300">
        
        {/* Desktop Nav */}
        <div className="pc-navbar">
          <NavBar />
        </div>

        {/* Mobile Nav */}
        <div className="mob-navbar">
          <MobNavBar />
        </div>

        {/* Main Page Content */}
        <div className="flex-1 h-screen overflow-y-auto px-4 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
