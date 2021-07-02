import CSS from 'csstype';

const Product:CSS.Properties={
    border: '1px solid rgba(255,170,204,0.83)',
    height:'300px',
    boxShadow: "-17px 17px 21px -5px rgba(255,170,204,0.83)",
};

const ProductImg: CSS.Properties={
    height:'150px',
};

const CustomBtn:CSS.Properties={
    backgroundColor:'#FFAACC',
    color:'#76106A'
};

const ModalContent: CSS.Properties={
    marginLeft:'10px',
    marginRight:'10px',
};

const ProductImgModal: CSS.Properties={
    width:'90%',
    height:'250px',
};

const containerImgModal: CSS.Properties= {
    margin:'auto'
};

const ModalDescription: CSS.Properties= {
    fontFamily: 'Comic Sans MS',
    color: '#76106A',
    fontSize:'20px',
    textAlign:'left'
};

export const styles = {
    Product,
    ProductImg,
    CustomBtn,
    ProductImgModal,
    ModalContent,
    containerImgModal,
    ModalDescription
};
