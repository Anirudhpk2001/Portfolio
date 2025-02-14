import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TypingEffect from "react-typing-effect";
import "./Hero.css"; 
import profileImage from "../assets/images/anirudh.jpg"; 

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-image">
          <img src={profileImage} alt="Anirudh Prashant Kalghatkar" />
        </div>

        {/* Right Side - Text */}
        <div className="hero-text">
        <h1>Hi,</h1>
          <h1>I'm Anirudh Prashant Kalghatkar</h1>
          <h2> 
            <TypingEffect
              text={[
                "Software Developer.",
                "Front-end Developer.",
                "Back-end Developer.",
                "Full-stack Developer.",
                "AI Enthusiast.",
                "Cloud Engineer.",
                "Entrepeneur."
              ]}
              speed={100} // Typing Speed
              eraseSpeed={50} // Erasing Speed
              eraseDelay={1500} // Delay before erasing
              typingDelay={500} // Delay before typing next word
            />
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
