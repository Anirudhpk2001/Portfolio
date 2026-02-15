import './App.css';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/Aboutme';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Project from './components/Project';
import { Element } from 'react-scroll';

function App() {
  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Header />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="projects">
        <Project />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="education">
        <Education />
      </Element>
      <Footer />
    </>
  );
}

export default App;
