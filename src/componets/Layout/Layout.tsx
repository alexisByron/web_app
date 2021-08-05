import React, { useRef } from "react";
import { layoutProps } from "./interface/ILayout";
import NavBar from "../NavBar/NavBar";
("../../componets/NavBar/NavBar");
import Footer from "../../componets/Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";

export const Layout = ({ children }: layoutProps) => {
  const refContact = useRef(null);
  return (
    <React.Fragment>
      <NavBar />
      <div style={{ marginBottom: "auto" }}>{children}</div>
      <ContactForm />
      <Footer />
    </React.Fragment>
  );
};
