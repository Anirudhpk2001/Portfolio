import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const educationData = [
  {
    year: 'Aug 2023 – May 2025',
    logo: '/assets/images/uc boulder logo.png',
    institution: 'University of Colorado Boulder',
    degree: "Master's in Computer Science",
    location: 'Boulder, Colorado, USA',
    extra: 'GPA: 4.0/4.0',
    coursework: ['Data Center Scale Computing', 'Computer Vision', 'Natural Language Processing', 'New Venture Launch'],
    transcript: 'https://drive.google.com/file/d/1LcrL2RqNRPWox62ysWtzo1k5U2iDAmHo/view?usp=sharing',
  },
  {
    year: 'Aug 2019 – May 2023',
    logo: '/assets/images/dsi_en.png',
    institution: 'Dayananda Sagar College Of Engineering',
    degree: 'B.E. in Computer Science',
    location: 'VTU University, Bengaluru, India',
    extra: 'CGPA: 9.23/10',
    coursework: ['Data Structures & Algorithms', 'Operating Systems', 'Computer Networks', 'Machine Learning'],
    transcript: 'https://drive.google.com/file/d/1OiqDJOb5-q6XgQyTsv_kiojyM1w6ynFo/view?usp=sharing',
  },
  {
    year: 'Aug 2017 – May 2019',
    logo: '/assets/images/alvas.png',
    institution: "Alva's PU College",
    degree: 'PCME – 12th Grade',
    location: 'Moodubidre, Karnataka, India',
    extra: 'Percentage: 87.33%',
    coursework: ['Physics', 'Chemistry', 'Mathematics', 'Electronics'],
  },
  {
    year: '2011 – 2017',
    logo: '/assets/images/Amrita-Vidyalayam-Belgaum.png',
    institution: 'Amrita Vidyalayam School',
    degree: '10th Grade',
    location: 'Belagavi, Karnataka, India',
    extra: 'CGPA: 10/10',
    coursework: ['Mathematics', 'Science', 'Social Studies', 'English'],
  },
];

const Education = () => {
  return (
    <section className="education section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="edu__grid">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="edu__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <span className="edu__year">{edu.year}</span>
              <div className="edu__logo-wrap">
                <img src={edu.logo} alt={edu.institution} className="edu__logo" loading="lazy" />
              </div>
              <h3 className="edu__institution">{edu.institution}</h3>
              <p className="edu__degree">{edu.degree}</p>
              <p className="edu__location">{edu.location}</p>
              {edu.extra && <span className="edu__extra">{edu.extra}</span>}

              <div className="edu__coursework">
                <span className="edu__coursework-label">Coursework</span>
                <div className="edu__coursework-tags">
                  {edu.coursework.map((c, i) => (
                    <span key={i} className="edu__course-tag">{c}</span>
                  ))}
                </div>
              </div>

              {edu.transcript && (
                <a href={edu.transcript} target="_blank" rel="noopener noreferrer" className="edu__transcript">
                  View Transcript →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;