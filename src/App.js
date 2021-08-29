import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AnimalList from "./components/Animales/AnimalList";
import Resources from "./components/Resources";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/animals" component={AnimalList} />
          <Route path="/resources" component={Resources} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
