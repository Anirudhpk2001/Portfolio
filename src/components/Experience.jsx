import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Experience.css";


const experiences = [
  {
  "company": "MyMech",
  "role": "Founding Software Engineer",
  "duration": "July 2025 - Present",
  "location": "Remote",
  "skills": ["FastAPI", "Python", "Vector Databases", "Vertex AI", "Firestore", "Docker", "Microservices", "System Design"],
  "description": [
    "Designed and implemented a scalable document ingestion pipeline using FastAPI, Firestore, and Vertex AI embeddings, supporting PDF parsing, deduplication, and semantic search.",
    "Built a custom vector database layer on top of Google Firestore with batching, hash-based deduplication, semantic similarity checks, and optimized query traversal.",
    "Developed microservices for file upload, PDF processing, text chunking, and background task orchestration, ensuring reliability for large documents (50MB+).",
    "Containerized services using Docker, improving developer workflow and enabling seamless deployment to cloud environments.",
    "Led end-to-end system architecture decisions, covering data modeling, API design, real-time monitoring, and long-running job handling."
  ],
  "logo": "/assets/images/themymech_logo.jpeg"
},
{
  "company": "LearnLocal",
  "role": "Full Stack Developer",
  "duration": "January 2025 - July 2025",
  "location": "Boulder, CO",
  "skills": ["React", "Node.js", "Express", "Supabase", "PostgreSQL", "Auth", "Product Development"],
  "description": [
    "Built core platform features enabling instructors to create and publish local skill-based classes, integrating authentication, scheduling, and class management.",
    "Developed a Supabase-backed authentication system and user profile experience for instructors and learners, improving onboarding flow by 40%.",
    "Implemented end-to-end API routes using Express and PostgreSQL for class discovery, user favorites, and real-time updates.",
    "Collaborated with the founding team to refine user flows, improve UI/UX, and iterate quickly based on instructor feedback.",
    "Shipped multiple production-ready features with a focus on speed, usability, and clean frontend-backend integration."
  ],
  "logo": "/assets/images/learn_local_logo.jpeg"
}
,
  {
    company: "UnboxMe",
    role: "Software Developer",
    duration: "August 2024 - May 2025",
    location: "Boulder, CO",
    skills: ["ReactJS", "Django", "PostgreSQL", "OpenAI API"],
    description: [
        "Engineered an Amazon Image Optimization web app, boosting product visibility and increasing user engagement by 15% through strategic keyword ranking.",
        "Designed and deployed scalable REST APIs, optimizing data retrieval and enhancing system performance by 30%.",
        "Developed a PostgreSQL database schema, reducing query latency and improving data processing efficiency by 40%. ",
        "Integrated OpenAI API with advanced prompt engineering, generating AI-powered recommendations that increased product conversion rates by 25% and sales by 15%.", 
    ],
    logo: "/assets/images/unboxme.jpg",
  },
  {
    company: "University of Colorado Boulder",
    role: "Course Manager - Computer Security & Ethical Hacking",
    duration: "August 2024 - December 2024",
    location: "Boulder, CO",
    skills: ["Network Security", "Ethical Hacking", "Packet Analysis"],
    description: [
      "Guided 45+ students in network security, packet analysis, and ethical hacking, leading to a 20% improvement in practical assignment scores." ,
      "Designed and graded 10+ hands-on assignments on TCP/IP protocols, packet sniffing (Wireshark, Tshark), and penetration testing, increasing student engagement by 30%.",
      "Mentored students in debugging scripts and troubleshooting network vulnerabilities, resolving 95% of reported issues and reinforcing expertise in Python, networking, and security tools. ",
    ],
    logo: "/assets/images/uc boulder logo.png",
  },
  {
    company: "Indian Space Research Organization (ISRO)",
    role: "Software Engineer Intern",
    duration: "February 2023 - July 2023",
    location: "Bangalore, India",
    skills: ["Data Automation", "Recommendation Systems", "Python"],
    description: [
        " Automated data extraction from ISRO Data Centers, enhancing retrieval efficiency and reducing processing time by 70%, leading to faster decision making.",
        "Optimized large datasets by cleaning and structuring raw data using Pandas and NumPy, improving analysis speed by 50%.",
        "Visualized complex datasets with Matplotlib, delivering actionable insights that improved strategic planning and research outcomes.",
        "Implemented a Collaborative Filtering and Content-Based Recommendation System using K-means clustering, increasing user engagement by 60% and scaling average traffic from 100 to 3,000 users." ,
    ],
    logo: "/assets/images/isro.png",
  },
];

export default function ExperienceTimeline() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-1">EXPERIENCES</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-date">{exp.duration}</div>
            <Card className="experience-card">
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={3} md={2} className="text-center">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="company-logo"
                    />
                  </Col>
                  <Col xs={9} md={10}>
                    <h3 className="mb-1">{exp.company}</h3>
                    <h5 className="mb-4">{exp.role}</h5>
                    <p className="text-muted">{exp.location}</p>
                    <p>
                      <strong>Skills:</strong> {exp.skills.join(", ")}
                    </p>
                    <ul>
                      {exp.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}
