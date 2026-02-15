import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TypingEffect from 'react-typing-effect';
import useAnimatedMesh from '../hooks/useAnimatedMesh';
import './Hero.css';

const photos = [
  '/assets/images/anirudh.jpg',
  '/assets/images/anirudh/photo1.jpg',
  '/assets/images/anirudh/photo2.jpg',
  '/assets/images/anirudh/photo3.jpg',
  '/assets/images/anirudh/photo4.jpg',
];

const Hero = () => {
  const canvasRef = useRef(null);
  useAnimatedMesh(canvasRef);

  const [currentPhoto, setCurrentPhoto] = useState(0);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero__canvas" />
      <div className="hero__content">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className="hero__greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I'm Anirudh
          </motion.p>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Building Scalable <span className="gradient-text">AI Systems</span> &amp;{' '}
            <span className="gradient-text">Intelligent Infrastructure</span>
          </motion.h1>

          <motion.div
            className="hero__typing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <TypingEffect
              text={[
                'AI Systems Engineer.',
                'RAG & Agentic Workflows.',
                'Distributed Systems.',
                'Backend Architect.',
                'FastAPI Microservices.',
              ]}
              speed={80}
              eraseSpeed={40}
              eraseDelay={2000}
              typingDelay={500}
            />
          </motion.div>

          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a href="mailto:anirudhprashantkalghatkar@gmail.com" className="hero__btn hero__btn--primary">
              Get in Touch
            </a>
            <a href="https://github.com/Anirudhpk2001" target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
              GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__image-section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Rotating image carousel */}
          <div className="hero__carousel">
            <div className="hero__glow" />
            <AnimatePresence mode="wait">
              <motion.img
                key={currentPhoto}
                src={photos[currentPhoto]}
                alt="Anirudh Kalghatkar"
                className="hero__carousel-img"
                loading="eager"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </AnimatePresence>

            {/* Dots indicator */}
            <div className="hero__dots">
              {photos.map((_, i) => (
                <button
                  key={i}
                  className={`hero__dot ${currentPhoto === i ? 'hero__dot--active' : ''}`}
                  onClick={() => setCurrentPhoto(i)}
                  aria-label={`Photo ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
