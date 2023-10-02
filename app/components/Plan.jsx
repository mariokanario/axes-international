import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Modal, ModalBody } from 'reactstrap';

function Plan({ setModal, modal, type }) {

    return (
        <div>
            <Modal isOpen={modal}  >
                <ModalBody>
                    <h2>Contactar asesor</h2>
                    <p>Para iniciar con una inversión deberás llenar los siguientes datos y uno de nuestros asesores se comunicará con usted.</p>
                    <p>Tipo de inversión seleccionada: <span className='fw-bold'> {type} </span> </p>
                    <form className="form-calc row mx-auto pt-0">
                        <div className="mb-3 form-group">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" />
                        </div>
                        <div className="mb-3 form-group">
                            <label for="mail" className="form-label">Correo</label>
                            <input type="email" className="form-control" id="mail" />
                        </div>
                        <div className="mb-3 form-group">
                            <label for="telefono" className="form-label">Teléfono</label>
                            <input type="tel" className="form-control" id="telefono" />
                        </div>
                        

                    </form>

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
                            Enviar
                            <FaArrowRight className='icon' />
                        </button>
                    </div>
                    
                </ModalBody>
            </Modal>
        </div>
    );
}

export default Plan;