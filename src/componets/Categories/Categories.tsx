import React from "react";
import { Link } from "react-router-dom";
import { styles } from "./styles";

function Categories()  {
    return (
      <div className="row justify-content-center">
        <h6 style={{ margin: 20 }}>
          <Link to="/ListAparment/Macul" style={styles.CustomFont}>
          Macul
          </Link>
        </h6>
        <h6 style={{ margin: 20 }}>
          <Link to="/ListAparment/Quilicura" style={styles.CustomFont}>
          Quilicura
          </Link>
        </h6>
        <h6 style={{ margin: 20 }}>
          <Link to="/ListAparment/Renca" style={styles.CustomFont}>
          Renca
          </Link>
        </h6>
      </div>
    );
}


export default Categories;
