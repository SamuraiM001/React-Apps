import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import './main.css'; // Assuming you have a separate CSS file

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1 className="header-title">
            <span className="portfolio-title">
              <span>I</span>
              <span>s</span>
              <span>m</span>
              <span>a</span>
              <span>y</span>
              <span>i</span>
              <span>l</span>
              <span>z</span>
              <span>a</span>
              <span>d</span>
              <span>a</span>
              &nbsp;
              <span>M</span>
              <span>u</span>
              <span>r</span>
              <span>a</span>
              <span>d</span>
            </span>
          </h1>
          <nav className="navbar">
            <ul className="navbar-links">
              <li className="navbar-link">
                <Link to="/">Home</Link>
              </li>
              <li className="navbar-link">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="navbar-link">
                <Link to="/skills">Skills</Link>
              </li>
              <li className="navbar-link">
                <Link to="/education">Education</Link>
              </li>
              <li className="navbar-link">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          {/* Define your components for Home, Projects, Skills, Education, and Contact */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Ismayilzada Murad's Full Stack Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
