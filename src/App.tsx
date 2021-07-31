import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./componets/Layout/Layout";
import ListAparments from "./screens/ListAparments/ListAparments";
import Home from "./screens/Home/Home";
import AparmentDetail from "./screens/AparmentDetail/AparmentDetail";
import { Filter } from "./componets/Filter/Filter";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/">
            <Redirect to="/Home"/>
          </Route>
          <Route exact path="/ListAparment/:comuna/:rooms/:bathrooms" component={ListAparments}></Route>
          <Route exact path="/AparmentDetail" component={AparmentDetail}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
