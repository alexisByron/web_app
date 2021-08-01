import React, {useEffect} from "react";
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

  const [cantRooms, setCantRooms] = React.useState(props.match.params.rooms);
  const [cantBathRooms, setCantBathRooms] = React.useState(props.match.params.bathrooms);
  const [comuna, setComuna] = React.useState(props.match.params.comuna);
  //esta en un hook para que haga render al cambiar
  const [list, setList] = React.useState(categoryAndProducts);

  //todo esto deberia ser una consulta tipo post enviando comuna-bathrroms-rooms
  const FilterAction = () => {
    let newArray:any=categoryAndProducts;

    if(comuna!=='all'){
      newArray = newArray.filter(
        (element:any) => element.comuna === comuna
      );
    }

    
    if(cantBathRooms!='1+'){
      newArray = newArray.filter(
        (element:any) => element.bathRoom === parseInt(cantBathRooms)
      );
    }

    if(cantRooms!='1+'){
      newArray = newArray.filter(
        (element:any) => element.bedRooms === parseInt(cantRooms)
      );
    }
 
    setList(newArray);
  };

  useEffect(() => {
    FilterAction();
  },[]);

  return (
    <React.Fragment>
      <div className="container-c">
        <div className="btn-filter mt-4" style={{width: '100px'}}>
          <CustomButton text="Filtros" theme={EThemeNames.Primary} onClick={() => setIsOpen(true)}/>
        </div>
      </div>
      <div style={{marginTop:'20px',marginBottom:'100px'}}>
        {list.length>0?<CustomList list={list}/>:<h1>no hay registros</h1>}
      </div>
      <Steeps />
      <ContactForm />
      <CustomModal isOpen={modalIsOpen} setIsOpen={setIsOpen}>
        <Filter comunas={comuna} setComuna={setComuna} rooms={cantRooms} setCantRoms={setCantRooms} bathrooms={cantBathRooms} setCantBathRooms={setCantBathRooms} submit={FilterAction}/>
      </CustomModal>
    </React.Fragment>
  );
}

export default ListAparments;
