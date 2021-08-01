import React from "react";
import product3 from '../../assests/img/product3.jpg';
import { InlineIcon } from '@iconify/react';
import bedIcon from '@iconify/icons-fa-solid/bed';
import vectorIcon from '@iconify/icons-fa-solid/vector-square';
import toiletIcon from '@iconify/icons-fa-solid/toilet';
import carIcon from '@iconify/icons-fa-solid/car';


function AparmentDetail(){
    return (
      <div style={{maxWidth:'1000px',margin:'auto'}}>
          <div style={{display: 'grid',gridTemplateColumns: 'repeat(3, 1fr)',marginTop:'66px'}}>

            <div style={{background: 'url("'+product3+'") round',opacity:'0.6', height:'179px',width:'323px',borderRadius:'8px',margin:'auto'}}>
              <h6 style={{color:'white',fontSize:'14px',fontWeight:500,textAlign:'center'}}>texto klo</h6>
            </div>

            <div style={{background: 'url("'+product3+'") round',opacity:'0.6', height:'179px',width:'323px',borderRadius:'8px',margin:'auto'}}>
              <h6 style={{color:'white',fontSize:'14px',fontWeight:500,textAlign:'center'}}>texto klo</h6>
            </div>

            <div style={{background: 'url("'+product3+'") round',opacity:'0.6', height:'179px',width:'323px',borderRadius:'8px',margin:'auto'}}>
              <h6 style={{color:'white',fontSize:'14px',fontWeight:500,textAlign:'center'}}>texto klo</h6>
            </div>

          </div>

          <div style={{marginTop:'20px',marginBottom:'20px',width:'60%'}}>
            <p style={{marginBottom:'0px',fontWeight: 600,fontSize: '24px'}}>Arriendo de Departamento en Macul</p>

            <p style={{color:'#8CA5C6',fontWeight: 500, fontSize: '14px'}}>Publicado hace 5 días</p>

            <div style={{display: 'grid',gridTemplateColumns: 'repeat(2, 1fr)',borderBottom: '1px solid rgba(0, 0, 0, 0.06)',marginBottom:'20px'}}>
              <p style={{fontSize:'14px'}}><InlineIcon icon={vectorIcon}/> 50 m2</p>
              <p style={{fontSize:'14px'}}><InlineIcon icon={bedIcon}/> 2 Habitaciones</p>
              <p style={{fontSize:'14px'}}><InlineIcon icon={toiletIcon}/> 1 Baño</p>
              <p style={{fontSize:'14px'}}><InlineIcon icon={carIcon}/> Sin estacionamiento</p>
            </div>

            <div>
              <p style={{fontWeight: 600,fontSize: '20px'}}>Descripción</p>
              <p style={{fontSize: '14px',lineHeight: '22px',color: '#939393'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed adipiscing egestas integer pharetra vivamus at orci. Pellentesque leo sit eget pulvinar at ac amet viverra. Pulvinar feugiat proin massa dictumst in nisl tempor nulla. Risus a nunc, aliquet nibh tristique vitae, cursus rhoncus. Amet auctor nisi quam vitae lectus. Malesuada proin eu, faucibus vulputate a in accumsan mattis diam. Sed nunc arcu et nec pellentesque cursus. Ac neque nibh mattis vel, in massa praesent et, eu. Id donec nunc leo eu sed sit ac sollicitudin.
              </p>
            </div>
      
            <div>
              <p style={{fontWeight: 600,fontSize: '20px'}}>Otras características</p>
              <ul>
                <li style={{listStyle: 'circle'}}>Cocina equipada</li>
                <li style={{listStyle: 'circle'}}>Refrigerador</li>
                <li style={{listStyle: 'circle'}}>Cocina equipada</li>
                <li style={{listStyle: 'circle'}}>Refrigerador</li>
                <li style={{listStyle: 'circle'}}>Cocina equipada</li>
                <li style={{listStyle: 'circle'}}>Refrigerador</li>
              </ul>
            </div>

           
          </div>
         
    
      </div>
    );
}

export default AparmentDetail;
