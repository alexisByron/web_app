import React from "react";
import Steeps from "../../componets/Steeps/Steeps";
import CustomSearch from "../../componets/customSearch/CustomSearch";
import Header from "../../componets/Header/Header";
import monoHome from "../../assests/img/monoHome.svg";

function Home() {
  return (
    <React.Fragment>
       <Header />
        <div className="row justify-content-center" style={{marginTop:'-35px',marginBottom:'20px'}}>
          <CustomSearch />
        </div>
        <div style={{display:'flex',gridColumnGap: '10px',justifyContent:'center',width:'90%',}}>
          <div style={{margin:'auto'}}>
             <h1 className="text-center h1-contrata" style={{width:'60%',margin:'auto',marginRight:'0px',fontFamily: 'Inter',fontStyle: 'normal',fontWeight: 800,fontSize: '48px',lineHeight: '48px'}}>
            Contrata SIN aval y 
            realiza todo 100% online
           </h1>
          </div>
          <div style={{marginBottom:'0px'}}>
            <img src={monoHome} alt="persona" className="img-contrata" />
          </div>
        </div>
      <Steeps />
    </React.Fragment>
  );
}

export default Home;
