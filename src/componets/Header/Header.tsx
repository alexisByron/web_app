import React from 'react';
import logo  from '../../assests/img/logo.jpeg';
class Header extends React.Component{
    render(){
        return(
            <div className="row justify-content-center" style={{ backgroundImage: `url(${logo})`,height:250 }}>
                <img style={{height:'100%'}} src={logo} alt="" />
            </div>
        )
    }
}

export default Header;