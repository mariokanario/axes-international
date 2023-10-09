"use client";

import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/style.css";
import "@/styles/userDash.css";

import { GoCreditCard, GoGraph, GoCalendar, GoAlert } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import moment from "moment";
import { API } from "@/config";

const numberFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 1,
});

const page = () => {
  const navigation = useRouter();
  const [profile, setProfile] = useState();
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [isLoadingInvesment, setIsLoadingInvesment] = useState(true);
  const [isLoadingPaymentInfo, setIsLoadingPaymentInfo] = useState(false);
  const [invesment, setInvestment] = useState([]);
  const [payPending, setPayPending] = useState();

  useEffect(() => {
    validProfile();
    getInvestment();
  }, []);

  const validProfile = async () => {
    setIsLoadingProfile(true);
    try {
      const response = await axios.get(`${API}/auth/profile`, {
        headers: { Authorization: `Bearer ${localStorage.jwt}` },
      });
      setProfile(response.data);
      setIsLoadingProfile(false);
    } catch (e) {
      console.log(e);
      setIsLoadingProfile(false);
      navigation.replace("/");
    }
  };

  const getInvestment = async () => {
    setIsLoadingInvesment(true);
    try {
      const { data } = await axios.get(`${API}/investment`, {
        headers: { Authorization: `Bearer ${localStorage.jwt}` },
      });
      setInvestment(data?.data ?? []);
      setPayPending(data?.data?.find((e) => e.status == "PENDING_PAYMENT"));
      setIsLoadingInvesment(false);
    } catch (e) {
      setIsLoadingInvesment(false);
      navigation.replace("/");
    }
  };

  const getPaymentInfo = async (investment_id) => {
    setIsLoadingPaymentInfo(true);
    try {
      const { data } = await axios.get(
        `${API}/payment/${investment_id}/PROCESSING_PAYMENT`,
        {
          headers: { Authorization: `Bearer ${localStorage.jwt}` },
        }
      );
      if(data?.data){

        window.open(data?.data?.status_url, "_blank");
      }
      setIsLoadingPaymentInfo(false);
    } catch (e) {
      setIsLoadingPaymentInfo(false);
      navigation.replace("/");
    }
  };

  const getInfo = (e) => {
    if (e.status == "PENDING_PAYMENT") {
      return (
        <div className="alert2">
          Para que este paquete comience a operar debe realizar el pago de la
          inversión.
          <Link href={`/userDash/pay/${e?.id}`} className="btn-style-one mt-3">
            Iniciar pago
            <FaArrowRight className="icon" />
          </Link>
        </div>
      );
    } else if (e.status == "PROCESSING_PAYMENT") {
      return (
        <>
          <div className="alert3">
            <p>
              La inversión se encuentra en proceso de pago, al finalizar podras
              visualizar los rendimientos en este espacio
              <button
                disabled={isLoadingPaymentInfo}
                onClick={() => getPaymentInfo(e.id)}
                className="btn-style-one mt-3"
              >
                {isLoadingPaymentInfo
                  ? "Obteniendo estado..."
                  : "Ver estado de pago en COINPAYMENT"}
                <FaArrowRight className="icon" />
              </button>
            </p>
          </div>
        </>
      );
    } else if (e.status == "PROCESSING_PAYMENT") {
      return (
        <>
          <div>
            <p>Pagos realizados</p>

            <table className="table mt-4">
              <tbody></tbody>
            </table>
          </div>

          <div className="d-flex flex-column align-items-end">
            <p>Total</p>
            <h3>
              $0<small>USDT</small>
            </h3>
          </div>
        </>
      );
    }
  };

  const getTitleState = (e) => {
    if (e.status == "PENDING_PAYMENT") {
      return <b style={{ color: "#006fe3" }}>Pendiente de pago</b>;
    } else if (e.status == "PROCESSING_PAYMENT") {
      return <b style={{ color: "#8ec3ff" }}>Pago en proceso</b>;
    } else if (e.status == "ACTIVE") {
      return <b style={{ color: "#00bf7e" }}>Activa</b>;
    } else if (e.status == "FINISHED") {
      return <b style={{ color: "#000000" }}>Finalizada</b>;
    } else if (e.status == "CANCELLED") {
      return <b style={{ color: "#ea001b" }}>Cancelada</b>;
    }
  };

  return (
    <>
      <Nav />
      <main>
        <div className="container container-dash">
          <h2>Bienvenido {isLoadingProfile ? "..." : profile?.name} </h2>

          {isLoadingInvesment ? (
            <p>Cargando...</p>
          ) : (
            <>
              {payPending ? (
                <div className="alert">
                  <div>
                    <h3>
                      <GoAlert className="icon-alert" /> Tienes un pago
                      pendiente
                    </h3>
                    <h4>
                      Paquete <b>{payPending?.package_id?.name}</b>
                    </h4>
                    <h4>
                      Valor a pagar{" "}
                      <b>{numberFormat.format(payPending?.valueUsd)} USDT</b>
                    </h4>
                  </div>
                  <Link
                    href={`/userDash/pay/${payPending?.id}`}
                    className="btn-style-one"
                  >
                    Iniciar pago
                    <FaArrowRight className="icon" />
                  </Link>
                </div>
              ) : null}

              {invesment?.map((e) => (
                <section className="d-flex justify-content-center">
                  <div className="card cards-invest mb-5 w-100">
                    <div className="card-body row justify-content-between">
                      <div className="col-12 col-md-5">
                        <p>Capital - {getTitleState(e)}</p>
                        <h3>
                          {numberFormat.format(e?.valueUsd)} <small>USDT</small>
                        </h3>

                        <div
                          className="d-flex justify-content-between  align-items-baseline"
                          style={{ marginTop: "30px" }}
                        >
                          <div className="d-flex align-items-center">
                            <div className="dash-ico di-1">
                              <GoCreditCard />
                            </div>
                            <p>Paquete</p>
                          </div>
                          <p>{e?.package_id?.name}</p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between align-items-baseline">
                          <div className="d-flex align-items-center">
                            <div className="dash-ico di-2">
                              <GoGraph />
                            </div>
                            <p>Porcentaje de rentabilidad</p>
                          </div>
                          <p>{e.percentage[0]}%</p>
                        </div>
                        <hr />

                        <div className="d-flex justify-content-between align-items-baseline">
                          <div className="d-flex align-items-center">
                            <div className="dash-ico di-3">
                              <GoCalendar />
                            </div>
                            <p>
                              Fecha <br /> de registro
                            </p>
                          </div>
                          <p>{moment(e.created_at).format("D-M-Y")}</p>
                        </div>
                      </div>
                      <hr className="hr-vertical  d-none d-md-block" />
                      <div className="col-12 col-md-6 d-flex flex-column justify-content-between">
                        {getInfo(e)}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default page;
