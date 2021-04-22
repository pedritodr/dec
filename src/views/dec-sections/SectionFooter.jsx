import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import recurso1 from "../../assets/img/section-carousel/Recurso-1.png"; // with import
import recurso2 from "../../assets/img/section-carousel/Recurso-2.png"; // with import
import recurso3 from "../../assets/img/section-carousel/Recurso-3.png"; // with import23
import backgraundFooter from "../../assets/img/section-carousel/Recurso-dec-footer.png"; // with import
export const SectionFooter = () => {
  return (
    <section id="dec">
      <Container fluid>
        <Row>
          <Col lg={12}>
            <h1 className="text-center">
              Dec, el portafolio digital definitivo
            </h1>
          </Col>
          <Col className="mt-2" md={{ span: 10, offset: 1 }}>
            <Row>
              <Col
                className="d-lg-flex flex-lg-column justify-content-center align-items-stretch"
                lg={4}
              >
                <div className="pt-3 box">
                  <div className="text-center">
                    <Image src={recurso1} />
                    <p>
                      Todos tus procesos de firma electrónica en un solo lugar.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
                lg={4}
              >
                <div className="pt-3 box">
                  <div className="text-center">
                    <Image src={recurso2} />
                    <p>
                      Procesos y firmas seguras con autentificación de seguridad
                      verificadas.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
                lg={4}
              >
                <div className="pt-3 box">
                  <div className="text-center">
                    <Image src={recurso3} />
                    <p>
                      ¡100% en la nube! Accede donde quieras y desde cualquier
                      lugar, usando el dispositivo con conexión a internet de tu
                      preferencia.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div
              className="text-center pt-5"
              style={{
                backgroundImage: "url(" + backgraundFooter + ")",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="title-footer">¿Listo para probar Dec?</h1>
            </div>
          </Col>
          <Col className="col-lg-12 pt-5  d-lg-flex flex-lg-column justify-content-center align-items-stretch">
            <div className="text-center text-lg-center  pt-5  ">
              <a className="btn-get-started">Comienza Gratis</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
