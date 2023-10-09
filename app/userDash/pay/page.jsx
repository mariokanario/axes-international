'use client'

import React from 'react'
import Nav from '../../components/Nav'
import { FaArrowRight } from 'react-icons/fa6';
import Swal from 'sweetalert2'
import Footer from '@/app/components/Footer';


const Page = () => {

    const sweetAlert = () => {
        Swal.fire({
            title: 'Enlace de pago generado correctamente',
            text: 'A continuación serás redireccionado a un sitio externo en el cual podrás realizar el pago. Por favor luego de finalizar el pago vuelve a esta página.',
            icon: 'info',
            confirmButtonText: 'Aceptar',
            preConfirm: () => {
                // window.location.href = 'https://www.coinpayments.net/'; 
                window.open('https://www.coinpayments.net/', '_blank');
                sweetAlertConfirm()
            }
        })
    }

    const sweetAlertConfirm = () => {
        Swal.fire({
            title: 'Esperando la confirmación del pago',
            text: 'Se esta procesando el pago en la página externa. Cuando finalice te estaremos informado.',
            icon: 'warning'
        })
    }

    return (
        <>
            <Nav />
            <main>
                <div className="container container-dash pay">
                    <h2>Resumen del pago</h2>
                    <div className='row mt-5'>
                        <div className="col-12 col-md-4">
                            <p>Tipo de paquete</p>
                            <h3>Élite</h3>
                        </div>
                        <div className="col-12 col-md-4">
                            <p>Valor a invertir</p>
                            <h3>$ 400 <small>USDT</small></h3>
                        </div>
                        <div className="col-12 col-md-4">
                            <p>Método de pago</p>
                            <button
                                className='btn-style-one mt-3'
                                onClick={sweetAlert}
                            >
                                Pagar con CoinPayments
                            </button>
                        </div>
                    </div>

                    <div className="card cards-tuto mb-5">
                        <div className="card-body row justify-content-between">
                            <div className="col-12 col-md-7">
                                <h4>Como realizar el pago con CoinPayments</h4>
                                <p className='mt-5'>Te dejamos una pequeña guía de como realizar tus pagos con CoinPayments y cual es el proceso a realizar despúes de finalizado el pago</p>
                                <button className='btn-style-one mt-5'>
                                    Descargar documento
                                    <FaArrowRight className="icon" />
                                </button>
                            </div>
                            <div className="d-none d-md-block col-md-4">
                                <img src="../../../img/dash/document.png" className='w-100' alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </main>
        </>
    )
}

export default Page