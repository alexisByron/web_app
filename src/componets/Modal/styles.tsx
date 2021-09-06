import CSS from "csstype";
import { Colors } from "../../Theme";

const container: CSS.Properties = {
  height: "300px",
  width: "300px",
  boxShadow: "-17px 17px 21px -5px rgba(255,170,204,0.83)",
};

const content: CSS.Properties = {
  height: "430px",
  width: "60%",
  margin: "auto",
  boxShadow: `-17px 17px 21px -5px ${Colors.background}`,
};

export const styles = {
  container,
  content,
};
