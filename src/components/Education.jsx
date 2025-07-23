import React from "react";
import "./Education.css";


const educationData = [
    {
      year: "Aug 2023 - Present",
      logo: "/assets/images/uc boulder logo.png",
      institution: "University of Colorado Boulder",
      degree: "Master's in Computer Science",
      location: "Boulder, Colorado, USA",
      extra: "GPA: 4.0/4.0",
      coursework: [
        "Data Center Scale Computing",
        "Computer Vision",
        "Natural Language Processing",
        "New Venture Launch"
      ],
      transcript: "https://drive.google.com/file/d/1LcrL2RqNRPWox62ysWtzo1k5U2iDAmHo/view?usp=sharing", // Only CU Boulder has this
    },
    {
      year: "Aug 2019 - May 2023",
      logo: "/assets/images/dsi_en.png",
      institution: "Dayananda Sagar College Of Engineering",
      degree: "Bachelor of Engineering, Computer Science and Engineering",
      location: "VTU University, Bengaluru, Karnataka, India.",
      extra: "CGPA: 9.23/10",
      coursework: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Machine Learning"
      ],
      transcript: "https://drive.google.com/file/d/1OiqDJOb5-q6XgQyTsv_kiojyM1w6ynFo/view?usp=sharing", // Only Dayananda has this
    },
    {
      year: "Aug 2017 - May 2019",
      logo: "/assets/images/alvas.png",
      institution: "Alva's PU College",
      degree: "PCME - 12th Grade",
      location: "Moodubidre, Karnataka, India.",
      extra: "Percentage: 87.33%",
      coursework: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Electronics"
      ],
      // No transcript for this one
    },
    {
      year: "2011-2017",
      logo: "/assets/images/Amrita-Vidyalayam-Belgaum.png",
      institution: "Amrita Vidyalayam School",
      degree: "10th Grade",
      location: "Belagavi, Karnataka, India.",
      extra: "CGPA: 10/10",
      coursework: [
        "Mathematics",
        "Science",
        "Social Studies",
        "English"
      ],
      // No transcript for this one
    },
  ];
  

  const Education = () => {
    return (
      <div className="container mt-5">
        <h2 className="education-title text-center">EDUCATION</h2> {/* Centering the title */}
        <div className="row">
          {educationData.map((edu, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="education-card">
                <h6 className="edu-year">{edu.year}</h6>
                <div className="edu-logo-container">
                  <img src={edu.logo} alt={edu.institution} className="edu-logo" />
                </div>
                <h4 className="edu-institution">{edu.institution}</h4>
                <p className="edu-degree">{edu.degree}</p>
                <p className="edu-location">{edu.location}</p>
                {edu.extra && <p className="edu-extra">• {edu.extra}</p>}
                
                <div className="coursework">
                  <h6>Related Coursework:</h6>
                  <ul>
                    {edu.coursework.map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                </div>
  
                {/* Only show transcript link if it exists */}
                {edu.transcript && (
                  <a href={edu.transcript} className="transcript-link" target="_blank" rel="noopener noreferrer">
                    View Transcript
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Education;
  