import React from "react";
import logo from "../../assests/img/logo.png";
import { styles } from "./styles";

function Header(){
    return (
      <div className="row justify-content-center" style={styles.header}>
        <h1  style={{alignSelf:'center'}}>Nombre</h1>
        <img style={{ height: "100%",position:'relative' }} src={logo} alt="" />
        <h1 style={{alignSelf:'center'}}>Negocio</h1>
      </div>
    );
}

export default Header;
