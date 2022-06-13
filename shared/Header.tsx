import React from "react";
import { NavBar, HeaderMenu, MenuItem } from "../styles/components/header";
import Image from "next/image";
export const Header: React.FC<any> = () => {
  return (
    <NavBar>
      <div>
        <Image
          src={`${process.env.S3_BUCKET_URL}/logo-transparente.png`}
          alt="Educacion Logo"
          height="90px"
          width="200px"
        />
      </div>
      <HeaderMenu>
        <MenuItem>Editorial</MenuItem>
        <MenuItem>Noticias</MenuItem>
        <MenuItem>Opciones</MenuItem>
      </HeaderMenu>
      <div>
        <Image
          src={`${process.env.S3_BUCKET_URL}/grogu.png`}
          alt="Educacion Logo"
          height="90px"
          width="90px"
          className="profile-image"
          layout="fixed"
        />
      </div>
    </NavBar>
  );
};
