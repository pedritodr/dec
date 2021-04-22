import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Bounce, Slide } from "react-reveal";
import imageLeft from "../../assets/img/section-rapido/Recurso_left_1.png"; // with import
import arrowRight from "../../assets/img/section-rapido/Recurso-right.png"; // with import

export const SectionRapida = () => {
  return (
    <section id="section-4" className="d-flex align-items-center">
      <Container fluid>
        <Row className="pt-5">
          <Col className="align-items-center" lg={6}>
            <Bounce left>
              <div className="text-center">
                <Image src={imageLeft} fluid style={{ width: "42%" }} />
              </div>
            </Bounce>
          </Col>
          <Col className="align-items-center" lg={6}>
            <Bounce right>
              <h1>Rápido y en la nube</h1>
              <div style={{ paddingRight: "29%" }}>
                <p>
                  Dec almacena todos tus documentos en un storage personal en la
                  nube, accesible en cualquier momento desde tu dispositivo
                  favorito. ¡Simplemente tu portafolio digital.
                </p>
              </div>
            </Bounce>
          </Col>
          <Col lg={12}>
            <Bounce right>
              <div className="text-right" style={{ marginRight: "-1%" }}>
                <Image src={arrowRight} fluid style={{ width: "59%" }} />
              </div>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
