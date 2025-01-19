import React from 'react';
// import resumePic from '../../../public/resume.png';
import resumePic from '../../assets/resume.png'
import './resume.css';

const Resume = () => {
  return (
    <div id="resMain">
      <div id="resume">
        <img src={resumePic}alt="Resume" id="resumePic" />
        <div id="buttonContainer">
          <a href="/resume.png" download="My_Resume.png">
            <button id="button">Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;











