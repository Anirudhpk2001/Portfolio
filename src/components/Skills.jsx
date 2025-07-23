import React from "react";
import "./Skills.css";

// Define skills with names and image paths
const skills = [
  { name: "Java", image: "/assets/skills/java.gif" },
  { name: "Python", image: "/assets/skills/python.gif" },
  { name: "JavaScript", image: "/assets/skills/javascript-bg.gif" },
  { name: "React", image: "/assets/skills/react-js.gif" },
  { name: "Angularjs", image: "/assets/skills/angularjs.svg" },
  { name: "AWS", image: "/assets/skills/aws.svg" },
  { name: "Bootstrap", image: "/assets/skills/bootstrap.svg" },
  { name: "C++", image: "/assets/skills/c++.svg" },
  { name: "Django", image: "/assets/skills/django.svg" },
  { name: "Git", image: "/assets/skills/git.svg" },
  { name: "Docker", image: "/assets/skills/docker.svg" },
  { name: "Firebase", image: "/assets/skills/firebase.svg" },
  { name: "Flask", image: "/assets/skills/flask.svg" },
  { name: "Github", image: "/assets/skills/github.gif" },
  { name: "SQL", image: "/assets/skills/icon-sql.svg" },
  { name: "Kubernetes", image: "/assets/skills/kubernetes.svg" },
  { name: "Linux", image: "/assets/skills/linux.gif" },
  { name: "MongoDB", image: "/assets/skills/mongodb.svg" },
  { name: "MySQL", image: "/assets/skills/mysql.svg" },
  { name: "Postgresql", image: "/assets/skills/postgresql.svg" },
  { name: "Redis", image: "/assets/skills/redis-svgrepo-com.svg" },
  { name: "Terraform", image: "/assets/skills/terraform.svg" },
  { name: "GCP", image: "/assets/skills/google-cloud.svg" },
  { name: "Machine Learning", image: "/assets/skills/icons8-machine-learning.gif" },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">SKILLS</h1>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.image} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
