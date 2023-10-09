'use client'

import Footer from '@/app/components/Footer'
import Nav from '@/app/components/Nav'
import AddWallet from '@/app/components/userDash/AddWallet'
import ChangePassword from '@/app/components/userDash/ChangePassword'
import React from 'react'

const Page = () => {

  const name = localStorage.getItem('name') ?? ""


  return (
    <>
      <Nav />
      <main>
        <div className="container container-dash pb-5">
          <h2>Configuración de la cuenta</h2>
          <div className='d-flex justify-content-between my-5'>
            <div>
              <p>Usuario</p>
              <h3>{name}</h3>
            </div>
            <div>
              <p>Billetera virtual</p>
              <h3>a78dfg67cv6c5vb764</h3>
            </div>

          </div>

          <section className='row'>

            <div className="col-12 col-md-6">
              <div className="card cards-setting">
                <ChangePassword />
              </div>
            </div>



            <div className="col-12 col-md-6">
              <div className="card cards-setting">
                <AddWallet />
              </div>
            </div>



          </section>

        </div>

        <Footer />
      </main>
    </>
  )
}

export default Page