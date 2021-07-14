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
     
      <div className="container-fluid row" style={styles.Productcontainer}>
        {newArray?.products.map((element) => {
          return (
            <div
              className="col-12 col-md-6 col-lg-4 col-xl-2"
              key={element.idProducto}
              style={styles.ProductElement}
            >
              <Product
                id={element.idProducto}
                imagen={element.imagen}
                nombreProducto={element.nombreProducto}
              />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Products;
