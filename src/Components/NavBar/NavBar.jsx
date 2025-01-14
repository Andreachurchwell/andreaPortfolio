import React, { useState } from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsMobile(!isMobile);

  const closeMenu = () => setIsMobile(false);  // Close the mobile menu when a link is clicked

  return (
    <div className="navbar">
      <div className="burger-icon" onClick={toggleMenu}>
        {isMobile ? 'X' : '☰'}
      </div>

      <div className={`nav-links ${isMobile ? 'active' : ''}`}>
        <Link to="/" className="nav-item" onClick={closeMenu}>Home</Link>
        <Link to="/aboutMe" className="nav-item" onClick={closeMenu}>About Me</Link>
        <Link to="/education" className="nav-item" onClick={closeMenu}>Education</Link>
        <Link to="/projects" className="nav-item" onClick={closeMenu}>Projects</Link>
        <Link to="/certifications" className="nav-item" onClick={closeMenu}>Certifications</Link>
        <Link to="/resume" className="nav-item" onClick={closeMenu}>Resume</Link>
        <Link to="/contactMe" className="nav-item" onClick={closeMenu}>Contact Me</Link>


      </div>
    </div>
  );
};

export default NavBar;







