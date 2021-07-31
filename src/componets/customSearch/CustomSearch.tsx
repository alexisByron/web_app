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

    return (
        <div className="justify-center" style={styles.customContainer}>
            <div style={styles.customsColum}>
                <InlineIcon icon={location} style={styles.icon}/>
                <select name="comunas" id="comunas" className="select-search" style={{background: 'url("'+arrowSelect+'") no-repeat 98%', width:'80%'}} onChange={(e)=>setComunaBuscada(e.target.value)} value={comunaBuscada}>
                    <option value="">Buscar comuna...</option>
                    <option value="Las Condes">Las Condes</option>
                    <option value="Providencia">Providencia</option>
                    <option value="Macul">Macul</option>
                    <option value="Quilicura">Quilicura</option>
                </select>
            </div>
            <div style={styles.customsColum}>
                <div style={styles.customRow}>
                    <div onClick={()=>setShowCollapseRooms(!showCollapseRooms)} style={styles.customCollapsableActivator}>
                        <h6  style={{alignSelf:'center'}}>
                            <InlineIcon icon={bed} style={styles.icon}/>
                            Habitaciones
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
                        <a href="#" className="item-quantity" onClick={()=>{setCantRooms('1');setShowCollapseRooms(false)}} style={cantRooms=="1"?styles.itemQuantityActive:styles.itemQuantity}>1</a>
                        <a href="#" className="item-quantity" onClick={()=>{setCantRooms('2');setShowCollapseRooms(false)}} style={cantRooms=="2"?styles.itemQuantityActive:styles.itemQuantity}>2</a>
                        <a href="#" className="item-quantity" onClick={()=>{setCantRooms('3');setShowCollapseRooms(false)}} style={cantRooms=="3"?styles.itemQuantityActive:styles.itemQuantity}>3</a>
                        <a href="#" className="item-quantity" onClick={()=>{setCantRooms('4');setShowCollapseRooms(false)}} style={cantRooms=="4"?styles.itemQuantityActive:styles.itemQuantity}>4</a>
                        <a href="#" className="item-quantity" onClick={()=>{setCantRooms('5+');setShowCollapseRooms(false)}} style={cantRooms=="5+"?styles.itemQuantityActive:styles.itemQuantity}>5+</a>
                    </div>
                </Collapse>
            </div>
            <div style={styles.bathroomColum}>
                <div style={styles.customRow}>
                    <div onClick={()=>setShowCollapseBathrooms(!showCollapseBathrooms)} style={styles.customCollapsableActivator}>
                        <h6  style={{alignSelf:'center'}}>
                            <InlineIcon icon={toilet} style={styles.icon}/>
                            Baños
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
                        <a href="#" className="item-quantity" onClick={()=>{setCantBathRooms('1');setShowCollapseBathrooms(false)}} style={cantBathRooms=="1"?styles.itemQuantityActive:styles.itemQuantity}>1</a>
                        <a href="#" className="item-quantity" onClick={()=>{setCantBathRooms('2');setShowCollapseBathrooms(false)}} style={cantBathRooms=="2"?styles.itemQuantityActive:styles.itemQuantity}>2</a>
                        <a href="#" className="item-quantity" onClick={()=>{setCantBathRooms('3');setShowCollapseBathrooms(false)}} style={cantBathRooms=="3"?styles.itemQuantityActive:styles.itemQuantity}>3</a>
                        <a href="#" className="item-quantity" onClick={()=>{setCantBathRooms('4');setShowCollapseBathrooms(false)}} style={cantBathRooms=="4"?styles.itemQuantityActive:styles.itemQuantity}>4</a>
                        <a href="#" className="item-quantity" onClick={()=>{setCantBathRooms('5+');setShowCollapseBathrooms(false)}} style={cantBathRooms=="5+"?styles.itemQuantityActive:styles.itemQuantity}>5+</a>
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
