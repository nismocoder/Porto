import React from 'react';
//Global style
import GlobalStyle from './components/GlobalStyle';
//import pages
import About from './pages/about';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav />
      <About/>
    </div>
  );
};

export default App;
