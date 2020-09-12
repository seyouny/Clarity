import React from 'react';
import NavBar from "./components/Navbar/Navbar"
import "./style.css" 
import Home from "./components/pages/Home"
import Color from "./components/pages/colorTher"
function App() {
  return (
    // <div>Color Theory</div>
    <div className="App">
      <NavBar/>
      <hr/>
      <div className="paper"> 
      <Home/>
      </div>
    {/* <Color/> */}
    </div>
  );
}

export default App;
