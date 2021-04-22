import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import backgraund from "../../assets/img/section-developer/background-developers-header.png"; // with import
import imagenLeft from "../../assets/img/section-developer/dec-developers-header.png"; // with import

export const SectionDevHeader = () => {
  return (
    <section id="dev-header" className="d-flex align-items-center">
      <Container
        fluid
        style={{
          backgroundImage: "url(" + backgraund + ")",
          backgroundColor: "transparent",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: 737,
        }}
      >
        <Row style={{ paddingTop: "12%" }}>
          <Col lg={6} className="aos-init animate__animated animate__fadeInUp">
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
              <h1 className="text-left">APIs flexibles, seguras y potentes</h1>
              <p className="text-left">
                Integra facilmente la mejor experiencia de firmado, en tu
                aplicación o flujo de negocio.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
