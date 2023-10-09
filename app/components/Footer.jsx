import React from 'react'

const Footer = () => {
    return (
        < footer className="footer-bottom container-fluid" >
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
    )
}

export default Footer