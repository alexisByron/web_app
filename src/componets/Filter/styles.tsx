import CSS from "csstype";

const itemQuantity: CSS.Properties = {
  background: "#BFD0E6",
  width: "30px",
  height: "30px",
  lineHeight: "30px",
  fontSize: "16px",
  textAlign: "center",
  borderRadius: "5px",
  border: "1px solid #3268AE",
  color: "#3268AE",
  fontWeight: 500,
};

const itemQuantityActive: CSS.Properties = {
  background: "#3268AE",
  color: "#fff",
  width: "30px",
  height: "30px",
  lineHeight: "30px",
  fontSize: "16px",
  textAlign: "center",
  borderRadius: "5px",
  border: "1px solid #3268AE",
  fontWeight: 500,
};

export const styles = {
  itemQuantity,
  itemQuantityActive,
};
