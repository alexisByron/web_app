import React from "react";
import { customListProps } from "./interface/ICustomList";
import { Product } from "../../componets/Product/Product";
import { PaginatedList } from "react-paginated-list";

export const CustomList = ({ list }: customListProps) => {
  const RenderList = () => {
    return list.map((element: any, id) => {
      return (
        <Product
          key={id}
          id={element.idApartment}
          imagen={element.imagenPrincipal}
          nombreProducto={element.title}
          bathRooms={element.bathRoom}
          bedRooms={element.bedRooms}
          comuna={element.comuna}
        />
      );
    });
  };

  return (
    <PaginatedList
      list={list}
      itemsPerPage={12}
      renderList={(list) => (
        <div
          className="container-c grid-items"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, calc(25% - 22.5px))",
            gridColumnGap: "30px",
            gridRowGap: "30px",
          }}
        >
          {RenderList()}
        </div>
      )}
    />
  );
};
