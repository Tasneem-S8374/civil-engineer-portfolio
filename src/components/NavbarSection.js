import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarSection = () => {
  return (
    <Navbar expand="lg" fixed="top" className="glass-navbar py-3">
      <Container>
        <Navbar.Brand className="fw-bold text-white">
          Infinity 3D Homes
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <b>Home</b>
            </Nav.Link>
            <Nav.Link href="#services">
              <b>Services</b>
            </Nav.Link>
            <Nav.Link href="#portfolio">
              <b>Portfolio</b>
            </Nav.Link>
            <Nav.Link href="#plans">
              <b>Plans</b>
            </Nav.Link>
            <Nav.Link href="#contact">
              <b>Contact</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarSection;
