import React, { useState } from 'react'
import Swal from "sweetalert2";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import { API } from "@/config";
import { GoCreditCard } from 'react-icons/go';
import { FaArrowRight } from 'react-icons/fa6';

const AddWallet = () => {

    const [isLoading, setIsLoading] = useState(false);

    const Schema = yup
        .object({
            wallet: yup.string().required("La billetera es obligatoria")
        })
        .required();

    const formik = useFormik({
        initialValues: {
            wallet: "",
        },
        validationSchema: Schema,
        onSubmit: async (data) => {
            try {
                setIsLoading(true);
                const response = await axios.post(`${API}/auth/login`, data);
                Swal.fire({
                    title: 'Cambio exitoso',
                    text: 'El número de tu billetera a sido agregado.',
                    icon: 'info',
                    confirmButtonText: 'Aceptar'
                })
                setIsLoading(false);
            } catch (err) {
                if (
                    err?.response?.data?.message == "user search by credentials not match"
                ) {
                    Swal.fire({
                        title: "Error",
                        text: "Ha ocurrido un error, intentalo nuevamente",
                        icon: "error",
                        confirmButtonText: "Cerrar",
                    });
                }
                console.log(err);
                setIsLoading(false);
            }
        },
    });

    const { wallet } = formik.values;


    return (
        <>
            <div className='d-flex  align-items-baseline'>
                <div className='dash-ico di-2'>
                    <GoCreditCard />
                </div>
                <p className='title-form'>Editar billetera virtual</p>
            </div>

            <form
                className='my-4'
                onSubmit={formik.handleSubmit}
            >
                <div className="form-group">
                    <label htmlFor="#wallet">Número de billetera</label>
                    <input
                        id='wallet'
                        type="text"
                        value={wallet}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.wallet && formik.errors.wallet && (
                        <small className="text-danger">{formik.errors.wallet}</small>
                    )}
                </div>
                <button
                    type="submit"
                    className='btn-style-one mt-5'
                    disabled={isLoading}
                >
                    {!isLoading ? "Agregar billetera" : "Agregando..."}
                    <FaArrowRight className="icon" />
                </button>
            </form>
        </>
    )
}

export default AddWallet