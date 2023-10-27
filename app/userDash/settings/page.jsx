"use client";

import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import AddWallet from "@/app/components/userDash/AddWallet";
import ChangePassword from "@/app/components/userDash/ChangePassword";
import axios from "axios";
import { API } from "@/config";
import { Context } from "../../context/Provider";
import { useContext, useEffect, useState } from "react";

const Page = () => {
  const { wallet, getWallet } = useContext(Context);

  const [name, setName] = useState('');
  
  useEffect(() => {
    setName(localStorage.getItem("name") ?? "");
    getWallet();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <div className="container container-dash pb-5">
          <h2>Configuración de la cuenta</h2>
          <div className="d-flex justify-content-between my-5">
            <div>
              <p>Usuario</p>
              <h3>{name}</h3>
            </div>
            <div>
              <p>Billetera virtual</p>
              <h3>{wallet ? wallet : "No ha agregado una billetera"}</h3>
            </div>
          </div>

          <section className="row">
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
  );
};

export default Page;
