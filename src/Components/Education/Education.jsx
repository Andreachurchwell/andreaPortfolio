import React from 'react'
import './education.css'
import PTA from '../../assets/pta.jpg'
import JTC from '../../assets/jtc.jpg'
const Education = () => {
  return (
    <div id='mainEd'>
      <section id="education">
      <h2>Education</h2>
      <div className="education-item">
        <h3>Persevere Tech Alliance</h3>
        <p><strong>Full-Stack Web Development Bootcamp</strong></p>
        <p><em>August 2023 – December 2024</em></p>
        <ul>
          <li>Comprehensive training in front-end and back-end development with the MERN stack (MongoDB, Express, React, Node.js).</li>
          <li>Focused on building and deploying full-stack applications, enhancing problem-solving and debugging skills.</li>
          <li>Collaborated on capstone projects and developed skills in version control, database management, and web services.</li>
        </ul>
        <img src={PTA} alt="" />
      </div>

      <div className="education-item">
        <h3>Columbia University – Justice Through Code Foundation</h3>
        <p><strong>Foundational Tech and Professional Development Program</strong></p>
        <p><em>October 2024 – December 2024</em></p>
        <ul>
          <li>Built foundational tech skills and participated in a variety of capstone projects and professional development workshops.</li>
          <li>Created polished resumes, cover letters, and networking strategies tailored for the tech industry.</li>
          <li>Developed understanding of no-code technologies and collaborated with peers in a team-focused environment.</li>
        </ul>
        <img src={JTC} alt="" />
      </div>

      <div className="education-item">
        <h3>Columbia University – Tech Pathways</h3>
        <p><strong>16-Week Night Course (Tech Focus)</strong></p>
        <p><em>In Progress 2025</em></p>
        <ul>
          <li>Intensive night course focused on deepening technical knowledge and skills, preparing for advanced roles in tech.</li>
          <li>Will continue building on the foundation laid during the Persevere and Justice Through Code programs.</li>
        </ul>
        <img src={JTC} alt="" />
      </div>
    </section>  
    </div>
  )
}

export default Education
