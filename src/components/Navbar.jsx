"use client";
import {
  AppBar,
  Box,
  CssBaseline,
  Grid2,
  IconButton,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import nav from "../style/navbar.module.css";
import Image from "next/image";
import BotonesNav from "./BotonesNav";
import MenuIcon from "@mui/icons-material/Menu";
import SliderComponet from "./SliderComponet";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className={nav.navbar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 3, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Grid2
            container
            size={12}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-end" },
                mr: 1,
              }}
            >
              <Image alt="Logo" src="/img/logo.png" width={200} height={58} />
            </Box>
            <BotonesNav />
          </Grid2>
        </Toolbar>
      </AppBar>
      <SliderComponet
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </Box>
  );
}

export default Navbar;
