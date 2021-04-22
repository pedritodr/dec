import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImgRigth from "../../assets/img/section-dec/Recurso-right.png"; // with import
import "animate.css/animate.css";
export const SectionsHeader = () => {
  return (
    <section id="section-1" className="d-flex align-items-center">
      <Container fluid>
        <Row>
          <Col className="col-lg-8 pt-5 mt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center animate__animated animate__fadeInUp">
            <Row className="pt-4">
              <Col className="pb-5 pt-5">
                <h1 className="text-left">Tu portafolio digital de firma</h1>{" "}
                <h1 className="text-left"> electrónica en la nube</h1>
                <Row className="pt-5">
                  <Col lg={6}>
                    <h2>Usa Dec para almacenar</h2>
                    <p>
                      Todos los procesos que creas en Dec, se guardan en tu
                      storage personal con su ID único en la nube, permitiéndote
                      acceder a ellos, fácil y rápidamente.
                    </p>
                  </Col>
                  <Col lg={6}>
                    <h2>Usa Dec para firmar</h2>
                    <p>
                      Firma un documento, o solicita que lo firmen. Cualquier
                      persona puede firmar, incluso sin tener una firma
                      electrónica creada con anterioridad.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col
            lg={4}
            className=" pt-5 order-1 order-lg-2 hero-img aos-init animate__animated animate__fadeInUp"
          >
            <div className="text-center pt-5">
              <img src={ImgRigth} className="img-fluid" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
