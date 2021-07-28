import React from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../CustomButton/CustomButton";
import {EThemeNames} from "../CustomButton/enums/ECustomButton";
import {styles} from './styles';

function ContactForm(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <div className="row">
            <div className="col-8" style={styles.containerForm}>
                <h1 style={styles.title}>Resuelve tus dudas</h1>
                <div className="row"  style={{margin:'10px'}}>
                    <div className="col-6">
                        <label htmlFor="name" style={styles.label}>Nombre</label>
                        <input type="text" className="form-control" {...register("name")}/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="lastName" style={styles.label}>Apellidos</label>
                        <input type="text" className="form-control" {...register("lastName")}/>
                    </div>
                </div>

                <div className="row"  style={{margin:'10px'}}>
                    <div className="col-6">
                        <label htmlFor="phone" style={styles.label}>Teléfono</label>
                        <input type="text" className="form-control" {...register("phone")}/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="email" style={styles.label}>Correo electrónico</label>
                        <input type="text" className="form-control" {...register("email")}/>
                    </div>
                </div>

                <div className="row"  style={{margin:'10px'}}>
                    <div className="col-12">
                        <label htmlFor="message" style={styles.label}>Mensaje</label>
                        <textarea className="form-control" {...register("message")}/>
                    </div>
                </div>

                <div className="row"  style={{margin:'10px'}}>
                    <div className="col-6" style={{margin:'auto'}}>
                        <CustomButton text="Enviar" theme={EThemeNames.Primary} onClick={handleSubmit(onSubmit)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
