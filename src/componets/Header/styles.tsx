import CSS from "csstype";
import fondoHeader from '../../assests/img/fondoHeader.jpeg';


const header: CSS.Properties = {
  height: "250px",
  left: 0,
  top: 0,
  right: 0,
  textAlign: "center",
  backgroundImage:`url(${fondoHeader})`,
  borderBottomLeftRadius:'40%',
  borderBottomRightRadius:'40%',
};

export const styles = {
  header,
};
