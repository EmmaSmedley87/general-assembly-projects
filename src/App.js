import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AnimalList from "./components/Animales/AnimalList";
import Resources from "./components/Resources";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/animals" component={AnimalList} />
          <Route path="/resources" component={Resources} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
