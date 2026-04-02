import React from "react";

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Executive Summary</h2>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="fs-5 text-muted">
              I am a Senior Frontend Architect specializing in ReactJS
              ecosystem, micro-frontend architecture, performance optimization,
              and enterprise UI design systems. I have successfully led
              cross-functional teams, implemented CI/CD strategies, and
              delivered scalable web platforms serving millions of users
              globally.
            </p>

            <p className="fs-5 text-muted">
              My expertise includes frontend architecture, React performance
              tuning, Redux optimization, system design, cloud deployments
              (AWS), and DevOps collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
