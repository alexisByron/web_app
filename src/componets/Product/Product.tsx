import React from 'react';
import {Link} from 'react-router-dom';
import {styles} from './styles';

interface productProps {
    imagen: string;
    nombreProducto: string;
    id: number;
}

class Product extends React.Component<productProps>{
    render(){
        return(
            <div style={styles.Product}>
                <img src={this.props.imagen} className="card-img-top" alt="..."  style={styles.ProductImg}/>
                <div className="card-body text-center">
                    <h5 className="card-title text-center">{this.props.nombreProducto}</h5>
                    <Link to="/ToShop" className="btn" style={styles.CustomBtn}>Agregar a carro</Link>
                </div>
            </div>
        )
    }
    
}

export default Product;