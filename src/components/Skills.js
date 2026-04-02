import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Technical Expertise</h2>

        <div className="row">
          <div className="col-md-4">
            <h5 className="fw-bold">Frontend Architecture</h5>
            <ul className="list-group">
              <li className="list-group-item">React 16/17/18</li>
              <li className="list-group-item">Redux Toolkit</li>
              <li className="list-group-item">Micro Frontends</li>
              <li className="list-group-item">Performance Optimization</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="fw-bold">Backend Collaboration</h5>
            <ul className="list-group">
              <li className="list-group-item">REST APIs</li>
              <li className="list-group-item">Spring Boot</li>
              <li className="list-group-item">Node.js</li>
              <li className="list-group-item">JWT & OAuth</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="fw-bold">DevOps & Cloud</h5>
            <ul className="list-group">
              <li className="list-group-item">AWS</li>
              <li className="list-group-item">Docker</li>
              <li className="list-group-item">CI/CD Pipelines</li>
              <li className="list-group-item">GitHub Actions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
