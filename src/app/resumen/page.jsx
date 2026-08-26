import Main from "@/components/Main";
import React from "react";
import resu from "../../style/resumen.module.css";
import { Container, Grid2 } from "@mui/material";
import Cards from "@/components/Cards";

function page() {
  return (
    <Grid2 size={12} sx={{ backgroundColor: "#111" }}>
      <Main subtitle="Mira mi CV" title="Resumen" />
      <Container maxWidth="xl">
        <Grid2 container size={12} mx={6} spacing={2}>
          <Grid2 container size={12} spacing={{ xs: 2, md: 10 }}>
            <Grid2 container spacing={0} size={{ xs: 12, md: 6 }}>
              <Grid2 size={12}>
                <h3 className={resu.edu}>Educación</h3>
              </Grid2>
              <Grid2 container spacing={0}>
                <Cards
                  dispe="block"
                  img="none"
                  ruta=""
                  title="Desarrollo de Software"
                  subtitle="SENATI / 2020 - 2022"
                  lore="Formación técnica en análisis, diseño, desarrollo y mantenimiento de aplicaciones de software con metodologías ágiles."
                  se={11}
                />
                <Cards
                  dispe="block"
                  img="none"
                  ruta=""
                  title="Ingeniería Informática"
                  subtitle="UNJFSC (UNI) / 2022 - Actualidad"
                  lore="Décimo ciclo de Ingeniería Informática. Formación en desarrollo de software, bases de datos, arquitectura y gestión de proyectos."
                  se={11}
                />
                <Cards
                  dispe="block"
                  img="none"
                  ruta=""
                  title="React JS - De Básico a Avanzado"
                  subtitle="Udemy"
                  lore="Curso completo de React: componentes, hooks, useContext, useReducer, Redux, Zustand, integración con APIs REST, autenticación y despliegue."
                  se={11}
                />
                <Cards
                  dispe="block"
                  img="none"
                  ruta=""
                  title="NestJS - De Básico a Avanzado"
                  subtitle="Udemy"
                  lore="Curso completo de NestJS: módulos, providers, controladores, TypeORM, PostgreSQL, JWT, autenticación, microservicios y arquitectura escalable."
                  se={11}
                />
                <Cards
                  dispe="block"
                  img="none"
                  ruta=""
                  title="SQL Server Administrator de Básico a Avanzado"
                  subtitle="CEPS-UNI / 2024 - 2025"
                  lore="Administración de bases de datos con SQL Server: consultas complejas, backups, restauración, optimización y alta disponibilidad."
                  se={11}
                />
              </Grid2>
            </Grid2>
            <Grid2 container spacing={0} size={{ xs: 12, md: 6 }}>
              <Grid2 size={12}>
                <h3 className={resu.edu}>Experiencia</h3>
              </Grid2>
              <Grid2 container spacing={0}>
                <Cards
                  dispe="block"
                  img="none"
                  ruta=""
                  title="Practicante de Programador Full Stack"
                  subtitle="Fundación Calma / Enero 2026 - Actualmente"
                  lore="Desarrollo de módulos web con React y Next.js, consumo de APIs REST con TanStack Query, autenticación JWT y despliegue en Render. Trabajo en equipo con control de versiones en GitHub."
                  se={11}
                />
                <Cards
                  dispe="block"
                  img="none"
                  ruta=""
                  title="Practicante de Desarrollo de Software"
                  subtitle="NexaTech / Marzo 2025 - Junio 2025"
                  lore="Desarrollo de componentes front-end con Angular, integración con APIs REST, pruebas unitarias y documentación técnica. Experiencia en flujo de trabajo ágil con Git."
                  se={11}
                />
                <Cards
                  dispe="block"
                  img="none"
                  ruta=""
                  title="Practicante de Programación y Soporte Técnico"
                  subtitle="Municipalidad Distrital de Huaura / Agosto 2025 - Diciembre 2025"
                  lore="Soporte técnico a usuarios, mantenimiento de inventario de equipos y desarrollo de herramientas internas para optimizar procesos administrativos municipales."
                  se={11}
                />
                <Cards
                  dispe="block"
                  img="none"
                  ruta=""
                  title="Practicante de Soporte Técnico"
                  subtitle="Municipalidad Provincial de Huaura / Enero 2024 - Abril 2024"
                  lore="Aplicación de escritorio para gestión de equipos dañados con Java, JPA, MySQL y JasperReport. Seguimiento del patrón MVC y generación de reportes en PDF."
                  se={11}
                />
                <Cards
                  dispe="block"
                  img="none"
                  ruta=""
                  title="Practicante de Desarrollo de Software"
                  subtitle="Data GIS / Enero 2024 - Abril 2024"
                  lore="Migración de 4 TB de datos entre cuentas de OneDrive con inventario diario de archivos transferidos. Cero pérdida de datos en todo el proceso."
                  se={11}
                />
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2 container spacing={0} sx={{ marginBottom: "75px" }}>
            <Grid2 size={12} sx={{ marginBottom: "15px" }}>
              <p className={resu.sub}>
                Mi nivel de conocimiento en algunas herramientas
              </p>
              <h3 className={resu.mis}>Mis Habilidades</h3>
            </Grid2>
            <Grid2 container size={12} spacing={{ xs: 2, md: 10 }}>
              <Grid2 container spacing={0} size={{ xs: 12, md: 6 }}>
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/react.svg"
                  title="React JS"
                  subtitle=""
                  lore="Componentes, hooks, useContext, useReducer, Redux, Zustand, Material UI, Axios y consumo de APIs REST."
                  se={10}
                />
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/next_js.svg"
                  title="Next JS"
                  subtitle=""
                  lore="App Router, Server Components, SSR, ISR, API Routes, autenticación y despliegue en Vercel/Render."
                  se={10}
                />
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/Nest.js.svg"
                  title="Nest JS"
                  subtitle=""
                  lore="Módulos, providers, controladores, TypeORM, JWT, autenticación, microservicios CRUD y arquitectura escalable."
                  se={10}
                />
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/javascript.svg"
                  title="JavaScript / TypeScript"
                  subtitle=""
                  lore="ES6+, async/await, promesas, manipulación DOM, TypeScript con tipos estáticos y genéricos."
                  se={10}
                />
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/html.webp"
                  title="HTML5 / CSS3"
                  subtitle=""
                  lore="HTML semántico, CSS Flexbox, Grid, responsive design, Tailwind CSS y Material UI."
                  se={10}
                />
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/angular.svg"
                  title="Angular"
                  subtitle=""
                  lore="Angular v21, componentes standalone, signals, dependency injection, RxJS y routing."
                  se={10}
                />
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/astro.svg"
                  title="Astro"
                  subtitle=""
                  lore="Sistema de archivos, islands architecture, SSG y optimización de rendimiento."
                  se={10}
                />
              </Grid2>
              <Grid2 container spacing={0} size={{ xs: 12, md: 6 }}>
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/postgresql-icon.svg"
                  title="PostgreSQL"
                  subtitle=""
                  lore="Modelado de datos, relaciones, TypeORM, migraciones, consultas complejas y optimización."
                  se={10}
                />
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/mysql.svg"
                  title="MySQL"
                  subtitle=""
                  lore="Vistas, triggers, procedimientos almacenados y diseño de esquemas relacionales."
                  se={10}
                />
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/sql.svg"
                  title="SQL Server"
                  subtitle=""
                  lore="Administración, consultas complejas, backups, restauración y alta disponibilidad."
                  se={10}
                />
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/excel.svg"
                  title="Excel / Office"
                  subtitle=""
                  lore="Funciones avanzadas, BUSCARV, macros, tablas dinámicas, Power BI y Git/GitHub."
                  se={10}
                />
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/php.svg"
                  title="PHP"
                  subtitle=""
                  lore="PHP puro: formularios, sesiones, archivos, conexiones a MySQL y lógica procedural."
                  se={10}
                />
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/github.svg"
                  title="Git / GitHub"
                  subtitle=""
                  lore="Control de versiones, ramas, pull requests, GitHub Actions y flujos de trabajo colaborativos."
                  se={10}
                />
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </Grid2>
  );
}

export default page;
