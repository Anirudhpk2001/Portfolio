import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    company: 'MyMech',
    role: 'Founding Software Engineer',
    duration: 'July 2025 – Present',
    location: 'Remote',
    skills: ['FastAPI', 'Python', 'Vector Databases', 'Vertex AI', 'Firestore', 'Docker', 'Microservices', 'System Design'],
    description: [
      'Architected a scalable document ingestion pipeline using FastAPI, Firestore, and Vertex AI embeddings — supporting PDF parsing, deduplication, and semantic search.',
      'Built a custom vector database layer on Firestore with batching, hash-based deduplication, and optimized query traversal.',
      'Developed microservices for file upload, text chunking, and background task orchestration handling documents up to 50MB+.',
      'Led end-to-end system architecture — data modeling, API design, real-time monitoring, and long-running job orchestration.',
    ],
    metrics: ['50MB+ document support', 'End-to-end architecture'],
    logo: '/assets/images/themymech_logo.jpeg',
  },
  {
    company: 'LearnLocal',
    role: 'Full Stack Developer',
    duration: 'Jan 2025 – July 2025',
    location: 'Boulder, CO',
    skills: ['React', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Auth'],
    description: [
      'Built core platform features enabling instructors to create and publish skill-based classes with authentication and scheduling.',
      'Developed a Supabase-backed auth system improving onboarding flow by 40%.',
      'Implemented end-to-end API routes for class discovery, user favorites, and real-time updates.',
      'Shipped multiple production-ready features focused on speed and clean integration.',
    ],
    metrics: ['+40% onboarding improvement'],
    logo: '/assets/images/learn_local_logo.jpeg',
  },
  {
    company: 'UnboxMe',
    role: 'Software Developer',
    duration: 'Aug 2024 – May 2025',
    location: 'Boulder, CO',
    skills: ['ReactJS', 'Django', 'PostgreSQL', 'OpenAI API'],
    description: [
      'Engineered an Amazon Image Optimization web app, boosting product visibility and engagement by 15%.',
      'Designed scalable REST APIs, enhancing system performance by 30%.',
      'Built a PostgreSQL schema reducing query latency by 40%.',
      'Integrated OpenAI API with advanced prompt engineering, increasing conversion rates by 25%.',
    ],
    metrics: ['+15% engagement', '+30% performance', '-40% latency', '+25% conversions'],
    logo: '/assets/images/unboxme.jpg',
  },
  {
    company: 'CU Boulder',
    role: 'Course Manager — Computer Security & Ethical Hacking',
    duration: 'Aug 2024 – Dec 2024',
    location: 'Boulder, CO',
    skills: ['Network Security', 'Ethical Hacking', 'Packet Analysis'],
    description: [
      'Guided 45+ students in network security, packet analysis, and ethical hacking.',
      'Designed 10+ hands-on assignments increasing student engagement by 30%.',
      'Resolved 95% of reported issues through mentoring and debugging support.',
    ],
    metrics: ['+20% assignment scores', '+30% engagement', '95% resolution rate'],
    logo: '/assets/images/uc boulder logo.png',
  },
  {
    company: 'ISRO',
    role: 'Software Engineer Intern',
    duration: 'Feb 2023 – July 2023',
    location: 'Bangalore, India',
    skills: ['Data Automation', 'Recommendation Systems', 'Python', 'K-Means'],
    description: [
      'Automated data extraction from ISRO Data Centers, reducing processing time by 70%.',
      'Optimized large datasets using Pandas and NumPy, improving analysis speed by 50%.',
      'Built a Collaborative Filtering + Content-Based Recommendation System using K-means clustering.',
      'Scaled average platform traffic from 100 to 3,000+ users through improved recommendations.',
    ],
    metrics: ['-70% processing time', '+60% engagement', '100 → 3,000 users'],
    logo: '/assets/images/isro.png',
  },
];

export default function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="experience section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="exp__timeline">
          <div className="exp__line" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`exp__item ${expandedIndex === index ? 'exp__item--expanded' : ''}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="exp__dot" />
              <div className="exp__date">{exp.duration}</div>

              <div className="exp__card">
                <div className="exp__header">
                  <img src={exp.logo} alt={exp.company} className="exp__logo" loading="lazy" />
                  <div>
                    <h3 className="exp__company">{exp.company}</h3>
                    <p className="exp__role">{exp.role}</p>
                    <span className="exp__location">{exp.location}</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="exp__metrics">
                  {exp.metrics.map((m, i) => (
                    <span key={i} className="exp__metric">{m}</span>
                  ))}
                </div>

                {/* Skills */}
                <div className="exp__skills">
                  {exp.skills.map((s, i) => (
                    <span key={i} className="exp__skill-tag">{s}</span>
                  ))}
                </div>

                {/* Description (expanded) */}
                <motion.div
                  className="exp__description"
                  initial={false}
                  animate={{
                    height: expandedIndex === index ? 'auto' : 0,
                    opacity: expandedIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ul>
                    {exp.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </motion.div>

                <span className="exp__expand-hint">
                  {expandedIndex === index ? 'Click to collapse' : 'Click to expand'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
