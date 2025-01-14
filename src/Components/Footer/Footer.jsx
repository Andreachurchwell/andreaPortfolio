import React from 'react';
import './Footer.css';
import github from '../../assets/github.png';
import linkedIn from '../../assets/linkIn.jpg';
import emailIcon from '../../assets/google.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <h3>Connect with Me</h3>
          <div className="social-icons">
            <a href="https://github.com/Andreachurchwell" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/andrea-churchwell-669443321/" target="_blank" rel="noopener noreferrer">
              <img src={linkedIn} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="mailto:achurchwell1.prsvr@gmail.com">
              <img src={emailIcon} alt="Email" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2025 Andrea Churchwell. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
