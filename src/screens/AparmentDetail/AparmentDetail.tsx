import React from "react";
import product3 from '../../assests/img/product3.jpg';
import { InlineIcon } from '@iconify/react';
import bedIcon from '@iconify/icons-fa-solid/bed';
import vectorIcon from '@iconify/icons-fa-solid/vector-square';
import toiletIcon from '@iconify/icons-fa-solid/toilet';
import carIcon from '@iconify/icons-fa-solid/car';
import { categoryAndProducts } from "../ListAparments/ListDummy";
import ContactForm from "../../componets/ContactForm/ContactForm";
import Product from "../../componets/Product/Product";
import CustomButton from "../../componets/CustomButton/CustomButton";
import { EThemeNames } from "../../componets/CustomButton/enums/ECustomButton";

function AparmentDetail(props:any){
    const idSearched = props.match.params.idAparment;

    const aparmentSelectedArray = categoryAndProducts.filter(
      (element) => element.idApartment === parseInt(idSearched)
    );

    const aparmentSelected = aparmentSelectedArray[0];

    const RenderAparment = (aparment:any) =>{
      aparment=aparment.aparment;
      return(
        <Product
          key={aparment.id}
          id={aparment.idApartment}
          imagen={aparment.imagenPrincipal}
          nombreProducto={aparment.title}
          bathRooms={aparment.bathRoom}
          bedRooms={aparment.bedRooms}
          comuna={aparment.comuna}
        />
      )
    };
    
    return (
      <React.Fragment>
      <div style={{width: '95%', maxWidth:'1000px',margin:'auto'}}>
          <div style={{display: 'grid',gridTemplateColumns: 'repeat(3, 1fr)', gridColumnGap: '30px',marginTop:'66px'}}>

            <div style={{background: 'url("'+aparmentSelected.imagenPrincipal+'") round',opacity:'0.6', height:'179px',width:'100%',borderRadius:'8px',margin:'auto'}}>
              <h6 style={{color:'white',fontSize:'14px',fontWeight:500,textAlign:'center'}}>texto klo</h6>
            </div>

            <div style={{background: 'url("'+aparmentSelected.imagenPrincipal+'") round',opacity:'0.6', height:'179px',width:'100%',borderRadius:'8px',margin:'auto'}}>
              <h6 style={{color:'white',fontSize:'14px',fontWeight:500,textAlign:'center'}}>texto klo</h6>
            </div>

            <div style={{background: 'url("'+product3+'") round',opacity:'0.6', height:'179px',width:'100%',borderRadius:'8px',margin:'auto'}}>
              <h6 style={{color:'white',fontSize:'14px',fontWeight:500,textAlign:'center'}}>texto klo</h6>
            </div>

          </div>

          <div className="mt-4" style={{display: 'grid', gridTemplateColumns: '66% 32%', gridColumnGap: '20px'}}>
            <div style={{marginBottom:'100px',width:'60%'}}>
              <p style={{marginBottom:'0px',fontWeight: 600,fontSize: '24px'}}>{aparmentSelected.title}</p>

              <p style={{color:'#8CA5C6',fontWeight: 500, fontSize: '14px'}}>Publicado {aparmentSelected.createdAt}</p>

              <div style={{display: 'grid',gridTemplateColumns: 'repeat(2, 1fr)',borderBottom: '1px solid rgba(0, 0, 0, 0.06)',marginBottom:'20px'}}>
                <p style={{fontSize:'14px'}}><InlineIcon icon={vectorIcon}/> {aparmentSelected.dimentions}</p>
                <p style={{fontSize:'14px'}}><InlineIcon icon={bedIcon}/> {aparmentSelected.bedRooms} Habitaciones</p>
                <p style={{fontSize:'14px'}}><InlineIcon icon={toiletIcon}/> {aparmentSelected.bathRoom} Baños</p>
                <p style={{fontSize:'14px'}}><InlineIcon icon={carIcon}/> {aparmentSelected.parking>0? `${aparmentSelected.parking} Estacionamiento`:'Sin estacionamiento'} </p>
              </div>

              <div>
                <p style={{fontWeight: 600,fontSize: '20px'}}>Descripción</p>
                <p style={{fontSize: '14px',lineHeight: '22px',color: '#939393'}}>
                  {aparmentSelected.description}
                </p>
              </div>
        
              <div>
                <p style={{fontWeight: 600,fontSize: '20px'}}>Otras características</p>
                <ul>
                  
                  {aparmentSelected.other.map((element:any,id) => {
                  return (
                      <li style={{listStyle: 'circle'}} key={id}>{element}</li>
                  );
              })}
                </ul>
              </div>

            
            </div>
            <div>
              <div className="box-price" style={{padding: '20px', background: '#fff', boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.08)', borderRadius: '8px', position: 'sticky', top: '20px'}}>
                <div className="row-price d-flex justify-content-between" style={{fontWeight: 500, fontSize: '18px'}}>
                  <div className="left-item">Valor arriendo</div>
                  <div className="rigth-item">$450.000</div>
                </div>
                <div className="row-price ligh-grey d-flex justify-content-between mb-3 align-items-center mt-2" style={{fontWeight: 500, fontSize: '14px', color: '#616161'}}>
                  <div className="left-item">Gastos comunes aprox</div>
                  <div className="rigth-item" style={{fontSize: '18px'}}>$50.000</div>
                </div>

                <div className="mb-3">
                  <CustomButton text="Enviar postulación" theme={EThemeNames.Secondary} onClick={() => console.log('aaa')} />
                </div>
                <CustomButton text="Reservar" theme={EThemeNames.Primary} onClick={() => console.log('aaa')} />
              </div>
            </div>
          </div>
      </div>

      <div className="container-c" style={{padding:'50px'}}>
          <p style={{fontWeight: 'bold',fontSize: '36px'}}>Propiedades que te pueden interesar</p>
          <div style={{height:'250px',marginBottom:'100px',display: 'grid',gridTemplateColumns: 'repeat(4, 1fr)',gridColumnGap:'10px'}}>
            <RenderAparment aparment={categoryAndProducts[0]}/>
            <RenderAparment aparment={categoryAndProducts[1]}/>
            <RenderAparment aparment={categoryAndProducts[2]}/>
            <RenderAparment aparment={categoryAndProducts[3]}/>
          </div>
          <ContactForm />
      </div>
      </React.Fragment>
    );
}

export default AparmentDetail;
