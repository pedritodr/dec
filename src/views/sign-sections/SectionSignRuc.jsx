import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import backgraund from "../../assets/img/section-sign/backgraund-bottom.png"; // with import
import table from "../../assets/img/section-sign/right-table.png"; // with import
import ruc from "../../assets/img/section-sign/left-ruc.png"; // with import
import arrow from "../../assets/img/section-sign/arrow-right-sign.png"; // with import

export const SectionSignRuc = () => {
  return (
    <section id="sign-ruc" className="d-flex align-items-center">
      <Container
        fluid
        style={{
          backgroundImage: "url(" + backgraund + ")",
          backgroundColor: "transparent",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          width: "100%",
          height: 823,
        }}
      >
        <Row>
          <Col className="mt-2" md={{ span: 10, offset: 2 }}>
            <Row style={{ paddingTop: "3%" }}>
              <Col
                lg={5}
                className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
              >
                <div
                  className="text-center text-lg-center"
                  style={{ marginLeft: "10%" }}
                >
                  <h2 className="text-left">Firma Segura</h2>
                  <p className="text-left">
                    Las firmas de EasySign son validadas con tu identidad, lo
                    cual las hace seguras e intransferibles.
                  </p>
                </div>
              </Col>
              <Col
                lg={7}
                className="order-1 order-lg-2 hero-img aos-init animate__animated animate__fadeInUp"
              >
                <div className="text-center">
                  <Image src={table} fluid />
                </div>
              </Col>
            </Row>
            <Row style={{ paddingTop: "3%" }}>
              <Col
                lg={4}
                className="hero-img aos-init animate__animated animate__fadeInUp"
              >
                <div className="text-left" style={{ marginLeft: "33px" }}>
                  <Image src={ruc} fluid />
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
                  <h2 className="text-left">EasySign es: Firma Electrónicaa</h2>
                  <p className="text-left">
                    Persona Natural, Jurídica, o Natural con RUC, son opciones
                    que EasySign tiene para ti.
                  </p>
                  <p className="text-left">
                    **Firma acreditadas emitidas por entidades certificadoras
                    también pueden ser utilizadas con el servicio de Easy Sign.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Col lg={12} className="aos-init animate__animated animate__fadeInUp">
          <div
            className="text-right"
            style={{ paddingTop: "8%", marginRight: "-2%" }}
          >
            <Image src={arrow} fluid />
          </div>
        </Col>
        <Row />
      </Container>
    </section>
  );
};
