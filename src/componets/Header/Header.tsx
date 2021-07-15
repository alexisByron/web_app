import React from "react";
import { styles } from "./styles";

function Header(){
    return (
      <div className="full-container d-flex align-items-center align-content-center" style={styles.header}>
        <div className="container-c">
          <h1  style={styles.headerText}>Arrienda fácil, rápido y seguro en todo Santiago.</h1>
        </div>
      </div>
    );
}

export default Header;
