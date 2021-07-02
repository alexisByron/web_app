import React from 'react';
import Header from '../../componets/Header/Header';
import Footer from '../../componets/Footer/Footer'

function Layout(props:any){
        return (
            <React.Fragment>
                <Header />
                <div style={{marginBottom:'auto'}}>
                    {props.children}
                </div>
                <Footer />
            </React.Fragment>
    );
}

export default Layout;