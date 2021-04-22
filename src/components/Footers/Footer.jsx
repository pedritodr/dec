import React from "react";
import { Container, Row, Col, Image, Navbar, Nav } from "react-bootstrap";
import {} from "../../styles/footer.css";
import logoFooter from "../../assets/img/logo-dec-footer.png"; // with import
export const Footer = () => {
  return (
    <footer>
      <Row>
        <Col className="mt-2" md={{ span: 6, offset: 3 }}>
          <Row>
            <Col className="text-center" lg={3}>
              <a>Soporte</a>
            </Col>
            <Col className="text-center" lg={3}>
              <a>Privacidad</a>
            </Col>
            <Col className="text-center" lg={3}>
              <a>Desarrolladores</a>
            </Col>
            <Col className="text-center" lg={3}>
              <a>Legal</a>
            </Col>
          </Row>
        </Col>
        <Col className="mt-2" md={{ span: 4, offset: 4 }}>
          <div className="text-center">
            <Image src={logoFooter} fluid />
          </div>
        </Col>
        <Col className="text-center mt-2" md={{ span: 4, offset: 4 }}>
          <p>Copyright 2021. Todos lo desrechos reservados .</p>
        </Col>
      </Row>
    </footer>
  );
};
