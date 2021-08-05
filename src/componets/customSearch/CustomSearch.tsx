import React, {useState} from "react";
import { styles } from "./styles";
import { Link } from "react-router-dom";
import arrowSelect from '../../assests/img/arrow-select.svg';
import {Collapse} from "react-collapse";
import { InlineIcon } from '@iconify/react';
import bed from '@iconify/icons-fa-solid/bed';
import toilet from '@iconify/icons-fa-solid/toilet';
import location from '@iconify/icons-fa-solid/location-arrow';
import CustomButton from "../CustomButton/CustomButton";
import {EThemeNames} from "../CustomButton/enums/ECustomButton";

function CustomSearch(){
    const [showCollapseRooms,setShowCollapseRooms] = useState(false);
    const [showCollapseBathrooms,setShowCollapseBathrooms] = useState(false);
    const [comunaBuscada,setComunaBuscada] = useState('');
    const [cantRooms,setCantRooms] = useState('1+');
    const [cantBathRooms,setCantBathRooms] = useState('1+');

    const changeQuantity = (type: string, num: string) => {
        const cantidadActual = type === 'rooms' ? cantRooms : cantBathRooms
        if(cantidadActual !== num){ 
            (type === 'rooms') ? setCantRooms(num) : setCantBathRooms(num)
        } else {
            (type === 'rooms') ? setCantRooms('1+') : setCantBathRooms('1+')
        }
        setShowCollapseRooms(false)
    }

    return (
        <div className="justify-center custom-search" style={styles.customContainer}>
            <div className="comunas-col" style={styles.customsColum}>
                <InlineIcon icon={location} style={styles.icon}/>
                <select name="comunas" id="comunas" className="select-search" style={{background: 'url("'+arrowSelect+'") no-repeat 98%', width:'80%'}} onChange={(e)=>setComunaBuscada(e.target.value)} value={comunaBuscada}>
                    <option value="">Buscar comuna...</option>
                    <option value="Las Condes">Las Condes</option>
                    <option value="Providencia">Providencia</option>
                    <option value="Macul">Macul</option>
                    <option value="Quilicura">Quilicura</option>
                </select>
            </div>
            <div className="rooms-col" style={styles.customsColum}>
                <div style={styles.customRow}>
                    <div className="left-item" onClick={()=>setShowCollapseRooms(!showCollapseRooms)} style={styles.customCollapsableActivator}>
                        <h6 style={{alignSelf:'center'}}>
                            <span className="icon-left">
                                <InlineIcon icon={bed} style={styles.icon}/>
                            </span>
                            <span>
                                Habitaciones
                            </span>
                        </h6>
                        <img src={arrowSelect} alt=">" style={{height:'35px'}}/>
                    </div>
                    {cantRooms?
                     <p style={styles.itemQuantityActive}>
                     {cantRooms}
                     </p>
                     :<></>
                    }
                </div>
                <Collapse isOpened={showCollapseRooms}>
                    <div className="quantity" style={styles.ContainerNumbers}>
                        <a href="#" className="item-quantity" onClick={() => changeQuantity('rooms', '1')} style={cantRooms=="1"?styles.itemQuantityActive:styles.itemQuantity}>1</a>
                        <a href="#" className="item-quantity" onClick={() => changeQuantity('rooms', '2')} style={cantRooms=="2"?styles.itemQuantityActive:styles.itemQuantity}>2</a>
                        <a href="#" className="item-quantity" onClick={() => changeQuantity('rooms', '3')} style={cantRooms=="3"?styles.itemQuantityActive:styles.itemQuantity}>3</a>
                        <a href="#" className="item-quantity" onClick={() => changeQuantity('rooms', '4')} style={cantRooms=="4"?styles.itemQuantityActive:styles.itemQuantity}>4</a>
                        <a href="#" className="item-quantity" onClick={() => changeQuantity('rooms', '5+')} style={cantRooms=="5+"?styles.itemQuantityActive:styles.itemQuantity}>5+</a>
                    </div>
                </Collapse>
            </div>
            <div className="bathrooms-col" style={styles.bathroomColum}>
                <div style={styles.customRow}>
                    <div className="left-item" onClick={()=>setShowCollapseBathrooms(!showCollapseBathrooms)} style={styles.customCollapsableActivator}>
                        <h6  style={{alignSelf:'center'}}>
                            <span className="icon-left">
                                <InlineIcon icon={toilet} style={styles.icon}/>
                            </span>
                            <span>Baños</span>
                        </h6>
                        <img src={arrowSelect} alt=">" style={{height:'35px'}}/>
                    </div>
                    {cantBathRooms?
                     <p style={styles.itemQuantityActive}>
                     {cantBathRooms}
                     </p>
                     :<></>
                    }
                </div>
                <Collapse isOpened={showCollapseBathrooms}>
                    <div className="quantity" style={styles.ContainerNumbers}>
                        <a href="#" className="item-quantity" onClick={() => changeQuantity('bathrooms', '1')} style={cantBathRooms=="1"?styles.itemQuantityActive:styles.itemQuantity}>1</a>
                        <a href="#" className="item-quantity" onClick={() => changeQuantity('bathrooms', '2')} style={cantBathRooms=="2"?styles.itemQuantityActive:styles.itemQuantity}>2</a>
                        <a href="#" className="item-quantity" onClick={() => changeQuantity('bathrooms', '3')} style={cantBathRooms=="3"?styles.itemQuantityActive:styles.itemQuantity}>3</a>
                        <a href="#" className="item-quantity" onClick={() => changeQuantity('bathrooms', '4')} style={cantBathRooms=="4"?styles.itemQuantityActive:styles.itemQuantity}>4</a>
                        <a href="#" className="item-quantity" onClick={() => changeQuantity('bathrooms', '5+')} style={cantBathRooms=="5+"?styles.itemQuantityActive:styles.itemQuantity}>5+</a>
                    </div>
                </Collapse>
            </div>
            <div style={styles.searchButtonColum}>
                <Link to={`/ListAparment/${comunaBuscada?comunaBuscada:'all'}/${cantRooms}/${cantBathRooms}`}>
                    <CustomButton text="Buscar" onClick={()=>null} theme={EThemeNames.Primary} />
                </Link>
            </div>
         </div>
    );
}
export default CustomSearch;
