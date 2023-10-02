'use client'

import '../globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/style.css'
import React, { useEffect, useState } from 'react'
import Login from '../components/Login'
import { FaArrowRight, FaSquareFacebook, FaSquareInstagram } from 'react-icons/fa6';

const page = () => {

    const [modal, setModal] = useState(false);

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, [])

    return (
        <>
            <Login setModal={setModal} modal={modal} />
            <div className="container-fluid px-0">

                <div className='header-cont3'>

                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container">
                            <a className="navbar-brand" href="#">
                                <img src="../../img/logo.svg" className='d-block d-xl-none w-100' alt="logo" />
                                <img src="../../img/logo_white.svg" className='d-none d-xl-block w-100' alt="logo" />
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

                    
                </div>
            </div>
            
            

            <section class="about-section-four">
                <div class="auto-container">

                    
                    <div class="sec-title centered">
                        <div class="title">about us</div>
                        <h2 className='text-center centered'>We are here to manage your <br /> finance with <span>experience</span></h2>
                    </div>

                    <div class="row clearfix">

                        
                        <div class="image-column col-lg-5 col-md-12 col-sm-12">
                            <div class="inner-column position-relative">
                                <div class="image-1"><img src="../../img/company/about-2.jpg" alt="" /></div>
                                <div class="image-2"><img src="../../img/company/about-3.jpg" alt="" /></div>
                            </div>
                        </div>

                        
                        <div class="skills-column col-lg-7 col-md-12 col-sm-12">
                            <div class="inner-column">

                                
                                <div class="skills style-two">

                                   
                                    <div class="skill-item">
                                        <div class="skill-header clearfix">
                                            <div class="skill-title">Finance</div>
                                            <div class="skill-percentage"><div class="count-box counted"><span class="count-text" data-speed="2000" data-stop="95">95</span>%</div></div>
                                        </div>
                                        <div class="skill-bar">
                                            <div class="bar-inner"><div class="bar progress-line" data-width="95" style={{ width: "95%;" }}></div></div>
                                        </div>
                                    </div>

                                    
                                    <div class="skill-item">
                                        <div class="skill-header clearfix">
                                            <div class="skill-title">Business</div>
                                            <div class="skill-percentage"><div class="count-box counted"><span class="count-text" data-speed="2000" data-stop="90">90</span>%</div></div>
                                        </div>
                                        <div class="skill-bar">
                                            <div class="bar-inner"><div class="bar progress-line" data-width="90" style={{ width: "90%;"}}></div></div>
                                        </div>
                                    </div>

                                    
                                    <div class="skill-item">
                                        <div class="skill-header clearfix">
                                            <div class="skill-title">Investment</div>
                                            <div class="skill-percentage"><div class="count-box counted"><span class="count-text" data-speed="2000" data-stop="93">93</span>%</div></div>
                                        </div>
                                        <div class="skill-bar">
                                            <div class="bar-inner"><div class="bar progress-line" data-width="93" style={{ width: "93%;" }}></div></div>
                                        </div>
                                    </div>

                                </div>

                                <div class="text">
                                    <p>The argument in favor of using filler text goes something like this: If you use real content in the <a href="#">design process,</a> anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.</p>
                                    <p>Aenean tincidunt id mauris id auctor. Donec at ligula lacus. Nulla dignissim mi quis neque interdum, quis porta sem finibus.</p>
                                </div>

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

export default page