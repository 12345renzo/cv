"use client"; // Asegúrate de tener esta línea si estás usando el componente en cliente
import Navbar from "@/components/Navbar";
import inicio from "../style/inicio.module.css";
import Footer from "@/components/Footer";
import React, { useEffect, useState } from "react";
import { Grid2, Typography } from "@mui/material";

// Cambié el nombre de la función a "Page"
function Page() {
  const names = ["Ing. Informatico", "Full Stack", "Software Development"];
  const [currentName, setCurrentName] = useState("");
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const handleTyping = () => {
      const fullName = names[currentNameIndex];
      let nextLetterIndex = letterIndex;
      let newCurrentName = currentName;

      if (isDeleting) {
        nextLetterIndex--;
        newCurrentName = fullName.slice(0, nextLetterIndex);
      } else {
        nextLetterIndex++;
        newCurrentName = fullName.slice(0, nextLetterIndex);
      }

      setCurrentName(newCurrentName);
      setLetterIndex(nextLetterIndex);

      if (!isDeleting && nextLetterIndex === fullName.length) {
        setPause(true);
        setTimeout(() => {
          setPause(false);
          setIsDeleting(true);
        }, 1000);
      } else if (isDeleting && nextLetterIndex === 0) {
        setPause(true);
        setTimeout(() => {
          setPause(false);
          setIsDeleting(false);
          setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
        }, 500);
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, pause, currentNameIndex]);

  return (
    <Grid2 container size={12} className={inicio.wrappey}>
      <video autoPlay muted loop className={inicio.video}>
        <source src="/video/fondo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Grid2>
        <Navbar />
        <div className={inicio.content}>
          <div className={inicio.aki}>
            <h3 className={inicio.nombre}>RENZO GONZALES</h3>
            <Typography variant="h4" component="div" className={inicio.soy}>
              Yo soy {currentName}
            </Typography>
          </div>
        </div>
        <Footer />
      </Grid2>
    </Grid2>
  );
}

export default Page; // Exporta el componente como "Page"
