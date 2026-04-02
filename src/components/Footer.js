import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="py-4 border-top border-white mt-5 footer-luxury">
        <Container className="text-center">
          <motion.h5
            className="text-white fw-bold mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Infinity 3D Homes
          </motion.h5>

          <p className="fw-bold text-white">
            Luxury Interiors & Expert Surveying
          </p>

          <div className="d-flex justify-content-center gap-4 mb-3">
            <a
              href="https://wa.me/917989061790"
              target="_blank"
              rel="noreferrer"
              className="text-white fs-4 social-icon"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:ugshaik76@gmail.com"
              className="text-white fs-4 social-icon"
            >
              <FaEnvelope />
            </a>
          </div>

          <p className="text-white small">
            © {new Date().getFullYear()} Infinity 3D Homes — All Rights
            Reserved.
          </p>
        </Container>
      </footer>

      {/* Scroll To Top Button */}
      <motion.button
        className="scroll-top-btn"
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <FaArrowUp />
      </motion.button>
    </>
  );
};

export default Footer;
P