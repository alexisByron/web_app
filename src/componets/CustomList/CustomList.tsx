import React from "react";
import { customListProps } from "./interface/ICustomList";
import { Product } from "../../componets/Product/Product";
import { PaginatedList } from "react-paginated-list";

export const CustomList = ({ list }: customListProps) => {
  return (
    <>
      <PaginatedList
        list={list}
        itemsPerPage={8}
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
            {list.map((item, id) => {
              return (
                <Product
                  key={id}
                  id={item.idApartment}
                  imagen={item.imagenPrincipal}
                  nombreProducto={item.title}
                  bathRooms={item.bathRoom}
                  bedRooms={item.bedRooms}
                  comuna={item.comuna}
                />
              );
            })}
          </div>
        )}
      />
    </>
  );
};
