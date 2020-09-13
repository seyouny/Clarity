import React, {useState, useEffect} from 'react';
import NavBar from "./components/Navbar/Navbar"
import PageContext from "./utils/PageContext"
import "./style.css" 
import Home from "./components/pages/Home"
import {AuthProvider} from "./utils/authContext";// import Color from "./components/pages/colorTher"

function App() {
  const  [angryScore, setAngryScore] = useState(0)
  const [depressedScore, setDepressedScore] = useState(0)

  useEffect(()=> {
      document.body.style.backgroundColor = `rgb(${167 + angryScore*10 - depressedScore*5}, ${202 - angryScore*5}, ${233 + depressedScore*10 - angryScore*5})`
  }, [angryScore, depressedScore])

  return (
    // <div>Color Theory</div>
    <AuthProvider>
      <PageContext.Provider value={{angryScore, setAngryScore, depressedScore, setDepressedScore}}>
        <div className="App">
          <NavBar/>
          <hr/>
          <Home/>
          {/* <Color/> */}
        </div>
      </PageContext.Provider>
    </AuthProvider>
  );
}

export default App;
