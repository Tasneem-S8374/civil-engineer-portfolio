import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const stats = [
  { number: "150+", label: "Luxury Projects" },
  { number: "10+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "25+", label: "Survey Locations" },
];

const Stats = () => {
  return (
    <section className="py-5 text-center stats-section">
      <Container>
        <Row>
          {stats.map((stat, index) => (
            <Col md={3} key={index} data-aos="zoom-in">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="p-4"
              >
                <h1 className="text-white fw-bold display-5">{stat.number}</h1>
                <p className="text-white">{stat.label}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats;
