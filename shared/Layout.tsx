import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
