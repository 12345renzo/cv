import { Grid2 } from "@mui/material";
import React from "react";
import por from "../style/portafolio.module.css";
import Link from "next/link";

function Port({ ruta, titu, lore, lik }) {
  return (
    <Grid2
      size={{ xs: 12, sm: 6, md: 4 }}
      sx={{ position: "relative" }}
    >
      <Link href={lik} target="_blank">
        <Grid2 className={por.tod}>
          <Grid2 className={por.cont}>
            <h4 className={por.titu}>{titu}</h4>
            <p className={por.lor}>{lore}</p>
          </Grid2>
          <img alt="stipe" src={ruta} className={por.im} />
        </Grid2>
      </Link>
    </Grid2>
  );
}

export default Port;
