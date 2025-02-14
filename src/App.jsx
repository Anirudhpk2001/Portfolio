import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/Aboutme";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Project from "./components/Project";
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
          <Project/>
        </section>
      </Element>
      <Footer/>
    </>
  );
}

export default App;
