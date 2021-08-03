import CSS from "csstype";
import {Colors} from "../../Theme";

const containerSteeps: CSS.Properties = {
    left: '0px',
    background: Colors.bluePrimary,
    marginBottom:'20px',
    paddingTop: '88px',
    paddingBottom: '88px'
};

const rowSteeps: CSS.Properties = {
    background:'white',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '25px',
    gridAutoRows: 'minmax(100px, auto)',
    borderRadius:'20px',
    padding: '50px 90px',
};

const steep: CSS.Properties = {
}

const rowNumbreSteep: CSS.Properties={
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: '15px'
}

const dashedSteep: CSS.Properties = {
    borderBottom: '2px dashed rgb(171, 232, 235)',
    width: '80%',
    alignSelf: 'center',
    marginRight: '0px'
}

const circleNumber: CSS.Properties={
    width:' 24px',
    background: '#3268AE',
    height: '24px',
    borderRadius: '100%',
    textAlign: 'center',
    lineHeight: '24px',
}

const numberText:CSS.Properties={
    color:'white',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '13px',
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
    text,
    dashedSteep
};
