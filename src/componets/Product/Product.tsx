import React from 'react';
import {Link} from 'react-router-dom';

interface productProps {
    imagen: string;
    nombreProducto: string;
    id: number;
}

class Product extends React.Component<productProps>{
    render(){
        return(
            <div style={{marginLeft:20, marginRight:20, height:300, marginBottom:20, boxShadow: "0px 20px 30px -10px rgb(38, 57, 77)"}}>
                <img style={{height:150}} src={this.props.imagen} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title text-center">{this.props.nombreProducto}</h5>
                    <Link to="/ToShop" className="btn" style={{backgroundColor:'#FFAACC', color:'#76106A '}}>Agregar a carro</Link>
                </div>
            </div>
        )
    }
    
}

export default Product;