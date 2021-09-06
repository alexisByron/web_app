import CSS from "csstype";
import { Colors } from "../../Theme";

const customContainer: CSS.Properties = {
  display: "grid",
  gridColumnGap: "15px",
  backgroundColor: "white",
  boxShadow: "-17px 17px 21px -5px #BABABA",
  borderRadius: "8px",
  height: "76px",
  border: "1px solid rgba(41, 41, 42, 0.09)",
  maxWidth: "800px",
  width: "95%",
  alignItems: "center",
  paddingRight: "15px",
  paddingLeft: "15px"
};

const customsColum: CSS.Properties = {
  borderRight: "1px solid rgba(0, 0, 0, 0.13)",
  paddingRight: '10px'
};

const bathroomColum: CSS.Properties = {
  width: "100%",
  borderRight: "1px solid rgba(0, 0, 0, 0.13)",
  paddingRight: '10px'
};

const searchButtonColum: CSS.Properties = {
  width: "100px",
  margin: "auto",
};

const CustomFont: CSS.Properties = {
  color: Colors.strongText,
};

const icon: CSS.Properties = {
  fontSize: "18px",
  marginRight: "5px",
  color: "#3268AE",
};

const customRow: CSS.Properties = {
  display: "flex",
  justifyContent: "space-between",
};

const customCollapsableActivator: CSS.Properties = {
  width: "100%",
  display: "flex",
  justifyContent: "inherit",
};

const ContainerNumbers: CSS.Properties = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridColumnGap: "10px",
  margin: "10px",
};

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
  CustomFont,
  itemQuantity,
  itemQuantityActive,
  customContainer,
  customsColum,
  bathroomColum,
  searchButtonColum,
  icon,
  customRow,
  customCollapsableActivator,
  ContainerNumbers,
};
