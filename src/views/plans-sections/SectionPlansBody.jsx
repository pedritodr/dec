import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import recurso1 from "../../assets/img/section-plans/Recurso1.png"; // with import
import recurso2 from "../../assets/img/section-plans/Recurso2.png"; // with import
import recurso3 from "../../assets/img/section-plans/Recurso3.png"; // with import

export const SectionPlansBody = () => {
    return (
            <section id="plans-body" className="d-flex align-items-center">
      <Container fluid>
        <Row>
          <Col lg={12}>
           <div className="box">
           <div className="box-header">
           <h1 className="text-center">Cuenta
                  Developer</h1>
           </div>
           <div className="box-price align-items-center  pt-5">
                <h2 className="text-center pb-5 pt-0">GRATIS</h2>
                 <div className="text-center text-lg-center  pt-5">
                  <a className="download-btn">Comenzar</a>
                </div>
           </div>
           <div className="box-info" >
           <p>La cuenta Developer gratuita te permite probar tus APIs GRATIS, no expira, y tiene todas las features habilitadas de un plan platinum.
Para salir a producción con tu solución, necesitas una cuenta API para que
satisfaga tus necesidades.
También puedes iniciar
directamente con cualquiera de nuestros planes pagos, en los cuales tienes un trial de 15 días para realizar tu
integración.</p>
           </div>
           </div>
               <div className="box-simple">
           <div className="box-simple-header">
           <h1 className="text-center">API Business</h1>
           </div>
           <div className="box-simple-price align-items-center  pt-5">
                <h2 className="text-center">$45/mes</h2>
                <hr></hr>
                <p className="price text-center">$540</p>
                  <p className="price text-center">al año</p>
                 <div className="text-center text-lg-center  pt-4">
                  <a className="download-btn2">Comenzar</a>
                </div>
           </div>
           <div className="box-simple-info" >
           <p className="text-center text-info-box">1000 procesos por año</p>
           </div>
              <div className="box-simple-normal" >
           <p className="text-center text-info-box">Storage de 50 GB  </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">Seguridad  ISO 27.001  </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">Widget personalizado de
aceptación simple </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">Dashboard de control </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">DecSigner </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">PIN de seguridad en
visualización </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">API de consulta de procesos  </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">Compatibilidad con
firma acreditada  </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">API de firma simple:
 Creación y firmado </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">Retroalimentación de
 procesos  en tiempo real  </p>
           </div>
               <div className="box-simple-final" >
           <p className="text-center text-info-box">Documentación API
 disponible 24/7  </p>
           </div>
           </div>
            <div className="box-simple">
           <div className="box-simple-header">
           <h1 className="text-center">API Enterprise</h1>
             <div
                  className="text-center"
                  style={{
                    backgroundImage: "url(" + recurso3 + ")",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    marginTop: "17%",
                  }}
                >
                  <p className="text-recomendado">Recomendado</p>
                </div>
           </div>

           <div className="box-simple-price align-items-center  pt-5">
                <h2 className="text-center">$195/mes</h2>
                <hr></hr>
                <p className="price text-center">$2340
</p>
                  <p className="price text-center">al año</p>
                 <div className="text-center text-lg-center  pt-4">
                  <a className="download-btn2">Comenzar</a>
                </div>
           </div>
           <div className="box-simple-info" >
           <p className="text-center text-info-box">3000 procesos por año</p>
           </div>
              <div className="box-simple-normal" >
           <p className="text-center text-info-box">Storage de 100 GB  </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">Seguridad  ISO 27.001  </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">Widget personalizado de
aceptación simple </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">Dashboard de control </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">DecSigner </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">PIN de seguridad en
visualización </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">API de consulta de procesos  </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">Compatibilidad con
firma acreditada  </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">API de firma simple:
 Creación y firmado </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">Retroalimentación de
 procesos  en tiempo real  </p>
           </div>
               <div className="box-simple-final" >
           <p className="text-center text-info-box">Documentación API
 disponible 24/7  </p>
           </div>
           </div>


<div className="box-simple">
           <div className="box-simple-header">
           <h1 className="text-center">API Platinum</h1>
           </div>
           <div className="box-simple-price align-items-center  pt-5">
                <h2 className="text-center">$295/mes</h2>
                <hr></hr>
                <p className="price text-center">$3540
</p>
                  <p className="price text-center">al año</p>
                 <div className="text-center text-lg-center  pt-4">
                  <a className="download-btn2">Comenzar</a>
                </div>
           </div>
           <div className="box-simple-info" >
           <p className="text-center text-info-box">5000 procesos por año</p>
           </div>
              <div className="box-simple-normal" >
           <p className="text-center text-info-box">Storage de 200 GB  </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">Seguridad  ISO 27.001  </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">Widget personalizado de
aceptación simple </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">Dashboard de control </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">DecSigner </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">PIN de seguridad en
visualización </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">API de consulta de procesos  </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">Compatibilidad con
firma acreditada  </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">API de firma simple:
 Creación y firmado </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">Retroalimentación de
 procesos  en tiempo real  </p>
           </div>
               <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">Documentación API
 disponible 24/7  </p>
           </div>
             <div className="box-simple-normal-2" >
           <p className="text-center text-info-box">Creación de firmas para
 persona jurídica  </p>
           </div>
              <div className="box-simple-final" >
           <p className="text-center text-info-box">Customer Care
representative  </p>
           </div>
           </div>

           <div className="box-simple">
           <div className="box-simple-header">
           <h1 className="text-center">Personalizado</h1>
           </div>
           <div className="box-simple-price align-items-center  pt-3">
                <h3 className="text-center">¿Buscas un Plan
personalizado?</h3>
                <p className="price text-center">¿Tienes más inquietudes?
¡Llámanos!
</p>
                  <p className="price text-center">(02) 394-7210</p>
                 <div className="text-center text-lg-center  pt-5">
                  <a className="download-btn">Contáctanos</a>
                </div>
           </div>
           <div className="box-simple-info" >
           <p className="text-center">Nuestros ejecutivos de venta están disponibles para
proporcionarte información adicional sobre nuestros planes existentes, y
recomendarte el que se adapte mejor a tus flujos
de negocio.</p>
           </div>

              <div className="box-simple-final-2" >
           <p className="text-center text-info-box">Arma el plan a tu medida:

Dec puede ser personalizado a la cantidad de Storage y
 procesos que necesites llevar anualmente.  </p>
           </div>
           </div>


          </Col>
        </Row>

      </Container>
    </section>
    )
}
