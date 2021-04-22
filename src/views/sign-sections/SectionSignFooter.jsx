import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import imagenLeft from "../../assets/img/section-sign/sing-footer-left.png"; // with import
import signFooter from "../../assets/img/section-sign/easy-sing-footer.png"; // with import
import backgraundFooter from "../../assets/img/section-sign/background-sign-footer.png"; // with import

export const SectionSignFooter = () => {
  return (
    <section id="sign-footer" className="d-flex align-items-center">
      <Container fluid>
        <Row>
          <Col
            lg={6}
            className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
          >
            <div className="text-center">
              <Image src={imagenLeft} fluid />
            </div>
          </Col>

          <Col
            lg={6}
            className="order-1 order-lg-2 hero-img aos-init animate__animated animate__fadeInUp"
          >
            <Row>
              <Col lg={12}>
                <div className="text-center">
                  <Image src={signFooter} fluid />
                </div>
              </Col>
              <Col lg={12}>
                <div
                  className="text-center pt-3"
                  style={{
                    backgroundImage: "url(" + backgraundFooter + ")",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    marginTop: "10%",
                  }}
                >
                  <h1>El complemento perfecto de Dec</h1>
                </div>
              </Col>
              <Col
                lg={12}
                className="d-lg-flex flex-lg-column justify-content-center align-items-stretch"
              >
                <div className="text-center text-lg-center  pt-5  ">
                  <a className="btn-get-started">Prueba Dec</a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
