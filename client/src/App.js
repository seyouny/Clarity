import React from 'react';
import NavBar from "./components/Navbar/Navbar"
import "./style.css" 
import Home from "./components/pages/Home"
function App() {
  return (
    <div className="App">
      <NavBar/>
      <hr/>
      <Home/>
    </div>
  );
}

export default App;
