import React, { useEffect } from "react";
import { categoryAndProducts } from "../../ListDummy";
import { styles } from "./styles";
import Steeps from "../../componets/Steeps/Steeps";
import { CustomList } from "../../componets/CustomList/CustomList";
import { CustomButton } from "../../componets/CustomButton/CustomButton";
import { EThemeNames } from "../../componets/CustomButton/enums/ECustomButton";
import { CustomModal } from "../../componets/Modal/CustomModal";
import { Filter } from "../../componets/Filter/Filter";
import { listProps } from "./interface/IListAparments";

export const ListAparments = ({
  match: {
    params: { bathrooms, rooms, comuna },
  },
}: listProps) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  /* amount of rooms */
  const [cantRooms, setCantRooms] = React.useState(rooms);
  /* amount of bathrooms */
  const [cantBathRooms, setCantBathRooms] = React.useState(bathrooms);
  /* location */
  const [comunaFiltered, setComuna] = React.useState(comuna);
  /* list aparments it need be a hook to do a render when change */
  const [list, setList] = React.useState(categoryAndProducts);
  /* list aparments result after filtered*/
  const FilterAction = () => {
    let newArray: any = categoryAndProducts;

    if (comunaFiltered !== "all") {
      newArray = newArray.filter((element: any) =>
        comunaFiltered.split("-").includes(element.comuna)
      );
    }

    if (cantBathRooms != "1+") {
      newArray = newArray.filter(
        (element: any) => element.bathRoom === parseInt(cantBathRooms)
      );
    }

    if (cantRooms != "1+") {
      newArray = newArray.filter(
        (element: any) => element.bedRooms === parseInt(cantRooms)
      );
    }

    setList(newArray);
    setIsOpen(false);
  };

  useEffect(() => {
    FilterAction();
  }, []);

  /* Function to render aparment list */
  const listRender = () => {
    return list.length > 0 ? (
      <CustomList list={list} />
    ) : (
      <h1>no hay registros</h1>
    );
  };

  return (
    <>
      <div className="container-c">
        <div className="btn-filter mt-4" style={{ width: "100px" }}>
          <CustomButton
            text="Filtros"
            theme={EThemeNames.Primary}
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <div style={{ marginTop: "20px", marginBottom: "100px" }}>
        {listRender()}
      </div>
      <Steeps />
      <CustomModal isOpen={modalIsOpen} setIsOpen={setIsOpen}>
        <Filter
          comunas={comunaFiltered}
          setComuna={setComuna}
          rooms={cantRooms}
          setCantRoms={setCantRooms}
          bathrooms={cantBathRooms}
          setCantBathRooms={setCantBathRooms}
          submit={FilterAction}
        />
      </CustomModal>
    </>
  );
};

export default ListAparments;
