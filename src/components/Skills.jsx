import React from "react";
import "./Skills.css";

// Import skill images (SVGs, GIFs, or PNGs)
import javaLogo from "../assets/skills/java.gif";
import pythonLogo from "../assets/skills/python.gif";
import jsLogo from "../assets/skills/javascript-bg.gif";
import reactLogo from "../assets/skills/react-js.gif";
import angularLogo from "../assets/skills/angularjs.svg";
import awsLogo from "../assets/skills/aws.svg";
import bootstrapLogo from "../assets/skills/bootstrap.svg";
import cLogo from "../assets/skills/c++.svg";
import djangoLogo from "../assets/skills/django.svg";
import gitLogo from "../assets/skills/git.svg";
import dockerLogo from "../assets/skills/docker.svg";
import firebaseLogo from "../assets/skills/firebase.svg";
import flaskLogo from "../assets/skills/flask.svg";
import githubLogo from "../assets/skills/github.gif";
import sqlLogo from "../assets/skills/icon-sql.svg";
import kubernetesLogo from "../assets/skills/kubernetes.svg";
import linuxLogo from "../assets/skills/linux.gif";
import mongoLogo from "../assets/skills/mongodb.svg";
import mysqlLogo from "../assets/skills/mysql.svg";
import postgresqlLogo from "../assets/skills/postgresql.svg";
import redisLogo from "../assets/skills/redis-svgrepo-com.svg";
import terraformLogo from "../assets/skills/terraform.svg";
import gcpLogo from "../assets/skills/google-cloud.svg";
import MachinelearnLogo from "../assets/skills/icons8-machine-learning.gif"


// Define skills with names and images
const skills = [
  { name: "Java", image: javaLogo },
  { name: "Python", image: pythonLogo },
  { name: "JavaScript", image: jsLogo },
  { name: "React", image: reactLogo },
  { name: "Angularjs", image: angularLogo },
  { name: "AWS", image: awsLogo },
  { name: "Bootstrap", image: bootstrapLogo },
  { name: "C++", image: cLogo },
  { name: "Django", image: djangoLogo },
  { name: "Git", image: gitLogo },
  { name: "Docker", image: dockerLogo },
  { name: "Firebase", image: firebaseLogo },
  { name: "Flask", image: flaskLogo },
  { name: "Github", image: githubLogo },
  { name: "SQL", image: sqlLogo },
  { name: "Kubernetes", image: kubernetesLogo },
  { name: "Linux", image: linuxLogo },
  { name: "MongoDB", image: mongoLogo },
  { name: "MySQL", image: mysqlLogo },
  { name: "Postgresql", image: postgresqlLogo },
  { name: "Redis", image: redisLogo },
  { name: "Terraform", image: terraformLogo },
  { name: "GCP", image: gcpLogo },
  { name: "Machine Learning", image: MachinelearnLogo },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">SKILLS </h1>
      
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
