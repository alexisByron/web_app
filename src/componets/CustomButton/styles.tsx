import CSS from "csstype";
import { Colors } from "../../Theme";


const ButtonSecondary: CSS.Properties = {
    borderRadius: '6px',
    backgroundColor: Colors.blueSecondaty,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '14px',
    color: Colors.bluePrimary,
    height:'40px',
    width:'100%',
    borderWidth:0,
};

const ButtonPrimary: CSS.Properties = {
    borderRadius: '6px',
    backgroundColor: Colors.bluePrimary,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '14px',
    color: Colors.white,
    height:'40px',
    width:'100%',
    borderWidth:0,
};

export const styles = {
    ButtonSecondary,
    ButtonPrimary
};
