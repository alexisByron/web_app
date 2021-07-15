import React from "react";
import { styles } from "./styles";

import CustomButton from '../CustomButton/CustomButton';
import {EThemeNames} from '../CustomButton/enums/ECustomButton'

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
                        <CustomButton text="Postulaciones" theme={EThemeNames.Secondary}/>
                    </li>
                    <li>
                        <CustomButton text="Acceso Residentes" theme={EThemeNames.Primary}/>
                    </li>
                </ul>
            </div>
        </div>
    );
}


export default NavBar;
