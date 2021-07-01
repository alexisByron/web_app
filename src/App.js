import './App.css';
import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Layout from './componets/Layout/Layout';
import Products from './screens/Products/Products'; 
import ToShop from './screens/ToShop/ToShop';

function App() {
  return (
    <BrowserRouter >
        <Layout>
            <Switch>
                <Route exact path="/ToShop" component={ToShop} /> 
                <Route exact path="/products/:categoty" component={Products}></Route>  
            </Switch>
        </Layout>
    </BrowserRouter>
  );
}

export default App;