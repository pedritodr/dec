import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import backgraund from "../../assets/img/section-portafolio/bacgraound-2.png"; // with import
import backgraundFooter from "../../assets/img/section-portafolio/Recurso-footer.png"; // with import
import imageCenter from "../../assets/img/section-portafolio/Recurso-center.png"; // with import

export const SectionPortafolio = () => {
  return (
    <section id="section-5" className="d-flex align-items-center">
      <Container
        fluid
        style={{
          backgroundImage: "url(" + backgraund + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          width: "100%",
          height: 1224,
        }}
      >
        <Row style={{ paddingTop: "10%" }}>
          <Col
            lg={12}
            className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
          >
            <div>
              <h1 className="text-center">
                Empieza con tu potafolio digital ahora
              </h1>
              <div style={{ paddingLeft: "23%", paddingRight: "23%" }}>
                <p ClassName="text-left">
                  Para tu empresa, uso personal, o incluso para desarrolladores,
                  encuentra la versión Dec ideal para ti.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <div className="text-center">
              <Image src={imageCenter} fluid style={{ width: "60%" }} />
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
              <h1>¿Listo para probarlo?</h1>
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
