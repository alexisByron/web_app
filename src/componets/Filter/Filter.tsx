import React from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import { EThemeNames } from "../CustomButton/enums/ECustomButton";
import { styles } from "./styles";
import arrowSelect from "../../assests/img/arrow-select.svg";
import { ComunasFiltered } from "../ComunasFiltered/ComunasFiltered";
import { FilterProps } from "./interface/IFilter";

export const Filter = ({
  comunas,
  rooms,
  setCantRoms,
  bathrooms,
  setCantBathRooms,
  submit,
  setComuna,
}: FilterProps) => {
  const comunasArray = comunas.split("-");
  const addComunaArray = (e: any) => {
    if (!comunasArray.includes(e.target.value)) {
      setComuna(`${comunasArray.join("-")}-${e.target.value}`);
    }
  };

  const ComunasFilteredComponent = () => {
    if (comunas.toLowerCase() != "all"){
      return <ComunasFiltered comunas={comunasArray} setComuna={setComuna} />
    }else{
      return <div className="mt-3"></div>
    }
  };

  const changeQuantity = (type: string, num: string) => {
    const cantidadActual = type === "rooms" ? rooms : bathrooms;
    if (cantidadActual !== num) {
      type === "rooms" ? setCantRoms(num) : setCantBathRooms(num);
    } else {
      type === "rooms" ? setCantRoms("1+") : setCantBathRooms("1+");
    }
  };

  const changeQuantityStyle = (type: string, num: string) => {
    const cantidadActual = type === "rooms" ? rooms : bathrooms;
    return cantidadActual !== num
      ? styles.itemQuantity
      : styles.itemQuantityActive;
  };

  

  return (
    <div style={{ width: "450px" }}>
      <div
        className="head-filter mb-4"
        style={{
          textAlign: "center",
          fontSize: "16px",
          fontWeight: 500,
          width: "318px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        Aplica filtros para encontrar la propiedad que buscas
      </div>
      <div className="row-filter d-flex justify-content-between align-items-center w-100 pb-1">
        <div className="title" style={{ fontWeight: 500, fontSize: "16px" }}>
          Comunas
        </div>
        <div className="quantity">
          <select
            name="comunas"
            id="comunas"
            className="select-filter"
            style={{ background: 'url("' + arrowSelect + '") no-repeat 98%' }}
            value={comunas}
            onChange={addComunaArray}
          >
            <option value="all">Buscar comuna...</option>
            <option value="Las Condes">Las Condes</option>
            <option value="Providencia">Providencia</option>
            <option value="Macul">Macul</option>
            <option value="Quilicura">Quilicura</option>
          </select>
        </div>
      </div>
      <ComunasFilteredComponent />
      <div
        className="divider"
        style={{ borderBottom: "1px solid rgba(0,0,0, .22)", width: "100%" }}
      ></div>
      <div className="row-filter d-flex justify-content-between align-items-center w-100 py-3">
        <div className="title" style={{ fontWeight: 500, fontSize: "16px" }}>
          Habitaciones
        </div>
        <div
          className="quantity"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridColumnGap: "10px",
          }}
        >
          <a
            href="#"
            className="item-quantity"
            onClick={() => changeQuantity("rooms", "1")}
            style={changeQuantityStyle("rooms", "1")}
          >
            1
          </a>
          <a
            href="#"
            className="item-quantity"
            onClick={() => changeQuantity("rooms", "2")}
            style={changeQuantityStyle("rooms", "2")}
          >
            2
          </a>
          <a
            href="#"
            className="item-quantity"
            onClick={() => changeQuantity("rooms", "3")}
            style={changeQuantityStyle("rooms", "3")}
          >
            3
          </a>
          <a
            href="#"
            className="item-quantity"
            onClick={() => changeQuantity("rooms", "4")}
            style={changeQuantityStyle("rooms", "4")}
          >
            4
          </a>
          <a
            href="#"
            className="item-quantity"
            onClick={() => changeQuantity("rooms", "5+")}
            style={changeQuantityStyle("rooms", "5+")}
          >
            5+
          </a>
        </div>
      </div>
      <div
        className="divider"
        style={{ borderBottom: "1px solid rgba(0,0,0, .22)", width: "100%" }}
      ></div>
      <div className="row-filter d-flex justify-content-between align-items-center w-100 py-3">
        <div className="title" style={{ fontWeight: 500, fontSize: "16px" }}>
          Baños
        </div>
        <div
          className="quantity"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridColumnGap: "10px",
          }}
        >
          <a
            href="#"
            className="item-quantity"
            onClick={() => changeQuantity("bathrooms", "1")}
            style={changeQuantityStyle("bathrooms", "1")}
          >
            1
          </a>
          <a
            href="#"
            className="item-quantity"
            onClick={() => changeQuantity("bathrooms", "2")}
            style={changeQuantityStyle("bathrooms", "2")}
          >
            2
          </a>
          <a
            href="#"
            className="item-quantity"
            onClick={() => changeQuantity("bathrooms", "3")}
            style={changeQuantityStyle("bathrooms", "3")}
          >
            3
          </a>
          <a
            href="#"
            className="item-quantity"
            onClick={() => changeQuantity("bathrooms", "4")}
            style={changeQuantityStyle("bathrooms", "4")}
          >
            4
          </a>
          <a
            href="#"
            className="item-quantity"
            onClick={() => changeQuantity("bathrooms", "5+")}
            style={changeQuantityStyle("bathrooms", "5+")}
          >
            5+
          </a>
        </div>
      </div>

      <div
        className="content-button-filter mt-4"
        style={{ width: "100px", marginLeft: "auto" }}
      >
        <CustomButton
          text="Aplicar"
          theme={EThemeNames.Primary}
          onClick={() => submit()}
        />
      </div>
    </div>
  );
};
