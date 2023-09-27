import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Modal, ModalBody } from 'reactstrap';

function Plan({ setModal, modal }) {

    return (
        <div>
            <Modal isOpen={modal}  >
                <ModalBody>
                    <h2>Modal planes</h2>
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
                </ModalBody>
            </Modal>
        </div>
    );
}

export default Plan;