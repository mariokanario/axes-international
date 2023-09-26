'use client'

import '@/styles/style.css'
import { useEffect } from 'react';
import { FaArrowRight, FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";

export default function Home() {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, [])

  return (
    <>
      <div className="container-fluid header-cont">

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
                    <a className="nav-link active" aria-current="page" href="#">Planes</a>
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

          <header className="main-header container">
            <h2>
              Tu capital generando
              <br />
              rendimientos
              <span> diarios</span>
            </h2>
            <div className='row'>
              <div className="col-12 col-md-4 col-lg-2">
                <h4 className='adv-number'>14%</h4>
                <h4 className='adv-title my-3'>Rendimiento mensual en USD</h4>
                <p className='adv-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur neque repellendus animi molestiae molestias.</p>
              </div>
              <div className="col-12 col-md-4 col-lg-2">
                <h4 className='adv-number'>14%</h4>
                <h4 className='adv-title my-3'>Rendimiento mensual en USD</h4>
                <p className='adv-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur neque repellendus animi molestiae molestias.</p>
              </div>
              <div className="col-12 col-md-4 col-lg-2">
                <h4 className='adv-number'>0.46</h4>
                <h4 className='adv-title my-3'>Ganansias diarias</h4>
                <p className='adv-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur neque repellendus animi molestiae molestias.</p>
              </div>
            </div>
          </header>
        </div>
      </div>

      <div className="container-fluid plans">
        <section className='container py-5 text-light'>
          <div className="nk-block nk-block-problems tc-light">
            <div className="row g-0 align-items-center">
              <div className="col-lg-6">
                <div className="feature boxed boxed-lg bg-theme-alt no-mg split-lg-left split-left animated fadeInUp" >
                  <h4 className="title title-md">Tipos de planes</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At inventore sunt pariatur ea eligendi harum tempore quo molestiae debitis.</p>
                  <ul className="list list-dot">
                    <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li><li>Wende omnis iste natus error sit volupt.</li>
                    <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li><li>Exercitation ullamco laboris nisi ut consequ.</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-group bg-theme-alt split-right split-lg" >
                  <div className="feature boxed bg-white-7">
                    <div className="feature-text">
                      <h4 className="title title-md">BÁSICO</h4>
                      <ul className="list list-dot">
                        <li>400 a 4.999 USD</li>
                        <li>Paga 14% fijo</li>
                        <li>Inversión USDT</li>
                        <li>Gana 0.46%</li>
                      </ul>
                      <button className='btn-style-two'>
                        Comprar
                        <FaArrowRight className='icon' />
                      </button>
                    </div>
                  </div>
                  <div className="feature boxed bg-white-14">
                    <div className="feature-text">
                      <h4 className="title title-md">INVERSOR</h4>
                      <ul className="list list-dot">
                        <li>5.000 a 9.999 USD</li>
                        <li>Paga 10% fijo</li>
                        <li>Inversión USDT</li>
                        <li>Gana 0.33%</li>
                      </ul>
                      <button className='btn-style-two'>
                        Comprar
                        <FaArrowRight className='icon' />
                      </button>
                    </div>
                  </div>
                  <div className="feature boxed bg-white-22">
                    <div className="feature-text">
                      <h4 className="title title-md">ELITE</h4>
                      <ul className="list list-dot">
                        <li>+10.000 USD</li>
                        <li>Paga 7% fijo</li>
                        <li>Inversión USDT</li>
                        <li>Gana 0.23%</li>
                      </ul>
                      <button className='btn-style-two'>
                        Comprar
                        <FaArrowRight className='icon' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>

      <section>Popular investment</section>



      <section className="contact container-fluid">
        <div className="container">
          <div className="content">
            <h2>Contacto</h2>
            <div className="text">The argument in favor of using filler text goes something like this: If you use real content in the design process.</div>

            <div className="quote-form">
              <form method="post">
                <div className="row clearfix">

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

      <footer class="footer-bottom container-fluid">
        <div class="auto-container container">
          <div class="row clearfix text-light">

            <div class="copyright-column col-lg-6 col-md-6 col-sm-12">
              <div class="copyright">2023 © Todos los derechos reservados por <a href="#">Financial International</a></div>
            </div>

            <div class="social-column col-lg-6 col-md-6 col-sm-12">
              <ul>
                <li class="follow">Siguenos: </li>
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
