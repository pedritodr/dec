import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import leftHomeImg from "../../assets/img/img-left-home.png"; // with import
import "animate.css/animate.css";
export const SectionsHeader = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <Container fluid>
        <Row>
          <Col className="col-lg-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center animate__animated animate__fadeInUp">
            <Row>
              <Col className="pt-5">
                <h1 className="text-center">
                  Firma documentos eletrónicos en tu portafolio digital
                </h1>
              </Col>
              <Col className="col-lg-12 pt-5  d-lg-flex flex-lg-column justify-content-center align-items-stretch">
                <div className="text-center text-lg-center  pt-5  ">
                  <a className="btn-get-started">Comienza Gratis</a>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="col-lg-7 order-1 order-lg-2 hero-img aos-init animate__animated animate__fadeInUp">
            <img src={leftHomeImg} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
