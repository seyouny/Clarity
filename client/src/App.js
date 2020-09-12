import React, {useState, useEffect} from 'react';
import NavBar from "./components/Navbar/Navbar"
import PageContext from "./utils/PageContext"
import "./style.css" 
import Home from "./components/pages/Home"
// import Color from "./components/pages/colorTher"

function App() {
  const  [angryScore, setAngryScore] = useState(0)
  const [depressedScore, setDepressedScore] = useState(0)
  
  let red = 167;
  let blue = 202;

  useEffect(()=> {
      document.body.style.backgroundColor = `rgb(${red - angryScore*10}, ${blue - depressedScore*10}, 233)`
  }, [angryScore, depressedScore])

  return (
    // <div>Color Theory</div>
    <PageContext.Provider value={{angryScore, setAngryScore, depressedScore, setDepressedScore}}>
      <div className="App">
        <NavBar/>
        <hr/>
        <Home/>
        {/* <Color/> */}
      </div>
    </PageContext.Provider>
  );
}

export default App;
