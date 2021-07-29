import React from "react";
import { Link } from "react-router-dom";
import { InlineIcon } from '@iconify/react';
import mapMarkerAlt from '@iconify/icons-fa-solid/map-marker-alt';
import bedIcon from '@iconify/icons-fa-solid/bed';
import toiletIcon from '@iconify/icons-fa-solid/toilet';
import { styles } from "./styles";
import {EThemeNames} from '../CustomButton/enums/ECustomButton'
import { productProps } from "./interface/IProduct";
import CustomModal from "../Modal/CustomModal";
import CustomButton from "../CustomButton/CustomButton";

export default function Product(props: productProps) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div style={styles.Product}>
      <img
        src={props.imagen}
        className="card-img-top"
        alt="..."
        style={styles.ProductImg}
        onClick={() => {
          openModal();
        }}
      />
      <div className="text-center" style={styles.bodyItem}>
        <div className="d-flex justify-content-between" style={styles.contentIconsProduct}>
          <div>
            <InlineIcon icon={mapMarkerAlt} style={{fontSize: '12px', marginRight: "5px"}} />
            <span style={{fontSize: "12px", fontWeight: 500}}>Macul</span>
          </div>

          <div className="d-flex">
            <div>
              <InlineIcon icon={bedIcon} style={{fontSize: '11.999999046325684px'}} />
              <span style={{fontSize: "12px", fontWeight: 700, marginLeft: "10px", marginRight: "10px"}}>2</span>
            </div>

            <div>
              <InlineIcon icon={toiletIcon} style={{fontSize: '12px'}} />
              <span style={{fontSize: "12px", fontWeight: 700, marginLeft: "10px"}}>1</span>
            </div>
          </div>

        </div>
        <h5 className="text-left" style={styles.productTitle}>{props.nombreProducto}</h5>
        <div>
          <Link to="/AparmentDetail" style={styles.CustomBtn}>
            <CustomButton text="Ver Detalles" theme={EThemeNames.Primary} onClick={() => console.log('a')} />
          </Link>
        </div>
       
      </div>


      <CustomModal isOpen={modalIsOpen} setIsOpen={setIsOpen}>
        <div className="row" style={styles.ModalContent}>
          <div className="col-12 col-md-8" style={styles.containerImgModal}>
            <img src={props.imagen} alt="..." style={styles.ProductImgModal} />
          </div>
          <div className="col-12 col-md-4" style={{ margin: "auto" }}>
            <p style={styles.ModalDescription}>
              Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles,
              pero la mayoría sufrió alteraciones en alguna manera, ya sea
              porque se le agregó humor, o palabras aleatorias que no parecen ni
              un poco creíbles.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="card-body text-center">
            <Link to="/ToShop" className="btn" style={styles.CustomBtn}>
              Comentarios{" "}
            </Link>
          </div>
          <div className="card-body text-center">
            <Link to="/ToShop" className="btn" style={styles.CustomBtn}>
              Agregar a carro
            </Link>
          </div>
        </div>
      </CustomModal>
    </div>
  );
}
