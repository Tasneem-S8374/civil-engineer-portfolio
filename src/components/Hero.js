import React from "react";
import { motion } from "framer-motion";
import { Container, Button, Nav } from "react-bootstrap";
const Hero = () => {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <Container className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="display-3 fw-bold text-white"
        >
          Luxury Interiors & Expert Surveying
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="lead mt-4 text-light"
        >
          Infinity 3D Homes — Precision Meets Elegance
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4"
        >
          <div className="d-flex gap-3 justify-content-center mt-4">
            <motion.a
              href="#portfolio"
              className="btn-outline-navy text-decoration-none d-inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.a>

            <motion.a
              href="#contact"
              className="btn-outline-navy text-decoration-none d-inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
