import React from "react";
import { Container, Carousel } from "react-bootstrap";
import { motion } from "framer-motion";

const images = [
  { src: "/marble-tv-wall.jpg", title: "Marble TV Wall" },
  { src: "/groundfloorplan.jpg", title: "Ground Floor Plan" },
  { src: "/first-floor-layout-plan.jpg", title: "First Floor Plan" },
  { src: "/luxury-bedroom.jpg", title: "Luxury Bedroom Interior" },
  { src: "/modern-kitchen.jpg", title: "Modern Kitchen Design" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <Container>
        <motion.h2
          className="text-center text-white mb-5 fw-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Portfolio Showcase
        </motion.h2>

        <Carousel
          fade
          interval={3000}
          indicators={true}
          nextIcon={<span className="custom-arrow">›</span>}
          prevIcon={<span className="custom-arrow">‹</span>}
        >
          {images.map((img, index) => (
            <Carousel.Item key={index}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img
                  className="d-block w-100 portfolio-image"
                  src={img.src}
                  alt={img.title}
                />
                <Carousel.Caption>
                  <h5 className="fw-bold">{img.title}</h5>
                </Carousel.Caption>
              </motion.div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Portfolio;
