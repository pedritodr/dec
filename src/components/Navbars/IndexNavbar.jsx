import React from "react";
import { Navbar, NavDropdown, Nav, Image, Button } from "react-bootstrap";

import logoStupendo from "../../assets/img/logo-stupendo.png"; // with import
import logoDec from "../../assets/img/logo-dec.png"; // with import

export const IndexNavbar = () => {
  return (
    <>
      <Navbar className="navbarMain">
        <Navbar.Brand href="#resumen">
          <Image
            className="logo-stupendo"
            src={logoStupendo}
            alt="Generic placeholder"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown
            alignRight
            title="Productos"
            id="collasible-nav-dropdown"
            style={{ color: "#3b4b73" }}
          >
            <NavDropdown.Item href="#action/3.1">
              <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
              </Navbar.Text>
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
      <Navbar
        collapseOnSelect
        className="navbarDec"
        expand="lg"
        bg="light"
        variant="light"
      >
        <Navbar.Brand href="#home">
          <Image className="logo-dec" src={logoDec} alt="Generic placeholder" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="nav-link-item" href="#features">
              Resumen
            </Nav.Link>
            <Nav.Link className="nav-link-item" href="#pricing">
              ¿Por qué Dec?
            </Nav.Link>
            <Nav.Link className="nav-link-item" href="#pricing">
              Easy Sign
            </Nav.Link>
            <Nav.Link className="nav-link-item" href="#pricing">
              Developers
            </Nav.Link>
            <Nav.Link className="nav-link-item" href="#pricing">
              Planes
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="get-started" href="#deets">
              Comienza Gratis
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
