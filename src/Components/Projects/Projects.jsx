import React, { useState } from 'react';
import ss1 from '../../assets/shoeStore.png'
import ss2 from '../../assets/shoeStore2.png'
import ss3 from '../../assets/shoeStore3.png'

import './projects.css'
import { Link } from 'react-router-dom'





const Projects = () => {
  return (

    <div id="mainProjects">
       {/* <Link to='/quote'>Quote</Link> */}
      {/* <Link to='/passcode'>Passcode</Link> */}
      <Link to='/ticktactoe'>Ticktactoe</Link>
    
      <Link to='/tenzie'>Tenzie</Link>
      {/* <Link to='/pokemon'>Pokemon</Link> */}
      {/* <Link to='/todolist'>ToDoList</Link> */}
      <Link to='/palindrome'>Palindrome</Link>
    </div>

  )
};

export default Projects;
