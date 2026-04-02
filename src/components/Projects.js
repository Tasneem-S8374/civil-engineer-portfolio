import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Enterprise Projects</h2>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="fw-bold">Global Payment Platform</h5>
                <p className="text-muted">
                  Built scalable React application handling 2M+
                  transactions/day.
                </p>
                <span className="badge bg-primary me-2">React 18</span>
                <span className="badge bg-secondary me-2">Redux</span>
                <span className="badge bg-dark">AWS</span>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="fw-bold">Healthcare Analytics Dashboard</h5>
                <p className="text-muted">
                  Designed real-time patient analytics UI with advanced data
                  visualization.
                </p>
                <span className="badge bg-primary me-2">React</span>
                <span className="badge bg-success me-2">D3.js</span>
                <span className="badge bg-dark">Micro-Frontend</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
