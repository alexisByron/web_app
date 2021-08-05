import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { styles } from "./styles";
import { CustomButton } from "../CustomButton/CustomButton";
import { EThemeNames } from "../CustomButton/enums/ECustomButton";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { CustomModal } from "../Modal/CustomModal";

function NavBar() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalPostulacionIsOpen, setModalPostulacionIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="full-container" style={styles.navContainer}>
      <div className="container-c d-flex align-content-between">
        <div className="col-6">
          <Link to="/Home">Home</Link>
        </div>
        <ul className="col-6 d-flex align-items-center justify-content-between">
          <li>
            <Link
              to="/ListAparment/all/1+/1+"
              style={{ fontSize: "14px", fontWeight: 500, color: "#18191F" }}
            >
              Propiedades
            </Link>
          </li>
          <li>
            <LinkScroll
              to="contactForm"
              spy={true}
              smooth={true}
              style={{ fontSize: "14px", fontWeight: 500, cursor: "pointer" }}
            >
              Contacto
            </LinkScroll>
          </li>
          <li style={{ width: "133px" }}>
            <CustomButton
              text="Postulaciones"
              theme={EThemeNames.Secondary}
              onClick={() => setModalPostulacionIsOpen(true)}
            />
          </li>
          <li style={{ width: "188px" }}>
            <CustomButton
              text="Acceso Residentes"
              theme={EThemeNames.Primary}
              onClick={() => setIsOpen(true)}
            />
          </li>
        </ul>
      </div>
      <CustomModal isOpen={modalIsOpen} setIsOpen={setIsOpen}>
        <div style={{ width: "230px" }}>
          <h3 style={{ textAlign: "center", fontSize: "18px" }}>
            Acceso Privado
          </h3>
          <h6
            style={{
              textAlign: "center",
              fontSize: "12px",
              color: "rgba(0,0,0, .40)",
            }}
          >
            Residentes - Corredores
          </h6>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              className="form-control"
              style={{ height: "48px", fontSize: "12px" }}
              {...register("rut")}
              placeholder="Rut"
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              className="form-control"
              style={{ height: "48px", fontSize: "12px" }}
              {...register("password")}
              placeholder="Contraseña"
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <CustomButton
              text="Acceder"
              theme={EThemeNames.Primary}
              onClick={handleSubmit(onSubmit)}
            />
          </div>
          <div style={{ textAlign: "center", fontSize: "12px" }}>
            <a href="#">Recuperar Contraseña</a>
          </div>
        </div>
      </CustomModal>

      <CustomModal
        isOpen={modalPostulacionIsOpen}
        setIsOpen={setModalPostulacionIsOpen}
      >
        <div style={{ width: "230px" }}>
          <h3 style={{ textAlign: "center", fontSize: "14px" }}>
            Consulta el estado de tu postulación
          </h3>
          <div className="mt-3" style={{ marginBottom: "15px" }}>
            <input
              type="text"
              className="form-control"
              style={{ height: "48px", fontSize: "12px" }}
              {...register("rut")}
              placeholder="Rut"
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <CustomButton
              text="Consultar"
              theme={EThemeNames.Primary}
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </CustomModal>
    </div>
  );
}

export default NavBar;
