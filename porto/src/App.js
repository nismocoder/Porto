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
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/About" exact>
          <About />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
