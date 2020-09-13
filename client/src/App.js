import React, {useState, useEffect} from 'react';
import NavBar from "./components/Navbar/Navbar"
import PageContext from "./utils/PageContext"
import "./style.css" 
import Home from "./components/pages/Home"
import {AuthProvider} from "./utils/authContext";// import Color from "./components/pages/colorTher"
import Color from "./component/pages/colorTher"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
          <Router>
            <Switch>
              <Route path="/about" component = {Home}>
                {/* <Home/> */}
            </Route>
            <Route path="/colortherapy" component ={Color}>
              {/* <Color /> */}
            </Route>
          </Switch>
      
          </Router>
          <hr/>
          
          {/* <Color/> */}
        </div>
      </PageContext.Provider>
    </AuthProvider>
  );
}

export default App;
