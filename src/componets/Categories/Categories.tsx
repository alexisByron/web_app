import React from 'react';
import {Link} from 'react-router-dom';

class Categories extends React.Component{
    render(){
        return(
            <div className="row justify-content-center" style={{fontFamily:'Comic Sans MS'}}> 
                <h6 style={{margin:20}}><Link to="/products/Tortas" className="">Tortas</Link></h6>
                <h6 style={{margin:20}}><Link to="/products/Alfajores" className="">Alfajores</Link></h6>
                <h6 style={{margin:20}}><Link to="/products/Matrimoios" className="">Matrimoios</Link></h6>
          </div>
        )
    }
    
}

export default Categories;