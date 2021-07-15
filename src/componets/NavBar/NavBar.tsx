import React from "react";
import { Link } from "react-router-dom";
import { styles } from "./styles";

function NavBar()  {
    return (
        <div className="full-container" style={styles.navContainer}>
            <div className="container-c d-flex align-content-between">
                <div className="col-6">
                    <p>LogoEmpresa</p>
                </div>
                <ul className="col-6 d-flex align-items-center justify-content-between">
                    <li>
                        <a>Propiedades</a>
                    </li>
                    <li>
                        <a>Contacto</a>
                    </li>
                    <li>
                        <button style={styles.ButtonSecondaty}>Postulaciones</button>
                    </li>
                    <li>
                        <button style={styles.ButtonPrimary}>Acceso Residentes</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}


export default NavBar;
