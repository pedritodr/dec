import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Bounce, Slide } from "react-reveal";
import backgraund from "../../assets/img/section-firma-rapida/Recurso-fondo.png"; // with import

import imageRigth from "../../assets/img/section-firma-rapida/Recurso_left.png"; // with import
import arrowLeft from "../../assets/img/section-firma-rapida/Recurso_right.png"; // with import
export const SectionFirmaRapida = () => {
  return (
    <section id="section-3" className="d-flex align-items-center">
      <Container
        fluid
        style={{
          backgroundImage: "url(" + backgraund + ")",
          backgroundColor: "transparent",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          width: "100%",
          height: 600,
        }}
      >
        <Row style={{ paddingTop: "15%" }}>
          <Col
            lg={6}
            className="pt-3 d-lg-flex flex-lg-column justify-content-center align-items-stretch"
          >
            <div className="text-center text-lg-center">
              <h1>Firma rápida y segura con validez legal</h1>
              <p>
                Dec admite varios tipos de firma, de acuerdo a las necesidades
                de tu proceso digital. Utiliza desde una aceptación simple,
                hasta una firma acreditada.
              </p>
            </div>
          </Col>

          <Col
            lg={6}
            className="order-1 order-lg-2 hero-img aos-init animate__animated animate__fadeInUp"
          >
            <div className="text-center" style={{ marginLeft: "33px" }}>
              <Image src={imageRigth} fluid />
            </div>
          </Col>
          <Col
            lg={12}
            className="order-1 order-lg-2 hero-img aos-init animate__animated animate__fadeInUp"
          >
            <div
              className="text-left"
              style={{ paddingTop: "3%", marginLeft: "-1%" }}
            >
              <Image src={arrowLeft} fluid />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
