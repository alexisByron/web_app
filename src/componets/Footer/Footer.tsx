import React from 'react';
import logo  from '../../assests/img/logo.jpeg';
class Header extends React.Component{
    render(){
        return(
            <div style={{height:250, backgroundColor:'#FFAACC', fontFamily:'Comic Sans MS',color:'#76106A '}} className="row">
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