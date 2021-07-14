import React from "react";
import { styles } from "./styles";

function Header(){
    return (
      <div className="row justify-content-center" style={styles.header}>
        <h1  style={styles.headerText}>Arrienda fácil, rápido y seguro en todo Santiago.</h1>
      </div>
    );
}

export default Header;
