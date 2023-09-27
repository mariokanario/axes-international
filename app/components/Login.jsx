import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import {  Modal, ModalBody } from 'reactstrap';

function Login({ setModal, modal }) {



    return (
        <div>
            <Modal isOpen={modal}  >
                <ModalBody>
                    <form className="form-calc row mx-auto pt-0">
                        <div className="mb-3 form-group">
                            <label for="mail" className="form-label">Correo</label>
                            <input type="email" className="form-control" id="mail" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3 form-group">
                            <label for="pass" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="pass" placeholder="name@example.com" />
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button className='btn-style-two mt-3 me-3 w-auto' onClick={() => {
                                setModal(false)
                            }}>
                                Cancelar
                                <FaArrowRight className='icon' />
                            </button>
                            <button className='btn-style-one mt-3 w-auto' onClick={() => {
                                setModal(false)
                            }}>
                                Ingresar
                                <FaArrowRight className='icon' />
                            </button>

                        </div>

                    </form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default Login;