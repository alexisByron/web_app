import CSS from "csstype";
import { Colors } from "../../Theme";

const Product: CSS.Properties = {
  background: "#FFFFFF",
  border: "1px solid rgba(0, 0, 0, 0.06)",
  boxSizing: "border-box",
  borderRadius: "8px",
};

const ProductImg: CSS.Properties = {
  width: "100%",
  height: "150px",
};

const CustomBtn: CSS.Properties = {
  color: Colors.text,
  width: "100%",
};

const bodyItem: CSS.Properties = {
  padding: "10px 15px 15px 15px",
};

const ModalContent: CSS.Properties = {
  marginLeft: "10px",
  marginRight: "10px",
};

const ProductImgModal: CSS.Properties = {
  width: "90%",
  height: "250px",
};

const containerImgModal: CSS.Properties = {
  margin: "auto",
};

const ModalDescription: CSS.Properties = {
  color: Colors.strongText,
  fontSize: "20px",
  textAlign: "left",
};

const productTitle: CSS.Properties = {
  fontWeight: 700,
  fontSize: "16px",
  color: "#22589D",
};

const contentIconsProduct: CSS.Properties = {
  color: "rgba(0,0,0, .36)",
};

export const styles = {
  Product,
  ProductImg,
  CustomBtn,
  ProductImgModal,
  ModalContent,
  containerImgModal,
  ModalDescription,
  bodyItem,
  productTitle,
  contentIconsProduct,
};
