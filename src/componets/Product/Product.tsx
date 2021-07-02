import React from 'react';
import {Link} from 'react-router-dom';
import {styles} from './styles';
import {productProps} from './interface/IProduct';
import CustomModal from '../Modal/CustomModal';

export default function Product(props:productProps) {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = () =>{
        setIsOpen(true);
    }

    return(
        <div style={styles.Product}>
            <img src={props.imagen} className="card-img-top" alt="..."  style={styles.ProductImg} onClick={()=>{openModal()}}/>
            <div className="card-body text-center">
                <h5 className="card-title text-center">{props.nombreProducto}</h5>
                <Link to="/ToShop" className="btn" style={styles.CustomBtn}>Agregar a carro</Link>
            </div>
            <CustomModal isOpen={modalIsOpen} setIsOpen={setIsOpen}>
                <div className="row" style={styles.ModalContent}>
                    <div className="col-12 col-md-8" style={styles.containerImgModal}>
                        <img src={props.imagen}  alt="..."  style={styles.ProductImgModal}/>
                    </div>
                    <div className="col-12 col-md-4" style={{margin:'auto'}}>
                        <p style={styles.ModalDescription}>Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="card-body text-center">
                        <Link to="/ToShop" className="btn" style={styles.CustomBtn}>Comentarios </Link>
                    </div>
                    <div className="card-body text-center">
                        <Link to="/ToShop" className="btn" style={styles.CustomBtn}>Agregar a carro</Link>
                    </div>
                </div>
            </CustomModal>
        </div>
    )
}
