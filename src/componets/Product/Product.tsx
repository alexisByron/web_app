import React from "react";
import { Link } from "react-router-dom";
import { InlineIcon } from "@iconify/react";
import mapMarkerAlt from "@iconify/icons-fa-solid/map-marker-alt";
import bedIcon from "@iconify/icons-fa-solid/bed";
import toiletIcon from "@iconify/icons-fa-solid/toilet";
import { styles } from "./styles";
import { EThemeNames } from "../CustomButton/enums/ECustomButton";
import { productProps } from "./interface/IProduct";
import { CustomButton } from "../CustomButton/CustomButton";

export const Product = ({
  imagen,
  nombreProducto,
  id,
  bedRooms,
  bathRooms,
  comuna,
}: productProps) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="product-item" style={styles.Product}>
      <div className="product-img" style={{backgroundImage: `url(${imagen})`}}></div>
      <div className="text-center product-info" style={styles.bodyItem}>
        <div
          className="d-flex justify-content-between"
          style={styles.contentIconsProduct}
        >
          <div>
            <InlineIcon
              icon={mapMarkerAlt}
              style={{ fontSize: "12px", marginRight: "5px" }}
            />
            <span style={{ fontSize: "12px", fontWeight: 500 }}>
              {comuna}
            </span>
          </div>

          <div className="d-flex">
            <div>
              <InlineIcon
                icon={bedIcon}
                style={{ fontSize: "11.999999046325684px" }}
              />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                {bedRooms}
              </span>
            </div>

            <div>
              <InlineIcon icon={toiletIcon} style={{ fontSize: "12px" }} />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  marginLeft: "10px",
                }}
              >
                {bathRooms}
              </span>
            </div>
          </div>
        </div>
        <h5 className="text-left" style={styles.productTitle}>
          {nombreProducto}
        </h5>
        <div>
          <Link to={`/AparmentDetail/${id}`} style={styles.CustomBtn}>
            <CustomButton
              text="Ver Detalles"
              theme={EThemeNames.Primary}
              onClick={() => null}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
