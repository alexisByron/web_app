import React from "react";
import {buttomProps} from './interface/ICustomButton';
import {EThemeNames} from './enums/ECustomButton'
import {styles} from './styles'

export default function CustomButton(props: buttomProps) {

    const styleButton = props.theme===EThemeNames.Primary?styles.ButtonPrimary:styles.ButtonSecondary;
 
    return (
        <React.Fragment>
            <button style={styleButton} onClick={()=>{props.onClick()}}>{props.text}</button>
        </React.Fragment>
    );
}
