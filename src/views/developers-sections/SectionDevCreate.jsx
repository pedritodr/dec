import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import imagenRight from "../../assets/img/section-developer/Recurso-code.png"; // with import
import icon1 from "../../assets/img/section-developer/Recurso5.png"; // with import
import icon2 from "../../assets/img/section-developer/Recurso6.png"; // with import

export const SectionDevCreate = () => {
  return (
    <section id="dev-create">
      <Container fluid>
        <Row style={{ paddingTop: "8%" }}>
          <Col
            lg={6}
            className="pt-4 justify-content-center align-items-stretch"
          >
            <div
              className="text-center text-lg-center"
              style={{ marginLeft: "10%" }}
            >
              <h1 className="text-left">
                Creadas por desarrolladores, para desarrolladores que buscan lo
                mejor
              </h1>
              <p className="text-left">
                Nuestro esfuerzo se basa en diseñar constantemente la mejor
                experiencia de uso-integración, ajustada al dinamismo de tu
                negocio.
              </p>
            </div>

            <div className="text-left  pt-5 mb-4" style={{ marginLeft: "10%" }}>
              <a className="download-btn ">Leer Documentación</a>
            </div>
            <Row>
              <Col md={{ span: 5, offset: 1 }}>
                <div className="text-left">
                  <Image
                    src={icon2}
                    fluid
                    style={{
                      marginTop: 15,
                    }}
                  />
                  <h2>DevZone</h2>
                  <p className="text-left">
                    Consulta la documentación para desarrolladores disponible
                    24/7, sencilla y fácil de entender.
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="text-left">
                  <Image src={icon1} fluid />
                  <h2>Construye</h2>
                  <p className="text-left">
                    Adapta el flujo de Dec a la medida de tu aplicativo, cuando
                    necesites, y como necesites.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>

          <Col
            lg={6}
            className="order-1 order-lg-2 hero-img aos-init animate__animated animate__fadeInUp"
          >
            <div className="text-center" style={{ marginLeft: "33px" }}>
              <Image src={imagenRight} fluid />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
