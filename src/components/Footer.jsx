import { useEffect, useState } from "react";
import "./Footer.css"; // Import CSS

// Import logos (Ensure paths are correct)
import githubLogo from "../assets/images/github-logo.svg"; // Default logo
import githubHover from "../assets/images/github-hover.svg"; // Hover logo

import linkedinLogo from "../assets/images/linkedin-logo.svg";
import linkedinHover from "../assets/images/linkedin-hover.svg";

import leetcodeLogo from "../assets/images/leetcode.svg";
import leetcodeHover from "../assets/images/leetcode-hover.svg";

const Footer = () => {
  const [isBottom, setIsBottom] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsBottom(bottom);
    };

    const darkModeListener = (e) => setIsDarkMode(e.matches);

    window.addEventListener("scroll", handleScroll);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", darkModeListener);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", darkModeListener);
    };
  }, []);

  // Function to open email client
  const handleEmailClick = () => {
    window.location.href = "mailto:anka5129@colorado.edu";
  };

  return (
    <footer
      className={`${
        isBottom ? (isDarkMode ? "dark-bottom" : "light-bottom") : "default"
      }`}
    >
      <p>STAY IN TOUCH</p>
      <h1>Ready to talk?</h1>
      <p>Feel free to contact me</p>

      {/* Button triggers the email function */}
      <button className="contact-btn" onClick={handleEmailClick}>
        LET'S TALK
      </button>

      {/* Social Media Icons */}
      <div className="social-icons">
        {/* GitHub */}
        <a href="https://github.com/Anirudhpk2001" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="default" />
          <img src={githubHover} alt="GitHub Hover" className="hover" />
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/anirudhkalghatkar/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" className="default" />
          <img src={linkedinHover} alt="LinkedIn Hover" className="hover" />
        </a>

        {/* LeetCode */}
        <a href="https://leetcode.com/u/Anirudhk_2001/" target="_blank" rel="noopener noreferrer">
          <img src={leetcodeLogo} alt="LeetCode" className="default" />
          <img src={leetcodeHover} alt="LeetCode Hover" className="hover" />
        </a>
      </div>

      <p className="mt-4">&copy; 2025 All rights reserved. Anirudh Prashant Kalghatkar.</p>
    </footer>
  );
};

export default Footer;
