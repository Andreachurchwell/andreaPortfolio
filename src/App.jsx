
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Body from './Components/Body/Body.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Certifications from './Components/Certifications/Certs.jsx';
import Resume from './Components/Resume/Resume.jsx'
import ContactMe from './Components/ContactMe/ContactMe.jsx'
import Education from './Components/Education/Education.jsx';
import AboutMe from './Components/AboutMe/AboutMe.jsx';
import Projects from './Components/Projects/Projects.jsx';


import PalindromeChecker from './Components/Projects/pal.jsx';
import Tenzie from './Components/Projects/tenzie.jsx'
import TickTacToe from './Components/Projects/TickTacToe/Game.jsx'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactMe" element={<ContactMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/aboutMe" element={<AboutMe />} />

        <Route path="/palindrome" element={<PalindromeChecker />} />
        <Route path="/tenzie" element={<Tenzie />} />
        <Route path="/ticktactoe" element={<TickTacToe />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;