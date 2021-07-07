import CSS from "csstype";
import { Colors } from "../../Theme";

const Product: CSS.Properties = {
  border: `1px solid ${Colors.background}`,
  height: "450px",
  boxShadow: `-17px 17px 21px -5px ${Colors.background}`,
};

const ProductImg: CSS.Properties = {
  height: "250px",
};

const CustomBtn: CSS.Properties = {
  backgroundColor: Colors.background,
  color: Colors.text,
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

export const styles = {
  Product,
  ProductImg,
  CustomBtn,
  ProductImgModal,
  ModalContent,
  containerImgModal,
  ModalDescription,
};
