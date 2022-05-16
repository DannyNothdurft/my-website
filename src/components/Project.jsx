import React from 'react';
import "./project.scss";

const Project = () => {
  return (
    <div id="projects" className="projects-container">
      <h2 className="project-txt">Projekte</h2>
      <div className="project project-1">
        <div className="project-img"></div>
        <div className="project-info">
          <h2 className="project-name">Gehirn Training</h2>
          <h3 className="project-category">Web-Aplikation</h3>
          <h4 className="project-description">
            Eine kleine Web-Apllikation mit leichte Rechenaufgaben.
          </h4>
          <a href="#contact" className="contact-project">
            <span>contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;