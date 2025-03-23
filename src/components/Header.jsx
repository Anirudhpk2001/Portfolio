import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Sun, Moon } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/images/A.png";
import projectLogo from "../assets/images/project.gif";
import educationLogo from "../assets/images/education.gif";
import experienceLogo from "../assets/images/experience.svg";
import aboutLogo from "../assets/images/about.gif";
import skillsLogo from "../assets/images/icons8-skills.gif";
import "./Header.css";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        expand="xxl"
        className={`custom-navbar ${
          darkMode ? "navbar-dark" : "navbar-light"
        } ${isScrolled ? "navbar-shadow" : ""}`}
      >
        <Container fluid>
          {/* ✅ Clickable Logo & Name - Scrolls to Top */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="navbar-brand-container"
          >
            <img src={logo} alt="Logo" className="navbar-logo" />
            <span
              className={`navbar-brand-name ${
                darkMode ? "brand-text-dark" : "brand-text-light"
              }`}
            >
              ANIRUDH PRASHANT KALGHATKAR
            </span>
          </Link>

          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
            <Offcanvas.Header closeButton>
              <Link
                to="hero"
                smooth={true}
                duration={10}
                className={`offcanvas-title ${
                  darkMode ? "brand-text-dark" : "brand-text-light"
                }`}
                style={{ cursor: "pointer" }}
              >
                ANIRUDH PRASHANT KALGHATKAR
              </Link>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link
                  to="about"
                  smooth={true}
                  duration={10}
                  className="nav-link"
                >
                  <img
                    src={aboutLogo}
                    alt="About Logo"
                    className="navbar-component-logo"
                  />
                  About Me
                </Link>
                <Link
                  to="education"
                  smooth={true}
                  duration={10}
                  className="nav-link"
                >
                  <img
                    src={educationLogo}
                    alt="Education Logo"
                    className="navbar-component-logo"
                  />
                  Education
                </Link>
                <Link
                  to="skills"
                  smooth={true}
                  duration={10}
                  className="nav-link"
                >
                  <img
                    src={skillsLogo}
                    alt="Skills Logo"
                    className="navbar-component-logo"
                  />
                  Skills
                </Link>
                <Link
                  to="experience"
                  smooth={true}
                  duration={10}
                  className="nav-link"
                >
                  <img
                    src={experienceLogo}
                    alt="Experience Logo"
                    className="navbar-component-logo"
                  />
                  Experience
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={10}
                  className="nav-link"
                >
                  <img
                    src={projectLogo}
                    alt="Project Logo"
                    className="navbar-component-logo"
                  />
                  Projects
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="toggle-button"
            style={{ color: darkMode ? "#FFA500" : "#000000" }}
          >
            {darkMode ? (
              <Sun size={20} color="#FFA500" />
            ) : (
              <Moon size={20} color="#000000" />
            )}
            {/* <span>{darkMode ? " Light Mode" : " Dark Mode"}</span> */}
          </button>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
