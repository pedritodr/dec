import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import backgraund from "../../assets/img/section-sign/background-sign.png"; // with import
import Flip from 'react-reveal/Flip';

export const SectionPlansHeader = () => {
  return (
    <Flip top>
    <section id="plans-header" className="d-flex align-items-center">
      <Container>
        <Row>
          <Col lg={12} className="mb-5 mt-5">
            <h1 className="text-center">Planes y precios Dec</h1>
          </Col>
        </Row>
          <Row>
          <Col lg={{ span: 6, offset: 3 }} className="mt-5">
            <div className="button-1">Personal</div><div className="button-2">Enterprice</div><div className="button-3">Developers</div>
          </Col>
                 <Col lg={{ span: 4, offset: 4 }} className="mt-5">
            <div className="button-4">Mensual</div><div className="button-5">Anual</div>
          </Col>
            </Row>
      </Container>
    </section>
    </Flip>
  );
};
