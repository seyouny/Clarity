import React from 'react';
import NavBar from "./components/Navbar/Navbar"
import SimplePaper from "./components/Section"
import "./style.css" 
function App() {
  return (
    <div className="App">
      <div className="navbar">
      <NavBar/>
      </div>
      <hr></hr>
      <div className="paper">
      <SimplePaper />
      </div>
    </div>
  );
}

export default App;
