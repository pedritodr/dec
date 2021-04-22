import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import imagenLeft from "../../assets/img/section-developer/Recurso4.png"; // with import
import recurso1 from "../../assets/img/section-developer/Recurso1.png"; // with import
import recurso2 from "../../assets/img/section-developer/Recurso2.png"; // with import
import recurso3 from "../../assets/img/section-developer/Recurso3.png"; // with import23
export const SectionDevBoxs = () => {
  return (
    <section id="dev-box">
      <Container fluid className="dev">
        <Row>
          <Col className="mt-2 flotante" md={{ span: 10, offset: 1 }}>
            <Row>
              <Col
                className="d-lg-flex flex-lg-column justify-content-center align-items-stretch"
                lg={4}
              >
                <div className="pt-3 box">
                  <div className="text-center">
                    <h2>Fácil de integrar</h2>
                    <Image src={recurso1} />
                    <p className="mt-3">
                      APIs REST simples de usar, compatibles con cualquier
                      plataforma mobile o web.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
                lg={4}
              >
                <div className="pt-3 box-2">
                  <div className="text-center">
                    <h2>Firma embebida</h2>
                    <Image src={recurso2} />
                    <p className="mt-3">
                      Es posible firmar pocesos por medio de su aplicativo o
                      através de DecSigner.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
                lg={4}
              >
                <div className="pt-3 box-3">
                  <div className="text-center">
                    <h2>APIs Seguras</h2>
                    <Image src={recurso3} />
                    <p className="mt-3">
                      APIs con los estándares de seguridad más altos de la
                      industria.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="box-container">
            <Row>
              <Col
                lg={6}
                className="aos-init animate__animated animate__fadeInUp"
              >
                <div className="text-center" style={{ marginRigth: "33px" }}>
                  <Image src={imagenLeft} fluid />
                </div>
              </Col>
              <Col
                lg={6}
                className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
              >
                <div
                  className="text-center text-lg-center"
                  style={{ marginLeft: "10%" }}
                >
                  <h1 className="text-left">
                    APIs flexibles, seguras y potentes
                  </h1>
                  <p className="text-left text">
                    Integra facilmente la mejor experiencia de firmado, en tu
                    aplicación o flujo de negocio.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
