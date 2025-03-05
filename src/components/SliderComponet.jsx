import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import nav from "../style/navbar.module.css";
import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function SliderComponet({ mobileOpen, handleDrawerToggle }) {
  const drawerWidth = 240;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          py: 1.25,
          justifyContent: { xs: "center", sm: "flex-end" },
          mr: 1,
        }}
      >
        <Image alt="Logo" src="/img/logo.png" width={200} height={58} />
      </Box>
      <Divider
        sx={{
          border: "3px solid white",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
        }}
      />
      <List>
        <ListItem disablePadding sx={{ my: 1.25 }}>
          <ListItemButton sx={{ textAlign: "center" }} className={nav.lista}>
            <ListItemText sx={{ fontWeight: "650" }}>
              <Link href="/rg/about" className={nav.boton}>
                ACERCA DE MI
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ my: 1.25 }}>
          <ListItemButton sx={{ textAlign: "center" }} className={nav.lista}>
            <ListItemText sx={{ fontWeight: "650" }}>
              <Link href="/rg/resumen" className={nav.boton}>
                RESUMEN
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ my: 1.25 }}>
          <ListItemButton sx={{ textAlign: "center" }} className={nav.lista}>
            <ListItemText sx={{ fontWeight: "650" }}>
              <Link href="/rg/portafolio" className={nav.boton}>
                PORTAFOLIO
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ my: 1.25 }}>
          <ListItemButton sx={{ textAlign: "center" }} className={nav.lista}>
            <ListItemText sx={{ fontWeight: "650" }}>
              <Link href="/rg/contacto" className={nav.boton}>
                CONTACTO
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <nav>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { sm: "block", md: "none" },
          "& .MuiDrawer-paper": {
            backgroundColor: "black",
            borderRight: "5px solid white",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
}

SliderComponet.propTypes = {
  mobileOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default SliderComponet;
