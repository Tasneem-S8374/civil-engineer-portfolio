import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

const Services = () => {
  const services = [
    {
      title: "Interior Designing",
      desc: "3D visualization & premium interiors.",
    },
    { title: "Survey Works", desc: "DGPS, ETS & contour mapping." },
    { title: "Construction Planning", desc: "BOQ & structural planning." },
  ];

  return (
    <section id="services" className="portfolio-section">
      <Container>
        <h2 className="text-center text-white mb-5" data-aos="fade-up">
          Our Premium Services
        </h2>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} data-aos="zoom-in">
              <Tilt glareEnable={true} glareMaxOpacity={0.2}>
                <Card className="service-card p-4 text-center">
                  <h4 className="text-blue">{service.title}</h4>
                  <p>{service.desc}</p>
                </Card>
              </Tilt>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
