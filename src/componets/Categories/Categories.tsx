import React from "react";
import { Link } from "react-router-dom";
import { styles } from "./styles";

function Categories()  {
    return (
      <div className="row justify-content-center">
        <h6 style={{ margin: 20 }}>
          <Link to="/products/Tortas" style={styles.CustomFont}>
            Tortas
          </Link>
        </h6>
        <h6 style={{ margin: 20 }}>
          <Link to="/products/Alfajores" style={styles.CustomFont}>
            Alfajores
          </Link>
        </h6>
        <h6 style={{ margin: 20 }}>
          <Link to="/products/Matrimoios" style={styles.CustomFont}>
            Matrimoios
          </Link>
        </h6>
      </div>
    );
}


export default Categories;
