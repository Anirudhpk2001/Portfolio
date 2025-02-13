import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/Aboutme";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <Header />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <AboutMe />
      </Element>
      {/* Add other sections here when ready */}
      <Element name="education">
       
          <Education/>
        
      </Element>
      <Element name="skills">
        
        <Skills/>
        
      </Element>
      <Element name="experience">
        <section id="experience">
          <Experience/>
        </section>
      </Element>
      <Element name="projects">
        <section id="projects">
          <h2>Projects</h2>
          <p>Coming soon...</p>
        </section>
      </Element>
    </>
  );
}

export default App;
