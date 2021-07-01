import React  from 'react';
import Product from '../../componets/Product/Product';
import Categories from '../../componets/Categories/Categories';
import {categoryAndProducts} from './productsDummy';
import {styles} from './styles';

function Products(props:any) {
  const categoty = props.match.params.categoty;
  const newArray = categoryAndProducts.find(element => element.category === categoty);
  return (
    <React.Fragment>
      <Categories />
       <div className="container-fluid row" style={styles.Productcontainer}>
        {newArray?.products.map(element=>{
          return(
          <div className="col-8 col-lg-3 col-md-6" key={element.idProducto} style={styles.ProductElement}>
              <Product id={element.idProducto} imagen={element.imagen} nombreProducto={element.nombreProducto}/>
          </div>
          )
        })}
      </div>
    </React.Fragment>
  );
}

export default Products;