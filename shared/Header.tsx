import React from "react";
import {
  NavBar,
  HeaderMenu,
  MenuItem,
  Logo,
} from "../styles/components/header";

export const Header: React.FC<any> = () => {
  return (
    <NavBar>
      <Logo />
      <HeaderMenu>
        <MenuItem>Editorial</MenuItem>
        <MenuItem>Noticias</MenuItem>
        <MenuItem>Opciones</MenuItem>
      </HeaderMenu>
    </NavBar>
  );
};
