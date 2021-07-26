import CSS from "csstype";

const Productcontainer: CSS.Properties = {
  display: "grid",
  gridTemplateColumns: "repeat(4, calc(25% - 22.5px))",
  gridColumnGap: "30px"
};
const ProductElement: CSS.Properties = {
  background: "#FFFFFF",
  border: "1px solid rgba(0, 0, 0, 0.06)",
  boxSizing: "border-box",
  borderRadius: "8px"
};
export const styles = {
  Productcontainer,
  ProductElement,
};
