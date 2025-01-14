import React from 'react';
import pic from '../../assets/andrea.jpg';
import './aboutMe.css';

const AboutMe = () => {
  return (
    <div id="aboutMe" className="about-me-container">
      <div className="about-me-content">
        <img src={pic} alt="Andrea Churchwell" className="about-me-image" />
        <div className="about-me-text">
          <h1>Hi, I’m Andrea Churchwell</h1>
          <p>
            After 15 years working as a dental assistant, I made the decision to transition into tech. I’ve always enjoyed problem-solving, and I wanted to use that skill to create impactful solutions as a full-stack developer.
          </p>
          <p>
            My journey started with the Persevere program, where I gained hands-on experience with the MERN stack (MongoDB, Express, React, Node.js). Through Persevere, I learned how to build projects from the ground up and deepen my understanding of full-stack development. I’m eager to continue developing my skills and applying them in real-world situations.
          </p>
          <p>
            Alongside my tech development, I am also a student in the Justice Through Code program at Columbia University. This program has provided me with valuable learning opportunities and has strengthened my commitment to using technology to create positive change. I’m looking forward to expanding my knowledge in the coming year through night classes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
