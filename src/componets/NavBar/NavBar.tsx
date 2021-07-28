import React from "react";
import { styles } from "./styles";
import CustomButton from '../CustomButton/CustomButton';
import {EThemeNames} from '../CustomButton/enums/ECustomButton'
import { Link } from "react-router-dom";

function NavBar()  {
    return (
        <div className="full-container" style={styles.navContainer}>
            <div className="container-c d-flex align-content-between">
                <div className="col-6">
                <Link to="/Home">
                    Home
                </Link>
                </div>
                <ul className="col-6 d-flex align-items-center justify-content-between">
                    <li>
                    <Link to="/ListAparment/Quilicura">
                        Propiedades
                    </Link>
                    </li>
                    <li>
                        <a>Contacto</a>
                    </li>
                    <li>
                        <CustomButton
                        text="Postulaciones"
                        theme={EThemeNames.Secondary}
                        onClick={()=>console.log("click Postulaciones")}/>
                    </li>
                    <li>
                        <CustomButton
                        text="Acceso Residentes"
                        theme={EThemeNames.Primary}
                        onClick={()=>console.log("Acceso Residentes")}/>
                    </li>
                </ul>
            </div>
        </div>
    );
}


export default NavBar;
