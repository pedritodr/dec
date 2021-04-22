import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Bounce, Slide } from "react-reveal";
import "animate.css/animate.css";

import arrow from "../../assets/img/arrow-seption-2.png"; // with import
import mainImage from "../../assets/img/img-left-seption-2.png"; // with import
import arrowLeft from "../../assets/img/arrow-left-seption-2.png"; // with import

export const SectionsDigital = () => {
  return (
    <section id="section-2">
      <Container fluid>
        <Row>
          <Col lg={12}>
            <Slide left>
              <Image src={arrow} fluid style={{ width: "40%" }} />
            </Slide>
          </Col>
        </Row>
        <Row>
          <Col className="align-items-center" lg={6}>
            <Bounce left>
              <div className="text-center" style={{ marginLeft: "33px" }}>
                <Image src={mainImage} fluid style={{ width: "100%" }} />
              </div>
            </Bounce>
          </Col>
          <Col className="align-items-center" lg={6}>
            <Bounce right>
              <h1>Digitaliza tus documentos, y envíalos para ser firmados</h1>
              <div style={{ paddingLeft: "16%", paddingRight: "15%" }}>
                <h2>Incrementa la eficiencia, ahorrando tiempo</h2>
                <p>
                  Con Dec es facíl ahorrar tiempo, crea un proceso de firma
                  electrónica en tan solo 4 sencillos pasos.
                </p>
                <h2>Firma documentos donde quieras, cuando quieras</h2>
                <p>
                  En tu casa, oficina, en el parque, o ¡en la playa!, firma
                  documentos digitales con tan solo un clic usando DecSigner.
                </p>
              </div>
            </Bounce>
          </Col>
          <Col lg={12}>
            <Bounce right>
              <div
                className="text-right"
                style={{ marginTop: "-70px", marginRight: "-1%" }}
              >
                <Image src={arrowLeft} fluid style={{ width: "73%" }} />
              </div>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
