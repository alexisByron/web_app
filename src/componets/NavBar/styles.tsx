import CSS from "csstype";
import { Colors } from "../../Theme";

const ButtonPrimary: CSS.Properties = {
    borderRadius: '6px',
    backgroundColor: Colors.bluePrimary,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '14px',
    color: Colors.white,
    height:'40px',
    width:'100%'
};

const ButtonSecondaty: CSS.Properties = {
    borderRadius: '6px',
    backgroundColor: Colors.blueSecondaty,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '14px',
    color: Colors.bluePrimary,
    height:'40px',
    width:'100%'
};

const navContainer: CSS.Properties = {
    boxShadow: '0px 1px 13px rgba(0, 0, 0, 0.1)',
    padding:'10px'
}

export const styles = {
  ButtonPrimary,
  ButtonSecondaty,
  navContainer
};
