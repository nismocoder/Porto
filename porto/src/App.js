import React from "react";
//Global style
import GlobalStyle from "./components/GlobalStyle";
//import pages
import About from "./pages/About";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
//Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/home/" exact>
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
