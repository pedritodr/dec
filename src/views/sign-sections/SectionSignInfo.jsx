import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import recurso1 from "../../assets/img/section-sign/Recurso1.png"; // with import
import recurso2 from "../../assets/img/section-sign/Recurso2.png"; // with import
import recurso3 from "../../assets/img/section-sign/Recurso3.png"; // with import23

export const SectionSignInfo = () => {
  return (
    <section id="sign-info">
      <Container fluid>
        <Row>
          <Col className="mt-2" md={{ span: 10, offset: 1 }}>
            <Row>
              <Col
                className="d-lg-flex flex-lg-column justify-content-center align-items-stretch"
                lg={4}
              >
                <div className="pt-3 box">
                  <div className="text-center">
                    <Image src={recurso1} />
                    <p className="mt-2">
                      Varios tipos de firma disponibles de acuerdo a tus
                      nesecesidades.
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
                    <Image src={recurso2} />
                    <p className="mt-2">
                      Tu firma electrónica con validez legal al alcance de tu
                      mano.
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
                    <p className="mt-2">
                      Firma fácil y rápido desde cualquier dispositivo usando
                      DecSigner.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
