import CSS from "csstype";
import {Colors} from "../../Theme";

const containerForm: CSS.Properties = {
    margin:'auto',
    marginBottom:'50px'
};

const title: CSS.Properties = {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '48px',
    lineHeight: '48px',
    marginBottom:'20px',
    textAlign:'center'
};
const label: CSS.Properties = {
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '20px',
    textAlign:'left'
};
export const styles = {
    containerForm,
    title,
    label
};
