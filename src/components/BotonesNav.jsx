import { Box, Grid2 } from "@mui/material";
import Link from "next/link";
import React from "react";
import nav from "../style/navbar.module.css";

function BotonesNav() {
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
        <Link href="/rg/about" className={nav.boton}>
          ACERCA DE MI
        </Link>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
        <Link href="/rg/resumen" className={nav.boton}>
          RESUMEN
        </Link>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
        <Link href="/rg/portafolio" className={nav.boton}>
          PORTAFOLIO
        </Link>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
        <Link href="/rg/contacto" className={nav.boton}>
          CONTACTO
        </Link>
      </Box>
    </>
  );
}

export default BotonesNav;
