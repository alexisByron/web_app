import CSS from "csstype";
import {Colors} from "../../Theme";

const footer: CSS.Properties = {
  backgroundColor: Colors.background,
  color: Colors.text,
  textAlign: "center",
  padding: "30px 30px",
  position: "relative",
  height: "250px",
};

const footerContainer: CSS.Properties = {};

const ul: CSS.Properties = {
  listStyleType: "none",
};

export const styles = {
  footer,
  ul,
  footerContainer,
};
