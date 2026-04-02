import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaDownload } from "react-icons/fa";

const plansData = [
  {
    title: "Ground Floor Plan",
    desc: "20' x 39' layout — Porch, Living, Kitchen & Bedroom.",
    img: "/groundfloorplan.jpg",
    file: "/groundfloorplan.jpg",
  },
  {
    title: "First Floor Plan",
    desc: "Master Bedroom, Lobby & Balcony detailing.",
    img: "/first-floor-layout-plan.jpg",
    file: "/first-floor-layout-plan.jpg",
  },
  {
    title: "Luxury Villa Layout",
    desc: "Premium 3BHK architectural blueprint.",
    img: "/luxuryVillaLayout.jpg",
    file: "/luxuryVillaLayout.jpg",
  },
  {
    title: "Modern Duplex Plan",
    desc: "Spacious duplex with terrace.",
    img: "/modernDuplex-plan.jpg",
    file: "/modernDuplex-plan.jpg",
  },
  {
    title: "Compact Home Plan",
    desc: "Affordable compact modern layout.",
    img: "/compact-home-plan.jpg",
    file: "/compact-home-plan.jpg",
  },
];

const Plans = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < plansData.length - 3) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section id="plans" className="plans-section">
      <Container>
        <h2 className="text-center text-white fw-bold mb-5">
          Plans & Architectural Layouts
        </h2>

        <div className="slider-wrapper">
          <button className="arrow-btn left" onClick={prevSlide}>
            <FaChevronLeft />
          </button>

          <div className="slider-container">
            <motion.div
              className="slider-track"
              animate={{ x: `-${index * 33.33}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {plansData.map((plan, i) => (
                <div className="plan-card" key={i}>
                  <img src={plan.img} alt={plan.title} />

                  <div className="plan-content">
                    <h5>{plan.title}</h5>
                    <p>{plan.desc}</p>

                    <Button href={plan.file} download className="btn-download">
                      <FaDownload className="me-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button className="arrow-btn right" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Plans;
