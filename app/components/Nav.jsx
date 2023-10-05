import React, { useState } from 'react'
import Login from './Login';
import Link from 'next/link';


const Nav = () => {

    const [modal, setModal] = useState(false);


    return (

        <>
            <Login setModal={setModal} modal={modal} />
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{ height: "100px" }}>
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <img src="../../img/logo.svg" style={{width: "70%"}} alt="logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav gap-3">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Idioma
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Ingles
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Español
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <a
                                    className="nav-link btn-style-one "
                                    href="#"
                                    onClick={() => {
                                        setModal(true);
                                    }}
                                >
                                    Ingresar
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav