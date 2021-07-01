import React from 'react';
import {styles} from './styles';

class Header extends React.Component{
    render(){
        return(
            <div style={styles.footer} className="row">
                <div style={{justifyContent:'center',width:300}}>
                    <h5 className="text-center">fono:55555555</h5><br />
                    <h5 className="text-center">correo:paradaisse@algo.cl</h5><br />
                    <h5 className="text-center">otra info</h5>
                </div>
            </div>
        )
    }
}

export default Header;