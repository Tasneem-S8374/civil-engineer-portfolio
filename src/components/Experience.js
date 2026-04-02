import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Professional Experience</h2>

        <div className="card shadow-lg mb-4">
          <div className="card-body">
            <h4 className="fw-bold">Senior React Architect</h4>
            <h6 className="text-muted">
              Enterprise SaaS Platform | 2020 - Present
            </h6>

            <ul className="mt-3">
              <li>Architected micro-frontend structure using React 18</li>
              <li>Led a team of 12 frontend engineers</li>
              <li>
                Improved performance by 40% using code splitting & memoization
              </li>
              <li>Designed reusable component library (Design System)</li>
              <li>
                Integrated CI/CD pipelines & testing strategy (Jest, Cypress)
              </li>
            </ul>
          </div>
        </div>

        <div className="card shadow-lg mb-4">
          <div className="card-body">
            <h4 className="fw-bold">Lead Frontend Engineer</h4>
            <h6 className="text-muted">Fintech Organization | 2016 - 2020</h6>

            <ul className="mt-3">
              <li>Developed real-time financial dashboards</li>
              <li>Implemented Redux architecture for large-scale apps</li>
              <li>Collaborated with backend (Spring Boot, Node)</li>
              <li>Enforced code quality standards and reviews</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
