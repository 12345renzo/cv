import Main from "@/components/Main";
import Port from "@/components/Port";
import por from "../../../style/portafolio.module.css";
import { Container, Grid2 } from "@mui/material";
import proyecto from "@/data/proyecto";

function Porpage() {
  return (
    <Grid2 size={12} sx={{ backgroundColor: "#111", minHeight:"100vh"}}>
      <Main subtitle="Mostrar algunos de mis Trabajos" title="Portafolio" />
      <Container maxWidth="xl">
        <Grid2
          container
          size={12}
          spacing={2}
          sx={{
            padding:"0 0 35px 0"
          }}
        >
          {proyecto.map((pro) => (
            <Port
              key={pro.lik}
              ruta={pro.ruta}
              titu={pro.titu}
              lore={pro.lore}
              lik={pro.lik}
            />
          ))}
        </Grid2>
      </Container>
    </Grid2>
  );
}

export default Porpage;
