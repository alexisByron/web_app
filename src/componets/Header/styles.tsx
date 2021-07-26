import CSS from "csstype";
import fondoHeader from '../../assests/img/header.png';
import {Colors} from './../../Theme'

const header: CSS.Properties = {
  height: "400px",
  width:'100%',
  backgroundRepeat: 'no-repeat',
  textAlign: "center",
  backgroundImage:`url(${fondoHeader})`,
  alignItems: 'center',
  backgroundPosition:'right'
};

const headerText: CSS.Properties = {
  fontStyle: 'normal',
  fontWeight: 800,
  fontSize: '72px',
  lineHeight: '98px',
  textAlign: 'center',
  color:Colors.black,
  padding:'20px'
};

export const styles = {
  header,
  headerText
};
