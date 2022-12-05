import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo_nav.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BsTwitter } from 'react-icons/bs';
import './button.css';

import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" >
            <img src={logo} alt="Logo" style={{height:"70px", width:"225px"}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/aashish-gupta-78b0b6222/"><img src={navIcon1} alt="" /></a>
                <a href="https://twitter.com/Aashish_575"><img src={navIcon2} alt="" /></a>                
                <a href="https://www.instagram.com/aashishgupta934/"><img src={navIcon3} alt="" /></a>
                <a href="https://twitter.com/Aashish_575"> <BsTwitter style={{color: "white"}}/>  </a>
              </div>
              <HashLink to='#connect' >
                
                
              </HashLink>
            </span>
              <HashLink to='#connect' className="mx-5">
                <button class="btn-17">
                  <span class="text-container">
                    <span class="text">Let's Connect</span>
                  </span>
                </button>
              </HashLink>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
