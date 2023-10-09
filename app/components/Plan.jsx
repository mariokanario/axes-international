import React, { useEffect, useState } from 'react';
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import { FaArrowRight } from 'react-icons/fa6';
import { Modal, ModalBody } from 'reactstrap';
import Swal from 'sweetalert2'

import dataJson from "../../json/data.json";
import { API } from '@/config';


function Plan({ setModal, modal, type }) {

    const [message, setMessage] = useState(null)

    const Schema = yup
        .object({
            name: yup
                .string()
                .required("El nombre es obligatorio")
                .min(5, "El nombre debe tener mínimo 5 letras"),
            email: yup
                .string()
                .required("El correo es obligatorio")
                .min(5, "El correo debe de tener mínimo 5 letras")
                .email("Ingresa un correo válido"),
            cellphone: yup
                .string()
                .required("El teléfono es obligatorio")
                .min(5, "El teléfono debe de tener mínimo 5 letras")
                .typeError("El teléfono es obligatorio"),
            country: yup.string().required("Selecciona un país"),
            city: yup.string().required("Ingresa una ciudad"),
        })
        .required();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            cellphone: "",
            country: "",
            city: ""
        },
        validationSchema: Schema,
        onSubmit: async (data) => {
            // console.log(data);
            try {
                const response = await axios.post(`${API}/user/possibleInvestor/landing`, data);
                const { message } = response.data;
                setMessage(message)
                console.log(message);
            } catch (err) {
                console.log(err);
            }
        },
    });

    const countries = dataJson.map((d) => {
        return { value: d.country, label: d.country };
    });

    const { name, email, cellphone, country, city } = formik.values;

    const sweetAlert = () => {
        Swal.fire({
            title: 'Mensaje enviado',
            text: 'Tus datos han sido registrados correctamente, en poco tiempo uno de nuestros asesores se estará comunicando con usted',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        })
    }
    const sweetAlertErrorEmail = () => {
        Swal.fire({
            title: 'Error',
            text: 'El correo ya se encuentra registrado, intenta con uno nuevo',
            icon: 'error',
            confirmButtonText: 'Cerrar'
        })
    }
    const sweetAlertError = () => {
        Swal.fire({
            title: 'Error',
            text: 'Algo salió mal, intenta nuevamente, si el problema persiste comunicate en el menú de contacto',
            icon: 'error',
            confirmButtonText: 'Cerrar'
        })
    }

    useEffect(() => {
        if (message) {
            if (message == "user created") {
                sweetAlert()
                setModal(false)
            } else if (message == "conflict email") {
                sweetAlertErrorEmail()
            } else {
                sweetAlertError()
            }
        }
    }, [message])



    return (
        <div>
            <Modal isOpen={modal} size='lg' >
                <ModalBody>
                    <h3>Plan: {type}</h3>
                    <p>Para iniciar con una inversión completa el siguiente formulario para que uno de nuestros asesores se comunique con usted.</p>
                    <form
                        onSubmit={formik.handleSubmit}
                        className="form-calc row mx-auto pt-0"
                    >
                        <div className="mb-3 form-group col-12 col-sm-6">
                            <label htmlFor="name" className="form-label mb-1">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                autoComplete="off"
                                value={name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.name && formik.errors.name && (
                                <small className="text-danger">{formik.errors.name}</small>
                            )}
                        </div>
                       
                        <div className="mb-3 form-group col-12 col-sm-6">
                            <label htmlFor="email" className="form-label mb-1">Correo</label>
                            <input
                                className="form-control"
                                type="email"
                                id="email"
                                autoComplete="off"
                                value={email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <small className="text-danger">{formik.errors.email}</small>
                            )}
                        </div>
                        <div className="mb-3 form-group col-12 col-sm-6">
                            <label htmlFor="cellphone" className="form-label mb-1">Teléfono</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="cellphone"
                                autoComplete="off"
                                value={cellphone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.cellphone && formik.errors.cellphone && (
                                <small className="text-danger">{formik.errors.cellphone}</small>
                            )}
                        </div>
                        <div className="mb-3 form-group col-12 col-sm-6">
                            <label htmlFor="country" className="form-label mb-1">País</label>
                            <input
                                type="text"
                                className="form-control"
                                id="country"
                                autoComplete="off"
                                value={country}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.country && formik.errors.country && (
                                <small className="text-danger">{formik.errors.country}</small>
                            )}
                        </div>
                        <div className="mb-3 form-group col-12 col-sm-6">
                            <label htmlFor="city" className="form-label mb-1">Ciudad</label>
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                value={city}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.city && formik.errors.city && (
                                <small className="text-danger">{formik.errors.city}</small>
                            )}
                        </div>

                        <div className='d-flex justify-content-end'>
                            <button className='btn-style-two mt-3 me-3 w-auto' onClick={() => {
                                setModal(false)
                            }}>
                                Cancelar
                                <FaArrowRight className='icon' />
                            </button>
                            <button className='btn-style-one mt-3 w-auto' type='submit'
                            /* onClick={() => {
                                setModal(false)
                            }} */
                            >
                                Enviar
                                <FaArrowRight className='icon' />
                            </button>
                        </div>
                    </form>



                </ModalBody>
            </Modal>
        </div>
    );
}

export default Plan;