import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import imagenRight from "../../assets/img/section-developer/Recurso7.png"; // with import
import imagenLeft from "../../assets/img/section-developer/Recurso8.png"; // with import
import backgraundFooter from "../../assets/img/section-developer/Recurso9.png"; // with import

export const SectionDevFooter = () => {
  return (
    <section id="dev-footer">
      <Container fluid>
        <Row>
          <Col lg={6} className="aos-init animate__animated animate__fadeInUp">
            <div
              className="text-center"
              style={{ marginLeft: "33px", position: "relative", bottom: -172 }}
            >
              <Image src={imagenLeft} fluid />
            </div>
          </Col>

          <Col lg={6} className="aos-init animate__animated animate__fadeInUp">
            <div className="text-center" style={{ marginLeft: "33px" }}>
              <Image src={imagenRight} fluid />
              <p className="mt-5">
                Potencia al máximo tus aplicaciones o procesos de negocio.
              </p>
              <div
                className="text-center pt-3"
                style={{
                  backgroundImage: "url(" + backgraundFooter + ")",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h1>¿Estás listo?</h1>
              </div>
              <div className="text-center text-lg-center  pt-5  ">
                <a className="btn-get-started">Comienza Gratis</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
