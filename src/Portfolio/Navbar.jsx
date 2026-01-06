import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Style1.css";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";


const Navbar = () => {
  return (
    <BrowserRouter>
    <nav>
      <input type="checkbox" id="check" />

      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>

      <label className="logo">PORTFOLIO</label>

      <ul>
        <li><Link className="active" to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default Navbar
