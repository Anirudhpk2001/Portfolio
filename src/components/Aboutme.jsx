import React, { useState, useEffect } from "react";
import "./Aboutme.css";

const AboutMe = ({ darkMode }) => {
  const [dots, setDots] = useState(".");

  // Effect to animate dots from 1 to 5
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 5 ? "." : prev + "."));
    }, 500); // Change every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-me-container">
      <h2 className={`about-heading ${darkMode ? "dark-mode-text" : ""}`}>
        ABOUT ME
        
      </h2>

      <p className={`about-text ${darkMode ? "dark-mode-text" : ""}`}>
        Second-year Computer Science graduate student at the University of
        Colorado Boulder with experience in software development, cloud
        platforms, and distributed systems. Currently contributing to a new
        venture launch, R Place, where I focus on technical initiatives and
        marketing strategies. Passionate about building scalable solutions, with
        a proven record of delivering impactful projects during internships at
        ISRO and startups. Skilled in Java, Python, React, and cloud
        technologies like AWS and GCP.<span>{dots}</span>
      </p>

      <button className="download-button">DOWNLOAD RESUME</button>
    </div>
  );
};

export default AboutMe;
