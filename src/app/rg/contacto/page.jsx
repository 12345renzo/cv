"use client";
import Main from "@/components/Main";
import React from "react";
import conta from "../../../style/contacto.module.css";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid2,
  Input,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

function Capepage() {
  const data = {
    nombre: "",
    email: "",
    subject: "",
    mensaje: "",
  };

  const formik = useFormik({
    initialValues: data,
    enableReinitialize: true,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Campo Requerido")
        .matches(/^\S+(?:\s+\S+)+$/, "Debe ingresar al menos dos palabras"),
      email: Yup.string().email("Email inválido").required("Campo Requerido"),
      subject: Yup.string().required("Campo Requerido"),
      mensaje: Yup.string().required("Campo Requerido"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      //console.log(values);
      const valor = enviar(values);
      if (valor) {
        Swal.fire({
          title: "Sistema",
          text: "Mensaje Enviado",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Sistema",
          text: "Mensaje no Enviado",
          icon: "error",
        });
      }
      limpiarCampos();
      setTimeout(() => {
        setSubmitting(false);
      }, 1500);
    },
  });

  const enviar = async (datos) => {
    const res = await axios.post(
      "https://magicloops.dev/api/loop/8d423f38-2d25-475a-ad56-7d3efc43150b/run",
      {
        nombre: datos.nombre,
        email: datos.email,
        subject: datos.subject,
        mensaje: datos.mensaje,
      }
    );
    const datas = res.data;
    return datas.markdown;
  };

  const limpiarCampos = () => {
    formik.resetForm();
  };

  return (
    <Grid2 size={12} sx={{ backgroundColor: "#111", minHeight: "100vh" }}>
      <Main subtitle="No dudes en contactarme" title="Contáctame" />
      <Container maxWidth="xl">
        <Grid2
          container
          spacing={2}
          size={12}
          sx={{
            paddingBottom: "55px",
          }}
        >
          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{
              padding: { xs: "10px 10px", md: "15px 45px" },
            }}
          >
            <h2 className={conta.daleh2}>Enviame un mensaje</h2>
            <form onSubmit={formik.handleSubmit}>
              <Box size={12}>
                {/* para el nombre */}
                <FormControl
                  fullWidth
                  variant="standard"
                  className={conta.controles}
                >
                  <Input
                    className={conta.inputs}
                    placeholder="Nombre"
                    required
                    variant="standard"
                    id="nombre"
                    name="nombre"
                    margin="normal"
                    value={formik.values.nombre}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.nombre && formik.errors.nombre}
                    fullWidth
                    type="text"
                    sx={{
                      "&:-webkit-autofill": {
                        backgroundColor: "#9f9f9f !important",
                        WebkitBoxShadow:
                          "0 0 0px 1000px #161616 inset !important",
                        boxShadow: "0 0 0px 1000px #161616 inset !important",
                        WebkitTextFillColor: "#9f9f9f !important",
                        color: "#9f9f9f !important",
                      },
                      "&.MuiInput-underline:before": {
                        borderBottom: "none !important",
                      },
                      "&.Mui-focused": {
                        borderBottom: "2px solid #009e66",
                        boxShadow: "none",
                        outline: "none",
                      },
                      "&.MuiInput-underline:after": {
                        borderBottom: "none",
                        outline: "none",
                        boxShadow: "none",
                      },
                    }}
                  />
                </FormControl>
                {formik.touched.nombre && formik.errors.nombre && (
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "600",
                      color: "red",
                      marginBottom: "10px",
                      textAlign: "center",
                    }}
                  >
                    {formik.errors.nombre}
                  </Typography>
                )}
                {/* para el email */}
                <FormControl
                  fullWidth
                  variant="standard"
                  className={conta.controles}
                >
                  <Input
                    className={conta.inputs}
                    placeholder="Email"
                    required
                    variant="standard"
                    id="email"
                    name="email"
                    margin="normal"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && formik.errors.email}
                    fullWidth
                    type="email"
                    sx={{
                      "&:-webkit-autofill": {
                        backgroundColor: "#9f9f9f !important",
                        WebkitBoxShadow:
                          "0 0 0px 1000px #161616 inset !important",
                        boxShadow: "0 0 0px 1000px #161616 inset !important",
                        WebkitTextFillColor: "#9f9f9f !important",
                        color: "#9f9f9f !important",
                      },
                      "&.MuiInput-underline:before": {
                        borderBottom: "none !important",
                      },
                      "&.Mui-focused": {
                        borderBottom: "2px solid #009e66",
                        boxShadow: "none",
                        outline: "none",
                      },
                      "&.MuiInput-underline:after": {
                        borderBottom: "none",
                        outline: "none",
                        boxShadow: "none",
                      },
                    }}
                  />
                </FormControl>
                {formik.touched.email && formik.errors.email && (
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "600",
                      color: "red",
                      marginBottom: "10px",
                      textAlign: "center",
                    }}
                  >
                    {formik.errors.email}
                  </Typography>
                )}
                {/* para el subject */}
                <FormControl
                  fullWidth
                  variant="standard"
                  className={conta.controles}
                >
                  <Input
                    className={conta.inputs}
                    placeholder="Subject"
                    required
                    variant="standard"
                    id="subject"
                    name="subject"
                    margin="normal"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.subject && formik.errors.subject}
                    fullWidth
                    type="text"
                    sx={{
                      "&:-webkit-autofill": {
                        backgroundColor: "#9f9f9f !important",
                        WebkitBoxShadow:
                          "0 0 0px 1000px #161616 inset !important",
                        boxShadow: "0 0 0px 1000px #161616 inset !important",
                        WebkitTextFillColor: "#9f9f9f !important",
                        color: "#9f9f9f !important",
                      },
                      "&.MuiInput-underline:before": {
                        borderBottom: "none !important",
                      },
                      "&.Mui-focused": {
                        borderBottom: "2px solid #009e66",
                        boxShadow: "none",
                        outline: "none",
                      },
                      "&.MuiInput-underline:after": {
                        borderBottom: "none",
                        outline: "none",
                        boxShadow: "none",
                      },
                    }}
                  />
                </FormControl>
                {formik.touched.subject && formik.errors.subject && (
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "600",
                      color: "red",
                      marginBottom: "10px",
                      textAlign: "center",
                    }}
                  >
                    {formik.errors.subject}
                  </Typography>
                )}
                {/* para el subject */}
                <FormControl
                  fullWidth
                  variant="standard"
                  className={conta.controles}
                >
                  <Input
                    className={conta.inputs}
                    multiline
                    rows={4}
                    required
                    placeholder="Mensaje"
                    variant="standard"
                    id="mensaje"
                    name="mensaje"
                    margin="normal"
                    value={formik.values.mensaje}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.mensaje && formik.errors.mensaje}
                    fullWidth
                    type="text"
                    sx={{
                      "&:-webkit-autofill": {
                        backgroundColor: "#9f9f9f !important",
                        WebkitBoxShadow:
                          "0 0 0px 1000px #161616 inset !important",
                        boxShadow: "0 0 0px 1000px #161616 inset !important",
                        WebkitTextFillColor: "#9f9f9f !important",
                        color: "#9f9f9f !important",
                      },
                      "&.MuiInput-underline:before": {
                        borderBottom: "none !important",
                      },
                      "&.Mui-focused": {
                        borderBottom: "2px solid #009e66",
                        boxShadow: "none",
                        outline: "none",
                      },
                      "&.MuiInput-underline:after": {
                        borderBottom: "none",
                        outline: "none",
                        boxShadow: "none",
                      },
                    }}
                  />
                </FormControl>
                {formik.touched.mensaje && formik.errors.mensaje && (
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "600",
                      color: "red",
                      marginBottom: "10px",
                      textAlign: "center",
                    }}
                  >
                    {formik.errors.mensaje}
                  </Typography>
                )}
                <Button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className={conta.enviar}
                >
                  Enviar mensaje
                </Button>
              </Box>
            </form>
          </Grid2>
          <Grid2
            container
            spacing={0}
            size={{ xs: 12, md: 6 }}
            sx={{
              padding: { xs: "10px 10px", md: "15px 45px" },
            }}
          >
            <Grid2 size={12}>
              <h2 className={conta.daleh2}>Informacion de contacto</h2>
              <p className={conta.peque}>
                Siempre disponible para trabajos independientes si surge el
                proyeco adecuado. ¡No dudes en contactarme!
              </p>
            </Grid2>
            <Grid2 container spacing={0} size={12}>
              <Grid2
                size={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="material-icons" style={{ margin: "15px 0" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 0 24 24"
                    width="33px"
                    fill="#009e66"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                  </svg>
                </span>
                <span className="material-icons" style={{ margin: "15px 0" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 0 24 24"
                    width="33px"
                    fill="#009e66"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
                  </svg>
                </span>
                <span className="material-icons" style={{ margin: "15px 0" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 0 24 24"
                    width="33px"
                    fill="#009e66"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                </span>
                <span className="material-icons" style={{ margin: "15px 0" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="36px"
                    viewBox="0 0 24 24"
                    width="30px"
                    fill="#009e66"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </span>
              </Grid2>
              <Grid2
                container
                size={10}
                sx={{ borderLeft: "2px #9f9f9f solid" }}
              >
                <Grid2 size={12} sx={{ padding: "12px 0 12px 22px" }}>
                  <h4 className={conta.olp}>Nombre</h4>
                  <p className={conta.op}>Paul Renzo Gonzales Asencios</p>
                </Grid2>
                <Grid2 size={12} sx={{ padding: "12px 0 12px 22px" }}>
                  <h4 className={conta.olp}>Ubicación</h4>
                  <p className={conta.op}>Av. San Martin 294</p>
                </Grid2>
                <Grid2 size={12} sx={{ padding: "12px 0 12px 22px" }}>
                  <h4 className={conta.olp}>Llámame</h4>
                  <p className={conta.op}>976201879</p>
                </Grid2>
                <Grid2 size={12} sx={{ padding: "12px 0 12px 22px" }}>
                  <h4 className={conta.olp}>Enviame un correo</h4>
                  <Grid2
                    display="flex"
                    size={12}
                    justifyContent="start"
                    alignItems="center"
                    sx={{
                      flexWrap: "wrap",
                    }}
                  >
                    <p className={conta.op}>renzogonzales</p>
                    <p className={conta.op}>asencios@gmail.com</p>
                  </Grid2>
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </Grid2>
  );
}

export default Capepage;
