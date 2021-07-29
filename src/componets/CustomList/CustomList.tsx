
import Product from "../../componets/Product/Product";
import React from "react";
import {PaginatedList} from 'react-paginated-list';
import productImage from '../../assests/img/foto-product.jpg'

function CustomList(props:any){
    return (
        <PaginatedList
        list={props.list}
        itemsPerPage={5}
        renderList={(list) => (
            <div className="container-c" style={{ display: "grid",
            gridTemplateColumns: "repeat(4, calc(25% - 22.5px))",
            gridColumnGap: "30px",
            gridRowGap: "30px"}}>
            {list.map((element:any,id) => {
                return (
                    <Product
                    key={id}
                    id={element.idApartment}
                    imagen={element.imagenPrincipal}
                    nombreProducto={element.title}
                    />
                );
            })}
            </div>
        )}
    />
      );
}

export default CustomList;