import React from "react";
import NavBar from "../NavBar/NavBar"; "../../componets/NavBar/NavBar";
import Header from "../../componets/Header/Header";
import Footer from "../../componets/Footer/Footer";

function Layout(props: any) {
  return (
    <React.Fragment>
      <NavBar />
      <div style={{ marginBottom: "auto" }}>
        {props.children}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
