import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { Routes, Route } from 'react-router-dom'
import './projects.css'
import PalindromeChecker from './pal';




const Projects = () => {
  return (
   

    <Link to='/palindrome'>{PalindromeChecker}</Link>

  )
};

export default Projects;
