import React from "react";
import { Link } from "react-router-dom";
import { styles } from "./styles";

function NavBar()  {
    return (
      <div className="row justify-content-center" style={styles.navContainer}>
        <div className="col-6" style={{textAlign:'center', alignItems: 'center',}}>
            <p className="text-center">LogoEmpresa</p>
        </div>
        <div className="col-6 row">
            <div className="col-3" style={{textAlign:'center', alignItems: 'center',}}>
                <p>Propiedades</p>
            </div>
            <div className="col-3" style={{textAlign:'center', alignItems: 'center',}}>
                <p>Contacto</p>
            </div>
            <div className="col-3">
                <button style={styles.ButtonSecondaty}>Postulaciones</button>
            </div>
            <div className="col-3">
                <button style={styles.ButtonPrimary}>Acceso Residentes</button>
            </div>
        </div>
      </div>
    );
}


export default NavBar;
