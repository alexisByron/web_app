import React from "react";
import Product from "../../componets/Product/Product";
import Categories from "../../componets/Categories/Categories";
import { categoryAndProducts } from "./ListDummy";
import { styles } from "./styles";
import Steeps from "../../componets/Steeps/Steeps"; 
import ContactForm from "../../componets/ContactForm/ContactForm";
import CustomList from "../../componets/CustomList/CustomList";

function ListAparments(props: any) {
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
      <div style={{marginTop:'50px',marginBottom:'100px'}}>
        {newArray.length>0?<CustomList list={newArray}/>:<h1>no hay registros</h1>}
      </div>
      <Steeps />
      <ContactForm />
    </React.Fragment>
  );
}

export default ListAparments;
