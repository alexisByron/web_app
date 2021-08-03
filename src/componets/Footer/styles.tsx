import CSS from "csstype";
import { Colors } from "../../Theme";

const footer: CSS.Properties = {
  backgroundColor: Colors.black,
  color: Colors.text,
  textAlign: "center",
  position: "relative",
  height: "50px",
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
