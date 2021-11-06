import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/layout/header/Header";
import Home from "./components/layout/home/Home";
import Footer from "./components/layout/footer/Footer";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="main__container">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
