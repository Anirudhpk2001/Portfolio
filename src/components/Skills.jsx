import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: 'AI & ML',
    skills: [
      { name: 'Machine Learning', image: '/assets/skills/icons8-machine-learning.gif' },
      { name: 'LangChain', image: '/assets/skills/python.gif' },
      { name: 'OpenAI', image: '/assets/skills/python.gif' },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', image: '/assets/skills/python.gif' },
      { name: 'Java', image: '/assets/skills/java.gif' },
      { name: 'JavaScript', image: '/assets/skills/javascript-bg.gif' },
      { name: 'C++', image: '/assets/skills/c++.svg' },
    ],
  },
  {
    title: 'Backend & Frameworks',
    skills: [
      { name: 'React', image: '/assets/skills/react-js.gif' },
      { name: 'Django', image: '/assets/skills/django.svg' },
      { name: 'Flask', image: '/assets/skills/flask.svg' },
      { name: 'FastAPI', image: '/assets/skills/python.gif' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', image: '/assets/skills/aws.svg' },
      { name: 'GCP', image: '/assets/skills/google-cloud.svg' },
      { name: 'Docker', image: '/assets/skills/docker.svg' },
      { name: 'Kubernetes', image: '/assets/skills/kubernetes.svg' },
      { name: 'Terraform', image: '/assets/skills/terraform.svg' },
      { name: 'Git', image: '/assets/skills/git.svg' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', image: '/assets/skills/postgresql.svg' },
      { name: 'MongoDB', image: '/assets/skills/mongodb.svg' },
      { name: 'Redis', image: '/assets/skills/redis-svgrepo-com.svg' },
      { name: 'MySQL', image: '/assets/skills/mysql.svg' },
      { name: 'Firebase', image: '/assets/skills/firebase.svg' },
    ],
  },
];

// Flat list for ticker
const allSkills = skillCategories.flatMap((c) => c.skills);

const Skills = () => {
  return (
    <section className="skills section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
        </motion.h2>

        {/* Scrolling ticker */}
        <div className="skills__ticker-wrapper">
          <div className="skills__ticker">
            {[...allSkills, ...allSkills].map((skill, i) => (
              <div key={i} className="skills__ticker-item">
                <img src={skill.image} alt={skill.name} loading="lazy" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Categorized grid */}
        <div className="skills__categories">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              className="skills__category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="skills__category-title">{cat.title}</h3>
              <div className="skills__grid">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="skills__item"
                    whileHover={{ scale: 1.06, y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img src={skill.image} alt={skill.name} className="skills__icon" loading="lazy" />
                    <span className="skills__name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
