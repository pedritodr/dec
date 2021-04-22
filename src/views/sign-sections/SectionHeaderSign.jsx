import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import backgraund from "../../assets/img/section-sign/background-sign.png"; // with import
import imagenRight from "../../assets/img/section-sign/easy-sign.png"; // with import

export const SectionHeaderSign = () => {
  return (
    <section id="sign-header" className="d-flex align-items-center">
      <Container
        fluid
        style={{
          backgroundImage: "url(" + backgraund + ")",
          backgroundColor: "transparent",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <Row style={{ paddingTop: "3%" }}>
          <Col
            lg={6}
            className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
          >
            <div
              className="text-center text-lg-center"
              style={{ marginLeft: "10%" }}
            >
              <h1 className="text-left">
                Tu firma electrónica fácil, rápida y segura
              </h1>
              <p className="text-left">
                Crea tu firma electrónica EasySign, y úsala en todos los
                procesos que crees o firmes con Dec.
              </p>
            </div>
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
