'use client'

import '@/styles/style.css'
import { useEffect, useState } from 'react';
import { FaArrowRight, FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { FaBalanceScale, FaBalanceScaleLeft, FaBalanceScaleRight, FaMoneyCheckAlt } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
import AOS from "aos";
import "aos/dist/aos.css"; //
import Calculator from './components/Calculator';
import Login from './components/Login';
import Plan from './components/Plan';


export default function Home() {

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [investmentType, setInvestmentType] = useState();

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    AOS.init();
  }, [])

  return (
    <>
      <Login setModal={setModal} modal={modal}/>
      <Plan setModal={setModal2} modal={modal2} type={investmentType}/>
      <div className="container-fluid header-cont pe-0">

        <div className='header-cont2'>

          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src="../../img/logo.svg" className='w-100' alt="logo" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" href="#" onClick={() => {
                      setModal(true)
                    }}>Login</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Idioma
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Ingles</a></li>
                      <li><a className="dropdown-item" href="#">Español</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <header className="main-header container" >
            <h2 className='mb-5' data-aos="fade-up">
              Tu capital generando
              <br />
              rendimientos
              <span> diarios</span>
            </h2>
            <div className='row'>
              <div className="col-12 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="100">
                <h4 className='adv-number'>14%</h4>
                <h4 className='adv-title my-3'>Rendimiento mensual en USD</h4>
                <p className='adv-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur neque repellendus animi molestiae molestias.</p>
              </div>
              <div className="col-12 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="200">
                <h4 className='adv-number'>14%</h4>
                <h4 className='adv-title my-3'>Rendimiento mensual en USD</h4>
                <p className='adv-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur neque repellendus animi molestiae molestias.</p>
              </div>
              <div className="col-12 col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay="300">
                <h4 className='adv-number'>0.46</h4>
                <h4 className='adv-title my-3'>Ganansias diarias</h4>
                <p className='adv-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur neque repellendus animi molestiae molestias.</p>
              </div>
            </div>
          </header>
        </div>
      </div>


      <div className="container-fluid px-0">
        <section className="services-section" style={{ backgroundColor: "#012068" }}>
          <div className="auto-container" style={{ padding: "130px 0" }}>

            <h2 className='text-center centered text-light'>
              Contamos con diferentes planes
              <br />
              que se adapten a tus
              <span> ingresos</span>
            </h2>

            <div className="clearfix">


              <div className="services-block col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
                <div className="inner-box inner-box-basic" >
                  <div className="icon-box">
                    <h3>MÁS SOLICITADO</h3>
                  </div>
                  <h5>BÁSICO</h5>
                  <p className='text-center'>Para inversiones de bajo riesgo</p>
                  <hr className='hr-plans' />
                  <div className="text mt-4">
                    <div><ImCheckmark className='icon-list' />400 a 4.999 USD</div>
                    <div><ImCheckmark className='icon-list' />Paga 14% fijo</div>
                    <div><ImCheckmark className='icon-list' />Inversión USDT</div>
                    <div><ImCheckmark className='icon-list' />Gana 0.46%</div>
                  </div>
                  <button className='btn-packets mt-3' onClick={() => {
                    setModal2(true)
                    setInvestmentType("Básico")
                  }}>
                    Adquirir
                    <FaArrowRight className='icon' />
                  </button>
                </div>
              </div>


              <div className="services-block col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100">
                <div className="inner-box" >
                  <h5>INVERSOR</h5>
                  <p className='text-center'>Para inversiones de riesgo medio</p>
                  <hr className='hr-plans' />
                  <div className="text mt-4">
                    <div><ImCheckmark className='icon-list' />5.000 a 9.999 USD</div>
                    <div><ImCheckmark className='icon-list' />Paga 10% fijo</div>
                    <div><ImCheckmark className='icon-list' />Inversión USDT</div>
                    <div><ImCheckmark className='icon-list' />Gana 0.33%</div>
                  </div>
                  <button className='btn-packets btn-packets-two' onClick={() => {
                    setModal2(true)
                    setInvestmentType("Inversor")
                  }}>
                    Adquirir
                    <FaArrowRight className='icon' />
                  </button>
                </div>
              </div>


              <div className="services-block col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="200">
                <div className="inner-box" >
                  <h5>ÉLITE</h5>
                  <p className='text-center'>Para inversiones de mayor riesgo</p>
                  <hr className='hr-plans' />
                  <div className="text mt-4">
                    <div><ImCheckmark className='icon-list' />+10.000 USD</div>
                    <div><ImCheckmark className='icon-list' />Paga 7% fijo</div>
                    <div><ImCheckmark className='icon-list' />Inversión USDT</div>
                    <div><ImCheckmark className='icon-list' />Gana 0.23%</div>
                  </div>
                  <button className='btn-packets btn-packets-two' onClick={() => {
                    setModal2(true)
                    setInvestmentType("Élite")
                  }}>
                    Adquirir
                    <FaArrowRight className='icon' />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>


      {/* CALCULATOR */}

      <section className="calc-section bg_4" >
        <div className="auto-container">
          <div className="row align-items-center">

            <div className="content-column col-lg-6 col-md-12 col-sm-12 ">
              <div className="inner-column">

                <div className="sec-title">
                  <h2>Calcula los beneficios <br /> escogiendo el tipo de <span>inversión</span></h2>
                </div>

                <div className="text">
                  <p>Calcula cuales serían las posibles ganancias de una inversión con nuestros paquetes. Aqui encontrarás un aproximado, pero todos estos valores pueden variar en el tiempo, para una asesoría más acertiva te recomendamos que te pongas en contacto con uno de nuestros asesores.</p>
                  <p>*Nota: los valores mínimos y máximos del porcentaje de ganancia dependen del tipo de inversión seleccionado y el valor ingresado.</p>
                </div>

              </div>
            </div>


            <div className="video-column col-lg-6 col-md-12 col-sm-12">
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
            <div className="text-light my-3">The argument in favor of using filler text goes something like this: If you use real content in the design process.</div>

            <div className="quote-form">
              <form method="post">
                <div className="row">

                  <div className="form-group col-lg-6 col-md-6 col-sm-12 my-2">
                    <input type="text" name="username" placeholder="Como podemos ayudarte*" required="" />
                  </div>

                  <div className="form-group col-lg-6 col-md-6 col-sm-12 my-2">
                    <input type="text" name="phone" placeholder="Número de celular:*" required="" />
                  </div>

                  <div className="form-group col-lg-6 col-md-6 col-sm-12 my-2">
                    <input type="text" name="text" placeholder="Tu nombre:*" required="" />
                  </div>

                  <div className="form-group col-lg-6 col-md-6 col-sm-12 my-2">
                    <button type="submit" className="btn-style-one">
                      Enviar
                      <FaArrowRight className='icon' />
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
              <div className="copyright">2023 © Todos los derechos reservados por <a href="#">Financial International</a></div>
            </div>

            <div className="social-column col-lg-6 col-md-6 col-sm-12">
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
            </div>

          </div>
        </div>
      </footer>

    </>

  )
}
