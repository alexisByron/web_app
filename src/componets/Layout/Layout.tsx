import React from 'react';
import Header from '../../componets/Header/Header';
import Footer from '../../componets/Footer/Footer'

function Layout(props:any){
        return (
            <React.Fragment>
                <Header />
                {props.children}
                <Footer />
            </React.Fragment>
    );
}

export default Layout;