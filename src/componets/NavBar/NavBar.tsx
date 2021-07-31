import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { styles } from "./styles";
import CustomButton from '../CustomButton/CustomButton';
import {EThemeNames} from '../CustomButton/enums/ECustomButton'
import { Link } from "react-router-dom";
import CustomModal from "../Modal/CustomModal";

function NavBar()  {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

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
                    <Link to="/ListAparment/all/1+/1+">
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
                        onClick={()=>setIsOpen(true)}/>
                    </li>
                </ul>
            </div>
            <CustomModal isOpen={modalIsOpen} setIsOpen={setIsOpen}>
                <h3 style={{textAlign:'center'}}>Acceso Privado</h3>
                <h6 style={{textAlign:'center'}}>Residentes - Corredores</h6>
                <div style={{marginBottom:'20px'}}>
                    <input type="text" className="form-control" style={{height:'48px'}} {...register("rut")} placeholder="Rut"/>
                </div>
                <div style={{marginBottom:'20px'}}>
                    <input type="text" className="form-control" style={{height:'48px'}} {...register("password")} placeholder="Contraseña"/>
                </div>
                <div style={{marginBottom:'10px'}}>
                    <CustomButton
                        text="Acceder"
                        theme={EThemeNames.Primary}
                        onClick={handleSubmit(onSubmit)}
                    />
                </div>
                <div style={{textAlign:'center'}}>
                    <a href="#" >Recuperar Contraseña</a>
                </div>
               
            </CustomModal>
        </div>
    );
}


export default NavBar;
