import React from "react";
import logo from "../../assests/img/logo.jpeg";
import { styles } from "./styles";

class Header extends React.Component {
  render() {
    return (
      <div className="row justify-content-center" style={styles.header}>
        <img style={{ height: "100%" }} src={logo} alt="" />
      </div>
    );
  }
}

export default Header;
