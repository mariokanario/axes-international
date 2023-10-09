import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Modal, ModalBody } from "reactstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import { API } from "@/config";

function Login({ setModal, modal }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const Schema = yup
    .object({
      document: yup.string().required("El usuario es obligatorio"),
      password: yup.string().required("La contraseña es obligatoria"),
    })
    .required();

  const formik = useFormik({
    initialValues: {
      document: "",
      password: "",
    },
    validationSchema: Schema,
    onSubmit: async (data) => {
      try {
        setIsLoading(true);
        const response = await axios.post(`${API}/auth/login`, data);
        if (response?.data?.access_token) {
          localStorage.jwt = response?.data?.access_token;
          localStorage.name = response?.data?.name;
          router.push("/userDash", { scroll: false });
        }
        setIsLoading(false);
      } catch (err) {
        if (
          err?.response?.data?.message == "user search by credentials not match"
        ) {
          Swal.fire({
            title: "Error",
            text: "El usuario o contraseña no son correctos",
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
        console.log(err);
        setIsLoading(false);
      }
    },
  });

  const { document, password } = formik.values;

  return (
    <div>
      <Modal isOpen={modal}>
        <ModalBody>
          <h3 className="title-form">Ingresar</h3>
          <form
            className="form-calc row mx-auto pt-0"
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-3 form-group">
              <label htmlFor="mail" className="form-label">
                Usuario
              </label>
              <input
                type="text"
                className="form-control"
                id="document"
                value={document}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.document && formik.errors.document && (
                <small className="text-danger">{formik.errors.document}</small>
              )}
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="pass" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <small className="text-danger">{formik.errors.password}</small>
              )}
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn-style-two mt-3 me-3 w-auto"
                onClick={() => {
                  setModal(false);
                }}
              >
                Cancelar
                <FaArrowRight className="icon" />
              </button>
              <button
                disabled={isLoading}
                type="submit"
                className="btn-style-one mt-3 w-auto"
              >
                {!isLoading ? "Ingresar" : "Ingresando..."}
                <FaArrowRight className="icon" />
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Login;
