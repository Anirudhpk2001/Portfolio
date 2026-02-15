import React from 'react';
import { motion } from 'framer-motion';
import './Aboutme.css';

const stats = [
  { value: '5+', label: 'Production Systems' },
  { value: '3+', label: 'Years Experience' },
  { value: 'ISRO', label: 'Research Intern' },
  { value: '4.0', label: 'GPA (MS @ CU)' },
];

const AboutMe = () => {
  const handleDownloadResume = () => {
    window.open(
      'https://drive.google.com/file/d/10tQ849D49y-nT8igCc3EIT40G7_y22PC/view?usp=sharing',
      '_blank'
    );
  };

  return (
    <section className="about section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about__grid">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about__description">
              AI Systems Engineer with a Master's in Computer Science from the University of Colorado Boulder.
              I design and build <strong>modular RAG pipelines</strong>, <strong>agentic AI workflows</strong>,
              and <strong>distributed backend systems</strong> that operate at production scale.
            </p>
            <p className="about__description">
              From architecting <strong>FastAPI microservices</strong> with vector databases and semantic search,
              to deploying <strong>Kubernetes-orchestrated ML workloads</strong> on GCP — I focus on building
              systems that are scalable, observable, and built to last.
            </p>
            <p className="about__description">
              Previously built recommendation systems at <strong>ISRO</strong> that scaled traffic from 100 to 3,000+ users,
              and shipped production features across multiple startups in the AI and full-stack space.
            </p>

            <button className="about__btn" onClick={handleDownloadResume}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download Resume
            </button>
          </motion.div>

          <motion.div
            className="about__stats"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="about__stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <span className="about__stat-value gradient-text">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
