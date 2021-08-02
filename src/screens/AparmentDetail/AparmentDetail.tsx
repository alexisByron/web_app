import React, { useState } from "react";
import ReactBnbGallery from 'react-bnb-gallery';
import product3 from '../../assests/img/product3.jpg';
import { Icon, InlineIcon } from '@iconify/react';
import bedIcon from '@iconify/icons-fa-solid/bed';
import vectorIcon from '@iconify/icons-fa-solid/vector-square';
import toiletIcon from '@iconify/icons-fa-solid/toilet';
import baselinePhotoCamera from '@iconify/icons-ic/baseline-photo-camera';
import baselineSlowMotionVideo from '@iconify/icons-ic/baseline-slow-motion-video';
import outlineMap from '@iconify/icons-ic/outline-map';
import carIcon from '@iconify/icons-fa-solid/car';
import { categoryAndProducts } from "../ListAparments/ListDummy";
import ContactForm from "../../componets/ContactForm/ContactForm";
import Product from "../../componets/Product/Product";
import CustomButton from "../../componets/CustomButton/CustomButton";
import CustomModal from "../../componets/Modal/CustomModal";
import { EThemeNames } from "../../componets/CustomButton/enums/ECustomButton";
import 'react-bnb-gallery/dist/style.css'
import mapDetail from "../../assests/img/map-detail.jpeg"

function AparmentDetail(props:any){
    const [isOpenGallery, setIsOpenGallery] = useState(false);
    const [isOpenMap, setIsOpenMap] = useState(false);
    const [isOpenVideo, setIsOpenVideo] = useState(false);
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
        <ReactBnbGallery
          show={isOpenGallery}
          photos={aparmentSelected.imgs}
          onClose={() => setIsOpenGallery(false)}
        />
        <CustomModal isOpen={isOpenMap} setIsOpen={setIsOpenMap}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.88563507662!2d-70.6238625845385!3d-33.47832818076597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cff48089845b%3A0xcc73455ef536b7ff!2sJuan%20Mitjans%20105%2C%20Macul%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1627868394084!5m2!1ses!2scl" 
            width="450" 
            height="450" 
            style={{border:0}}
            loading="lazy"></iframe>
        </CustomModal>
        <CustomModal isOpen={isOpenVideo} setIsOpen={setIsOpenVideo}>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/3IYompL8FBw" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </CustomModal>
        <div style={{width: '95%', maxWidth:'1000px',margin:'auto'}}>
            <div style={{display: 'grid',gridTemplateColumns: 'repeat(3, 1fr)', gridColumnGap: '30px',marginTop:'66px'}}>

              <div className="d-flex align-items-center justify-content-center" onClick={() => setIsOpenGallery(true)} style={{cursor: 'pointer', backgroundImage: 'url("'+aparmentSelected.imgs[0]+'")', backgroundSize: 'cover', height:'179px',width:'100%',borderRadius:'8px',margin:'auto', position: 'relative' }}>
                <div className="text-center" style={{color: '#fff', zIndex: 1}}>
                  <Icon icon={baselinePhotoCamera} style={{color: '#ffffff', fontSize: '28px'}} />
                  <span className="d-block">Ver fotos</span>
                </div>
                <div style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: '#000', opacity: '0.44', zIndex: 0, borderRadius: '8px'}}></div>
              </div>

              <div className="d-flex align-items-center justify-content-center" onClick={() => setIsOpenVideo(true)} style={{cursor: 'pointer', backgroundImage: 'url("'+aparmentSelected.imgs[0]+'")', backgroundSize: 'cover', height:'179px',width:'100%',borderRadius:'8px',margin:'auto', position: 'relative' }}>
                <div className="text-center" style={{color: '#fff', zIndex: 1}}>
                  <Icon icon={baselineSlowMotionVideo} style={{color: '#ffffff', fontSize: '28px'}} />
                  <span className="d-block">Ver video</span>
                </div>
                <div style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: '#000', opacity: '0.44', zIndex: 0, borderRadius: '8px'}}></div>
              </div>

              <div className="d-flex align-items-center justify-content-center" onClick={() => setIsOpenMap(true)} style={{cursor: 'pointer', backgroundImage: 'url("'+mapDetail+'")', backgroundSize: 'cover', height:'179px',width:'100%',borderRadius:'8px',margin:'auto', position: 'relative' }}>
                <div className="text-center" style={{color: '#fff', zIndex: 1}}>
                  <Icon icon={outlineMap} style={{color: '#ffffff', fontSize: '28px'}} />
                  <span className="d-block">Ver mapa</span>
                </div>
                <div style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: '#000', opacity: '0.44', zIndex: 0, borderRadius: '8px'}}></div>
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
