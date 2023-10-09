import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { GoKey } from 'react-icons/go'
import Swal from "sweetalert2";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import { API } from "@/config";
import { useRouter } from "next/navigation";

const ChangePassword = () => {

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();


    const Schema = yup
        .object({
            password: yup.string().required("La contraseña es obligatoria"),
            new_password: yup.string().required("La contraseña es obligatoria")
        })
        .required();

    const formik = useFormik({
        initialValues: {
            password: "",
            new_password: "",
        },
        validationSchema: Schema,
        onSubmit: async (data) => {
            
            try {
                setIsLoading(true);
                const response = await axios.put(`${API}/user/update/password/profile`, data, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } });
                console.log(response);
                Swal.fire({
                    title: 'Cambio exitoso',
                    text: 'Para finalizar el proceso deberás iniciar sesión nuevamente',
                    icon: 'info',
                    confirmButtonText: 'Aceptar',
                    preConfirm: () => {
                        localStorage.removeItem('name');
                        localStorage.removeItem('jwt');
                        router.push("/", { scroll: false });

                    }
                })
                setIsLoading(false);
            } catch (err) {
                if (
                    err?.response?.data?.message == "token_decode_unauthorized"
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

    const { password, new_password } = formik.values;



    return (
        <>
            <div className='d-flex  align-items-baseline'>
                <div className='dash-ico di-1'>
                    <GoKey />
                </div>
                <p className='title-form'>Cambiar contraseña</p>
            </div>
            <form
                className='my-4'
                onSubmit={formik.handleSubmit}
            >
                <div className="row">
                    <div className="form-group">
                        <label htmlFor="#password">Contraseña actual</label>
                        <input
                            id='password'
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <small className="text-danger">{formik.errors.password}</small>
                        )}
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="#new_password">Nueva contraseña</label>
                        <input
                            id='new_password'
                            type="password"
                            className="form-control"
                            value={new_password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.new_password && formik.errors.new_password && (
                            <small className="text-danger">{formik.errors.new_password}</small>
                        )}
                    </div>
                </div>
                <button
                    type="submit"
                    className='btn-style-one mt-5'
                    disabled={isLoading}
                >
                    {!isLoading ? "Cambiar contraseña" : "Cambiando..."}

                    <FaArrowRight className="icon" />
                </button>
            </form>
        </>
    )
}

export default ChangePassword