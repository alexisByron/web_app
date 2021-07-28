import CSS from "csstype";
import {Colors} from "../../Theme";

const containerSteeps: CSS.Properties = {
    height: '424px',
    left: '0px',
    background: Colors.bluePrimary,
    marginBottom:'20px',
    marginTop:'20px',
    paddingTop: '100px',
    paddingLeft: '30px',
    paddingRight: '30px'
};

const rowSteeps: CSS.Properties = {
    background:'white',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '20px',
    gridAutoRows: 'minmax(100px, auto)',
    height:'250px',
    width: '100%',
    borderRadius:'20px'
};

const steep: CSS.Properties = {
    marginTop:'50px',
    height: '150px',
    paddingLeft: '30px',
    paddingRight: '30px'
}

const rowNumbreSteep: CSS.Properties={
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
}

const circleNumber: CSS.Properties={
    width:' 24px',
    background: '#3268AE',
    height: '24px',
    borderRadius: '50px',
    textAlign: 'center',
    lineHeight: '24px',
}

const numberText:CSS.Properties={
    color:'white',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '13px',
    lineHeight: '26px',
}

const title:CSS.Properties={
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '30px',
    textAlign:'left'
}

const text:CSS.Properties={
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '26px',
    textAlign:'left'
}

export const styles = {
    containerSteeps,
    rowSteeps,
    steep,
    rowNumbreSteep,
    circleNumber,
    numberText,
    title,
    text
};
