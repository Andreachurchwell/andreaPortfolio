import React from 'react';
import jtc from '../../assets/jtc.png'
import fullStack from '../../assets/fullStack.png'
import frontEnd from '../../assets/frontEnd.png'
import fcc from '../../assets/fcc.png'
import coursera from '../../assets/coursera.png'
import './certs.css'





function Certifications() {
  return (
    <div id='main'>
      <br /><br />
      <h1>My Certifications</h1>
      <div className="certifications-grid">
        <img src={jtc}alt="Certification 1" />
        <img src={fullStack} alt="Certification 2" />
        <img src={frontEnd} alt="Certification 3" />
        <img src={fcc} alt="Certification 4" />
        <img src={coursera} alt="Certification 4" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
}

export default Certifications;