import Main from "@/components/Main";
import React from "react";
import resu from "../../../style/resumen.module.css";
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
                  subtitle="SENATI / 2020-2022"
                  lore="Formación técnica en análisis, diseño, desarrollo y
                      mantenimiento de aplicaciones de software. Adquirí
                      conocimientos en lenguajes de programación, bases de
                      datos, desarrollo web y móvil, así como en metodologías
                      ágiles para la gestión de proyectos. Capacitado para crear
                      soluciones tecnológicas eficientes y adaptables a las
                      necesidades del mercado."
                  se={11}
                />
                <Cards
                  dispe="block"
                  img="none"
                  ruta=""
                  title="Ingeniera Informatica"
                  subtitle="Univerdad Nacional Jose Faustino Sanchez Carrion /
                      2022-Presente"
                  lore="Formación técnica en desarrollo de software, incluyendo
                      análisis, diseño y mantenimiento de aplicaciones.
                      Conocimientos en programación, bases de datos, desarrollo
                      web y móvil, y metodologías ágiles. Capaz de crear
                      soluciones tecnológicas eficientes y adaptadas al mercado."
                  se={11}
                />
                <Cards
                  dispe="block"
                  img="none"
                  ruta=""
                  title="SQL Server Administrator de Basico a Avansado"
                  subtitle="CEPS-UNI / 2024-Presente"
                  lore="Formación integral en administración de bases de datos con
                      SQL Server, abarcando desde los fundamentos hasta técnicas
                      avanzadas. Aprendí a gestionar, optimizar y asegurar bases
                      de datos, además de realizar tareas como la creación de
                      consultas complejas, backups, restauración, y
                      configuración de alta disponibilidad."
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
                  title="Practicante de Desarrollo de Software"
                  subtitle="Vidrios y Aluminios Universal / Julio 2022 - Diciembre
                      2022"
                  lore="Desarrollé una aplicación web personalizada para optimizar
                      el manejo de inventario en una vidriería, utilizando HTML,
                      CSS, JavaScript, MySQL, Bootstrap y PHP. Mejoré la
                      eficiencia y precisión del sistema, reduciendo
                      significativamente el tiempo y esfuerzo en la gestión de
                      inventarios."
                  se={11}
                />
                <Cards
                  dispe="block"
                  img="none"
                  ruta=""
                  title="Practicante de Programacion y Soporte Tecnico"
                  subtitle="Municipalidad Provincial de Huaura / Enero 2024 - Abril
                      2024"
                  lore="Desarrollé una aplicación de escritorio para registrar
                      equipos malogrados en el área de soporte técnico. Utilicé
                      tecnologías como Java, JPA, MySQL y JasperReport,
                      siguiendo el patrón de diseño MVC."
                  se={11}
                />
                <Cards
                  dispe="block"
                  img="none"
                  ruta=""
                  title="Practicante de Desarrollo de Software"
                  subtitle="Data GIS / Enero 2024 - Abril 2024"
                  lore="Fui responsable de la migración de aproximadamente 4 TB de
                      datos entre dos cuentas de OneDrive. A lo largo del
                      proceso, realicé un inventario detallado diario para
                      registrar la cantidad exacta de archivos transferidos y
                      asegurar la integridad de los datos. Implementé un plan de
                      migración meticuloso para minimizar el riesgo de pérdida
                      de datos y optimizar el rendimiento de la transferencia."
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
                  lore="Tiengo conocimientos básicos en React, incluyendo la
                      creación de componentes, manejo de estados y props, y uso
                      de librerías como Material UI y Axios para integrar APIs y
                      estilizar interfaces."
                  se={10}
                />
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/next_js.svg"
                  title="Next JS"
                  subtitle=""
                  lore="Tiengo conocimientos básicos, incluyendo el uso de
                      enrutamiento, páginas estáticas y dinámicas, y renderizado
                      del lado del servidor."
                  se={10}
                />
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/javascript.svg"
                  title="JavaScript"
                  subtitle=""
                  lore="Manejo conceptos básicos como funciones, manipulaciones
                      DOM, y manejo de eventos para crear interactividad en
                      aplicaciones web."
                  se={10}
                />
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/mysql.svg"
                  title="MYSQL"
                  subtitle=""
                  lore="Tengo conocimientos básicos en MySQL, incluyendo la
                      creación y gestión de vistas para simplificar consultas
                      complejas, el diseño de triggers para automatizar tareas
                      en la base de datos, y la escritura de procedimientos
                      almacenados para encapsular lógica de negocio y mejorar el
                      rendimiento de las consultas."
                  se={10}
                />
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/excel.svg"
                  title="Excel"
                  subtitle=""
                  lore="Tengo conocimientos en Excel, manejando operaciones
                      básicas como sumar y restar, además de usar funciones como
                      BUSCARV y IF. Organizo datos en tablas, aplico filtros y
                      gráficos. A nivel avanzado, utilizo macros y tablas
                      dinámicas para gestionar grandes volúmenes de información."
                  se={10}
                />
              </Grid2>
              <Grid2 container spacing={0} size={{ xs: 12, md: 6 }}>
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/Nest.js.svg"
                  title="Nest JS"
                  subtitle=""
                  lore="Tengo conocimientos en NestJS, utilizando TypeORM para la gestión de bases de datos y la creación de microservicios CRUD"
                  se={10}
                />
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/html.png"
                  title="HTML / CSS"
                  subtitle=""
                  lore="Tengo conocimientos básicos en HTML y CSS, lo que me
                      permite estructurar páginas web y aplicar estilos para
                      mejorar su presentación, incluyendo diseño responsivo y
                      personalización de layouts."
                  se={10}
                />
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/sql.svg"
                  title="SQL Server"
                  subtitle=""
                  lore="Tengo conocimientos básicos en SQL, lo que me permite
                      crear y gestionar vistas para simplificar consultas
                      complejas, diseñar triggers para automatizar acciones en
                      la base de datos, y escribir procedimientos almacenados
                      para encapsular lógica de negocio y optimizar el
                      rendimiento de las consultas."
                  se={10}
                />
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/postgresql-icon.svg"
                  title="PostgreSQL"
                  subtitle=""
                  lore="Tengo conocimientos básicos en PostgreSQL, incluyendo la
                      creación y gestión de vistas para simplificar consultas
                      complejas, el diseño de triggers para automatizar acciones
                      en la base de datos, y la escritura de procedimientos
                      almacenados para encapsular lógica de negocio y optimizar
                      el rendimiento de las consultas."
                  se={10}
                />
                <Cards
                  dispe="none"
                  img="flex"
                  ruta="/office.svg"
                  title="Microsoft Office"
                  subtitle=""
                  lore="Tengo conocimientos básicos en Word y PowerPoint,
                      manejando la creación y formato de documentos,
                      presentaciones con diseños sencillos, y aplicando
                      funciones básicas como insertar imágenes, tablas y efectos
                      de transición."
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
