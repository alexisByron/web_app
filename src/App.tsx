import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "./componets/Layout/Layout";
import ListAparments from "./screens/ListAparments/ListAparments";
import Home from "./screens/Home/Home";
import AparmentDetail from "./screens/AparmentDetail/AparmentDetail";

function App() {
  const NotFound = () => {
    return <h1>404</h1>;
  };

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          {
            /**
             * al agregar github-pages agrego como pagina de inicio el nombre del proyecto por esto realizo una redireccion
             */
          }
          <Route exact path="/web_app">
            <Redirect to="/Home" />
          </Route>
          <Route
            exact
            path="/ListAparment/:comuna/:rooms/:bathrooms"
            component={ListAparments}
          ></Route>
          <Route
            exact
            path="/AparmentDetail/:idAparment"
            component={AparmentDetail}
          ></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
