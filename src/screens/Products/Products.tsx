import React from "react";
import Product from "../../componets/Product/Product";
import Categories from "../../componets/Categories/Categories";
import { categoryAndProducts } from "./productsDummy";
import { styles } from "./styles";

function Products(props: any) {
  const categoty = props.match.params.categoty;
  const newArray = categoryAndProducts.find(
    (element) => element.category === categoty
  );
  return (
    <React.Fragment>
      <div style={{backgroundColor:'rgba(255, 99, 71, 0.4)',marginTop:'-30px',marginBottom:'20px'}}>
        <Categories />
      </div>
     
      <div className="container-c" style={styles.Productcontainer}>
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
      </div>
    </React.Fragment>
  );
}

export default Products;
