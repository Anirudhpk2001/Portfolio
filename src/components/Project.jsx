import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { projectsData } from "./projectsData";
import "./Project.css";

const Projects = () => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedProject(null);
  };

  return (
    <>
      <h1 className="projects-title">Latest Works</h1>
      <div className="projects-container force-light">
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h2 className="project-heading">{project.title}</h2>
                <div className="project-description">
                  {project.shortDescription.map((desc, i) => (
                    <p key={i} className="project-text">
                      {desc}
                    </p>
                  ))}
                </div>
                <button
                  className="details-button"
                  onClick={() => handleShow(project)}
                >
                  Details
                </button>
              </div>
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
            </div>
          ))}
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          centered
          dialogClassName="modal-90w force-light"
        >
          <Modal.Header closeButton>
            <Modal.Title className="modal-title">
              {selectedProject?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body-scroll">
            <div className="modal-content-wrapper">
              <div className="modal-images-container">
                {selectedProject?.images?.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedProject.title} - Image ${index + 1}`}
                    className="modal-image"
                  />
                ))}
              </div>
              <div className="modal-description">
                {selectedProject?.fullDescription}
              </div>
              <div className="modal-tech-stack">
                <h4 className="tech-stack-title">Technologies Used:</h4>
                <div className="tech-tags">
                  {selectedProject?.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Projects;
