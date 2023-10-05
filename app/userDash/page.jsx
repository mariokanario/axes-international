'use client'

import React from 'react'
import Nav from '../components/Nav'
import '../globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/style.css'
import '@/styles/userDash.css'

import { GoCreditCard, GoGraph, GoCalendar, GoAlert } from "react-icons/go";
import { FaArrowRight } from 'react-icons/fa6';

const page = () => {
  return (
    <>
      <Nav />
      <main>
        <div className="container ">

          <div className="alert">
            <div>
              <GoAlert className='icon-alert'/>
              Tienes un pago pendiente
            </div>
            <button className='btn-style-one'>
              Iniciar pago
              <FaArrowRight className="icon" />
              </button>
          </div>

          <section className='d-flex justify-content-center'>
            <div className="card cards-invest mb-5">
              <div className="card-body row justify-content-between">
                <div className="col-12 col-md-5">
                  <p>Capital</p>
                  <h3>$ 400 <small>USDT</small></h3>

                  <div className='d-flex justify-content-between  align-items-baseline' style={{ marginTop: "70px" }}>
                    <div className='d-flex align-items-center'>
                      <div className='dash-ico di-1'>
                        <GoCreditCard />
                      </div>
                      <p>Paquete</p>
                    </div>

                    <p>Élite</p>
                  </div>
                  <hr />
                  <div className='d-flex justify-content-between align-items-baseline'>
                    <div className='d-flex align-items-center'>
                      <div className='dash-ico di-2'>
                        <GoGraph />
                      </div>
                      <p>Rentabilidad</p>
                    </div>
                    <p>10%</p>
                  </div>
                  <hr />

                  <div className='d-flex justify-content-between align-items-baseline'>
                    <div className='d-flex align-items-center'>
                      <div className='dash-ico di-3'>
                        <GoCalendar />
                      </div>
                      <p>Fecha</p>
                    </div>
                    <p>15-10-2023</p>
                  </div>

                </div>
                <hr className='hr-vertical' />
                <div className="col-12 col-md-6 d-flex flex-column justify-content-between">
                  <div>
                    <p>Pagos realizados</p>

                    <table className="table mt-4">
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>20-10-2023</td>
                          <td>$200 USDT</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>20-11-2023</td>
                          <td>$200 USDT</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>20-12-2023</td>
                          <td>$200 USDT</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className='d-flex flex-column align-items-end'>
                    <p>Total</p>
                    <h3>$ 600 <small>USDT</small></h3>
                  </div>

                </div>
              </div>
            </div>
          </section>

          <section className='d-flex justify-content-center'>
            <div className="card cards-invest mb-5">
              <div className="card-body row justify-content-between">
                <div className="col-12 col-md-5">
                  <p>Capital</p>
                  <h3>$ 400 <small>USDT</small></h3>

                  <div className='d-flex justify-content-between  align-items-baseline' style={{ marginTop: "70px" }}>
                    <div className='d-flex align-items-center'>
                      <div className='dash-ico di-1'>
                        <GoCreditCard />
                      </div>
                      <p>Paquete</p>
                    </div>

                    <p>Élite</p>
                  </div>
                  <hr />
                  <div className='d-flex justify-content-between align-items-baseline'>
                    <div className='d-flex align-items-center'>
                      <div className='dash-ico di-2'>
                        <GoGraph />
                      </div>
                      <p>Rentabilidad</p>
                    </div>
                    <p>10%</p>
                  </div>
                  <hr />

                  <div className='d-flex justify-content-between align-items-baseline'>
                    <div className='d-flex align-items-center'>
                      <div className='dash-ico di-3'>
                        <GoCalendar />
                      </div>
                      <p>Fecha</p>
                    </div>
                    <p>No a iniciado</p>
                  </div>

                </div>
                <hr className='hr-vertical' />
                <div className="col-12 col-md-6 d-flex flex-column justify-content-between">
                  <div className="alert2">
                      Para que este paquete comience a operar debe realizar primero el pago.
                    <button className='btn-style-one mt-3'>
                      Iniciar pago
                      <FaArrowRight className="icon" />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </section>

          
        </div>
      </main>
    </>
  )
}

export default page