import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Bounce, Slide } from "react-reveal";
import "animate.css/animate.css";

import arrow from "../../assets/img/arrow-seption-2.png"; // with import
import mainImage from "../../assets/img/img-left-seption-2.png"; // with import
import arrowLeft from "../../assets/img/arrow-left-seption-2.png"; // with import

export const SectionsDigital = () => {
  return (
    <>
      <Row>
        <Col>
          <Slide left>
            <Image src={arrow} fluid />
          </Slide>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Bounce left>
            <Image src={mainImage} fluid style={{ marginLeft: "33px" }} />
          </Bounce>
        </Col>
        <Col md={6}>
          <Bounce right>
            <h1>Digitaliza tus documentos, y envíalos para ser firmados</h1>
            <p>Incrementa la eficiencia, ahorrando tiempo</p>
            <p>
              Con Dec es facíl ahorrar tiempo, crea un proceso de firma
              electrónica en tan solo 4 sencillos pasos.
            </p>
            <br></br>
            <p>Firma documentos donde quieras, cuando quieras</p>
            <p>
              En tu casa, oficina, en el parque, o ¡en la playa!, firma
              documentos digitales con tan solo un clic usando DecSigner.
            </p>
          </Bounce>
        </Col>
        <Col className="text-right" md={12} style={{ marginTop: "-70px" }}>
          <Bounce right>
            <Image src={arrowLeft} fluid />
          </Bounce>
        </Col>
      </Row>
    </>
  );
};
