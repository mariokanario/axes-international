"use client";

import React, { useEffect, useState } from "react";
import Nav from "./../../../components/Nav";
import "./../../../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/style.css";
import "@/styles/userDash.css";
import { FaArrowRight } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API } from "@/config";

const numberFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 1,
});

const Page = ({ params }) => {
  const navigation = useRouter();
  const [isLoadingPayment, setIsLoadingPayment] = useState(false);
  const [isLoadingInvesment, setIsLoadingInvesment] = useState(true);
  const [investmen, setInvestment] = useState();

  useEffect(() => {
    if (params?.id) {
      getInvestment();
    }
  }, [params]);

  const getInvestment = async () => {
    setIsLoadingInvesment(true);
    try {
      const { data } = await axios.get(`${API}/investment/${params?.id}`, {
        headers: { Authorization: `Bearer ${localStorage.jwt}` },
      });
      if (data?.data && data?.data?.status == "PENDING_PAYMENT") {
        setInvestment(data?.data);
      } else {
        navigation.replace("/userDash");
      }
      setIsLoadingInvesment(false);
    } catch (e) {
      setIsLoadingInvesment(false);
      navigation.replace("/userDash");
    }
  };

  const payment = async () => {
    setIsLoadingPayment(true);
    try {
      const { data } = await axios.post(
        `${API}/payment`,
        JSON.stringify({
          investmen_id: params.id,
          package_name: investmen?.package_id?.name,
        }),
        {
          headers: {
            Authorization: `Bearer ${localStorage.jwt}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (data?.message == "payment_created") {
        sweetAlert(data?.data?.checkout_url);
      } else if (data?.message == "investment_not_found") {
        Swal.fire({
          title: "Error",
          text: "La inversión no existe o no se encuentra pendiente de pago.",
          icon: "error",
          confirmButtonText: "Cerrar",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Algo salió mal, intenta nuevamente, si el problema persiste comunicate en el menú de contacto",
          icon: "error",
          confirmButtonText: "Cerrar",
        });
      }
      setIsLoadingPayment(false);
    } catch (e) {
      Swal.fire({
        title: "Error",
        text: "Algo salió mal, intenta nuevamente, si el problema persiste comunicate en el menú de contacto",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
      setIsLoadingPayment(false);
    }
  };

  const sweetAlert = (url) => {
    Swal.fire({
      title: "Enlace de pago generado correctamente",
      text: "A continuación serás redireccionado a un sitio externo en el cual podrás realizar el pago. Por favor luego de finalizar el pago vuelve a esta página.",
      icon: "info",
      confirmButtonText: "Aceptar",
      preConfirm: () => {
        window.open(url, "_blank");
        sweetAlertConfirm();
      },
    });
  };

  const sweetAlertConfirm = () => {
    Swal.fire({
      title: "Esperando la confirmación del pago",
      text: "Se esta procesando el pago en la página externa. Cuando finalice te estaremos informado.",
      icon: "warning",
    });
  };

  return (
    <>
      <Nav />
      <main>
        {isLoadingInvesment ? (
          <div className="container">
            <p>Cargando...</p>
          </div>
        ) : (
          <div className="container container-dash pay">
            <h2>Resumen del pago</h2>
            <div className="row mt-5">
              <div className="col-12 col-md-4">
                <p>Tipo de paquete</p>
                <h3>{investmen?.package_id?.name}</h3>
              </div>
              <div className="col-12 col-md-4">
                <p>Valor a pagar</p>
                <h3>
                  {numberFormat.format(investmen?.valueUsd)}
                  <small>USDT</small>
                </h3>
              </div>
              <div className="col-12 col-md-4">
                <p>Método de pago</p>
                <button
                  type="button"
                  disabled={isLoadingPayment}
                  className="btn-style-one mt-3"
                  onClick={payment}
                >
                  {isLoadingPayment
                    ? "Procesando..."
                    : "Pagar con COINPAYMENTS"}
                </button>
              </div>
            </div>

            <div className="card cards-tuto mb-5">
              <div className="card-body row justify-content-between">
                <div className="col-12 col-md-7">
                  <h4>Como realizar el pago con CoinPayments</h4>
                  <p className="mt-5">
                    Te dejamos una pequeña guía de como realizar tus pagos con
                    CoinPayments y cual es el proceso a realizar despúes de
                    finalizado el pago
                  </p>
                  <button className="btn-style-one mt-5">
                    Descargar documento
                    <FaArrowRight className="icon" />
                  </button>
                </div>
                <div className="d-none d-md-block col-md-4">
                  <img
                    src="../../../img/dash/document.png"
                    className="w-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Page;
