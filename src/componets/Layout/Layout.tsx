import React, { useRef } from "react";
import NavBar from "../NavBar/NavBar"; "../../componets/NavBar/NavBar";
import Footer from "../../componets/Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";

function Layout(props: any) {
  const refContact = useRef(null);
  return (
    <React.Fragment>
      <NavBar />
      <div style={{ marginBottom: "auto" }}>
        {props.children}
      </div>
      <ContactForm />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
