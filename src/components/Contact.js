import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <motion.div
              className="contact-card p-5"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-center mb-3 fw-bold contact-title">
                Contact Us
              </h2>

              <p className="text-center contact-info">
                <FaWhatsapp className="me-2" />
                +91 79890 61790
              </p>

              <p className="text-center contact-info mb-4">
                <FaEnvelope className="me-2" />
                ugshaik76@gmail.com
              </p>

              <Form>
                {/* Name */}
                <div className="floating-input mb-4">
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                  />
                  <label>Your Name</label>
                </div>

                {/* Contact */}
                <div className="floating-input mb-4">
                  <input
                    type="text"
                    name="contact"
                    required
                    onChange={handleChange}
                  />
                  <label>Your Email or Phone</label>
                </div>

                {/* Message */}
                <div className="floating-input mb-4">
                  <textarea
                    rows="4"
                    name="message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <label>Brief Project Details</label>
                </div>

                <div className="d-flex gap-3 justify-content-center mt-4">
                  <motion.button
                    type="button"
                    className="btn-outline-navy"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                  </motion.button>

                  <motion.button
                    type="button"
                    className="btn-outline-navy"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send on WhatsApp
                  </motion.button>
                </div>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
