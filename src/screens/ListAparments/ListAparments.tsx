import React from "react";
import Product from "../../componets/Product/Product";
import Categories from "../../componets/Categories/Categories";
import { categoryAndProducts } from "./ListDummy";
import { styles } from "./styles";
import Steeps from "../../componets/Steeps/Steeps"; 
import ContactForm from "../../componets/ContactForm/ContactForm";
import CustomList from "../../componets/CustomList/CustomList";
import CustomButton from "../../componets/CustomButton/CustomButton";
import { EThemeNames } from "../../componets/CustomButton/enums/ECustomButton";
import CustomModal from "../../componets/Modal/CustomModal";
import { Filter } from "../../componets/Filter/Filter";

function ListAparments(props: any) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let newArray = categoryAndProducts;

  if(props.match.params.comuna && props.match.params.comuna!=='all'){
    const comuna = props.match.params.comuna;
    newArray = newArray.filter(
      (element) => element.comuna === comuna
    );
  }

  if(props.match.params.bathrooms){
    const bathrooms = props.match.params.bathrooms;
    const Fijo =  bathrooms.length==1?true:false;
    if(Fijo){
      newArray = newArray.filter(
        (element) => element.bathRoom === parseInt(bathrooms)
      );
    }else{
      newArray = newArray.filter(
        (element) =>  element.bathRoom >= parseInt(bathrooms.slice(0,1))
      );
    }
  }

  if(props.match.params.rooms){
    const rooms = props.match.params.rooms;
    const Fijo =  rooms.length==1?true:false;
    if(Fijo){
      newArray = newArray.filter(
        (element) => element.bedRooms === parseInt(rooms)
      );
    }else{
      newArray = newArray.filter(
        (element) =>  element.bedRooms >= parseInt(rooms.slice(0,1))
      );
    }
  }
 
  return (
    <React.Fragment>
      <div className="container-c">
        <div className="btn-filter mt-4" style={{width: '100px'}}>
          <CustomButton text="Filtros" theme={EThemeNames.Primary} onClick={() => setIsOpen(true)}/>
        </div>
      </div>
      <div style={{marginTop:'20px',marginBottom:'100px'}}>
        {newArray.length>0?<CustomList list={newArray}/>:<h1>no hay registros</h1>}
      </div>
      <Steeps />
      <ContactForm />
      <CustomModal isOpen={modalIsOpen} setIsOpen={setIsOpen}>
        <Filter comunas={props.match.params.comuna} rooms={props.match.params.rooms} bathrooms={props.match.params.bathrooms} />
      </CustomModal>
    </React.Fragment>
  );
}

export default ListAparments;
