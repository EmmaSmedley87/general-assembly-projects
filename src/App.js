import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ElephantList from "./components/Elephants/ElephantList";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import SearchPage from "./components/SearchPage";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/elephants" component={ElephantList} />
          <Route path="/resources" component={Resources} />
          <div className="App">
            <SearchPage />
          </div>
          <Route path="/SearchBar" component={SearchBar} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
