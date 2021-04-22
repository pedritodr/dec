import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import item1 from "../../assets/img/section-carousel/item1.png"; // with import
import item2 from "../../assets/img/section-carousel/item2.png"; // with import
import item3 from "../../assets/img/section-carousel/item3.png"; // with import
import item4 from "../../assets/img/section-carousel/item4.png"; // with import
import imgPrev from "../../assets/img/section-carousel/prev.png"; // with import
import imgNext from "../../assets/img/section-carousel/next.png"; // with import
import backgraund from "../../assets/img/section-carousel/background-carousel.png"; // with import

export const SectionCarousel = () => {
  return (
    <section id="carousel">
      <Container fluid>
        <Row>
          <Col lg={12}>
            <h1 className="text-center">
              Conoce más sobre Dec, te lo mostramos:
            </h1>
          </Col>
        </Row>
        <Row
          style={{
            backgroundImage: "url(" + backgraund + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 671,
          }}
        >
          <Col
            lg={12}
            style={{
              paddingLeft: "15%",
              paddingRight: "15%",
            }}
          >
            <OwlCarousel
              items={1}
              className="owl-theme"
              loop
              nav
              dots
              margin={8}
              autoplay
              navText={[
                "<img src='" + imgPrev + "' />",
                "<img src='" + imgNext + "' />",
              ]}
            >
              <div>
                <Image src={item1} fluid />
              </div>
              <div>
                <Image src={item2} fluid />
              </div>
              <div>
                <Image src={item3} fluid />
              </div>
              <div>
                <Image src={item4} fluid />
              </div>
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
