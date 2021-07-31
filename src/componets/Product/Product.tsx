import React from "react";
import { Link } from "react-router-dom";
import { InlineIcon } from '@iconify/react';
import mapMarkerAlt from '@iconify/icons-fa-solid/map-marker-alt';
import bedIcon from '@iconify/icons-fa-solid/bed';
import toiletIcon from '@iconify/icons-fa-solid/toilet';
import { styles } from "./styles";
import {EThemeNames} from '../CustomButton/enums/ECustomButton'
import { productProps } from "./interface/IProduct";
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
            <span style={{fontSize: "12px", fontWeight: 500}}>{props.comuna}</span>
          </div>

          <div className="d-flex">
            <div>
              <InlineIcon icon={bedIcon} style={{fontSize: '11.999999046325684px'}} />
              <span style={{fontSize: "12px", fontWeight: 700, marginLeft: "10px", marginRight: "10px"}}>{props.bedRooms}</span>
            </div>

            <div>
              <InlineIcon icon={toiletIcon} style={{fontSize: '12px'}} />
              <span style={{fontSize: "12px", fontWeight: 700, marginLeft: "10px"}}>{props.bathRooms}</span>
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
    </div>
  );
}
