"use client";

import "@/styles/style.css";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaSquareFacebook,
  FaSquareInstagram,
  FaMoneyBillTransfer,
} from "react-icons/fa6";
import { ImCheckmark } from "react-icons/im";
import AOS from "aos";
import "aos/dist/aos.css"; //
import Calculator from "./components/Calculator2";
import Login from "./components/Login";
import Plan from "./components/Plan";
import Nav from "./components/Nav";

export default function Home() {
  const [modal2, setModal2] = useState(false);
  const [investmentType, setInvestmentType] = useState();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    AOS.init();
  }, []);

  return (
    <>
      
      <Plan setModal={setModal2} modal={modal2} type={investmentType} />
      <Nav />


      <div className="container-fluid header-cont pe-0">
        <header className="main-header container">
          <div className="row align-items-center">
            <div className="col-12 col-md-7">
              <h2 data-aos="fade-up">
                Tu capital generando
                <br />
                rendimientos
                <span> diarios</span>
              </h2>
              <div className="row" style={{marginTop: "100px"}}>
                <div
                  className="col-12 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h4 className="adv-number">10%</h4>
                  <h4 className="adv-title my-3">Rendimiento mensual en USD</h4>
                  <p className="adv-description">
                    Con BONORUM GROUP obtienes una tasa fija de hasta <b>10%</b>{" "}
                    mensual
                  </p>
                </div>
                <div
                  className="col-12 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h4 className="adv-number">
                    <FaMoneyBillTransfer className="icon" />{" "}
                  </h4>
                  <h4 className="adv-title my-3">Retiros disponibles</h4>
                  <p className="adv-description">
                    Según la inversión puedes realizar retiros quincenales o
                    mensuales
                  </p>
                </div>
                <div
                  className="col-12 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h4 className="adv-number">3%</h4>
                  <h4 className="adv-title my-3">Ganansias diarias</h4>
                  <p className="adv-description">
                    Según la inversión gana hasta un 0.33% diario
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <img className="w-100" src="../../img/header_cel.png" alt="" />
            </div>
          </div>

        </header>
      </div>

      {/* PLANS */}

      <div className="container-fluid px-0">
        <section
          className="services-section"
          style={{ backgroundColor: "#012068" }}
        >
          <div className="auto-container" style={{ padding: "130px 0" }}>
            <h2 className="text-center centered text-light">
              Contamos con diferentes planes
              <br />
              que se adapten a tus
              <span> ingresos</span>
            </h2>

            <div className="clearfix">
              <div
                className="services-block col-lg-4 col-md-6 col-sm-12"
                data-aos="fade-up"
              >
                <div className="inner-box inner-box-basic">
                  <div className="most-popular">
                    <img src="../../img/most-popular.png" alt="" />
                  </div>
                  {/*  <div className="icon-box">
                    <h3>MÁS SOLICITADO</h3>
                  </div> */}
                  <h5>BÁSICO</h5>
                  <p className="text-center">Para inversiones de bajo riesgo</p>
                  <hr className="hr-plans" />
                  <div className="text mt-4">
                    <div>
                      <ImCheckmark className="icon-list" />
                      400 a 4.999 USD
                    </div>
                    <div>
                      <ImCheckmark className="icon-list" />
                      Inversión USDT
                    </div>
                    <div>
                      <ImCheckmark className="icon-list" />
                      Gana el 10% fijo mensual
                    </div>
                    <div>
                      <ImCheckmark className="icon-list" />
                      Gana el 0.33% diario
                    </div>
                  </div>
                  <button
                    className="btn-packets mt-3"
                    onClick={() => {
                      setModal2(true);
                      setInvestmentType("Básico");
                    }}
                  >
                    Adquirir
                    <FaArrowRight className="icon" />
                  </button>
                </div>
              </div>

              <div
                className="services-block col-lg-4 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="inner-box">
                  <h5>INVERSOR</h5>
                  <p className="text-center">
                    Para inversiones de riesgo medio
                  </p>
                  <hr className="hr-plans" />
                  <div className="text mt-4">
                    <div>
                      <ImCheckmark className="icon-list" />
                      5.000 a 9.999 USD
                    </div>
                    <div>
                      <ImCheckmark className="icon-list" />
                      Inversión USDT
                    </div>
                    <div>
                      <ImCheckmark className="icon-list" />
                      Gana el 7% fijo mensual
                    </div>
                    <div>
                      <ImCheckmark className="icon-list" />
                      Gana el 0.23% diario
                    </div>
                  </div>
                  <button
                    className="btn-packets btn-packets-two"
                    onClick={() => {
                      setModal2(true);
                      setInvestmentType("Inversor");
                    }}
                  >
                    Adquirir
                    <FaArrowRight className="icon" />
                  </button>
                </div>
              </div>

              <div
                className="services-block col-lg-4 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="inner-box">
                  <h5>ÉLITE</h5>
                  <p className="text-center">
                    Para inversiones de mayor riesgo
                  </p>
                  <hr className="hr-plans" />
                  <div className="text mt-4">
                    <div>
                      <ImCheckmark className="icon-list" />
                      +10.000 USD
                    </div>
                    <div>
                      <ImCheckmark className="icon-list" />
                      Inversión USDT
                    </div>
                    <div>
                      <ImCheckmark className="icon-list" />
                      Gana el 5% fijo mensual
                    </div>

                    <div>
                      <ImCheckmark className="icon-list" />
                      Gana el 0.16% diario
                    </div>
                  </div>
                  <button
                    className="btn-packets btn-packets-two"
                    onClick={() => {
                      setModal2(true);
                      setInvestmentType("Élite");
                    }}
                  >
                    Adquirir
                    <FaArrowRight className="icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CALCULATOR */}

      <section className="calc-section bg_4">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="content-column col-12 col-lg-6">
              <div className="inner-column pe-4">
                <div className="sec-title">
                  <h2>
                    Calcula los beneficios <br /> de tu{" "}
                    <span>inversión</span>
                  </h2>
                </div>

                <div className="text">
                  <p>
                    Calcula cuales serían las posibles ganancias de una
                    inversión con nuestros paquetes. Aqui encontrarás un
                    aproximado, pero todos estos valores pueden variar en el
                    tiempo, para una asesoría más acertiva te recomendamos que
                    te pongas en contacto con uno de nuestros asesores.
                  </p>
                </div>
              </div>
            </div>

            <div className="video-column col-12 col-lg-6">
              <div className="inner-column" data-aos="fade-up">
                <Calculator />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact container-fluid">
        <div className="container">
          <div className="content">
            <h2>Contacto</h2>
            <div className="text-light my-3">
              The argument in favor of using filler text goes something like
              this: If you use real content in the design process.
            </div>

            <div className="quote-form">
              <form method="post">
                <div className="row">
                  <div className="form-group col-lg-6 col-md-6 col-sm-12 my-2">
                    <input
                      type="text"
                      name="username"
                      placeholder="Como podemos ayudarte*"
                      required=""
                    />
                  </div>

                  <div className="form-group col-lg-6 col-md-6 col-sm-12 my-2">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Número de celular:*"
                      required=""
                    />
                  </div>

                  <div className="form-group col-lg-6 col-md-6 col-sm-12 my-2">
                    <input
                      type="text"
                      name="text"
                      placeholder="Tu nombre:*"
                      required=""
                    />
                  </div>

                  <div className="form-group col-lg-6 col-md-6 col-sm-12 my-2">
                    <button type="submit" className="btn-style-one">
                      Enviar
                      <FaArrowRight className="icon" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer-bottom container-fluid">
        <div className="auto-container container">
          <div className="row text-light">
            <div className="copyright-column col-lg-6 col-md-6 col-sm-12">
              <div className="copyright">
                2023 © Todos los derechos reservados por{" "}
                <a href="#">Financial International</a>
              </div>
            </div>

            {/* <div className="social-column col-lg-6 col-md-6 col-sm-12">
              <ul>
                <li className="follow">Siguenos: </li>
                <li>
                  <a href="#">
                    <FaSquareFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaSquareInstagram />
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
}
