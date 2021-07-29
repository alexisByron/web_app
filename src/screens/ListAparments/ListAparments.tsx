import React from "react";
import Product from "../../componets/Product/Product";
import Categories from "../../componets/Categories/Categories";
import { categoryAndProducts } from "./ListDummy";
import { styles } from "./styles";
import Steeps from "../../componets/Steeps/Steeps"; 
import ContactForm from "../../componets/ContactForm/ContactForm";
import CustomList from "../../componets/CustomList/CustomList";

function ListAparments(props: any) {
  const categoty = props.match.params.categoty;
  const newArray = categoryAndProducts.filter(
    (element) => element.comuna === categoty
  );

  return (
    <React.Fragment>
      <div style={{backgroundColor:'rgba(255, 99, 71, 0.4)',marginTop:'-30px',marginBottom:'20px'}}>
        <Categories />
      </div>
      <CustomList list={newArray}/>
      <Steeps />
      <ContactForm />
    </React.Fragment>
  );
}

export default ListAparments;
/*
 {newArray?.products.map((element) => {
          return (
            <Product
              key={element.idProducto}
              id={element.idProducto}
              imagen={element.imagen}
              nombreProducto={element.nombreProducto}
            />
          );
        })}
*/