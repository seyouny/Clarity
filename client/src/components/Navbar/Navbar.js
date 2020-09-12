import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
import "./Navbar.css"
import Color from "../pages/colorTher"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Navbar() {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
        
      }

    return (
      <Router>
      <div>
        <Breadcrumbs maxItems={2} aria-label="breadcrumb" className="navbar">
        <Link color="inherit" to="/about">Home</Link>

        /

        <Link color="inherit" to="/colortherapy">Color Therapy</Link>


           
        </Breadcrumbs>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
          </Route>
          <Route path="/colortherapy">
            <Color />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
      // <Router>
      //   <Breadcrumbs maxItems={2} aria-label="breadcrumb" className="navbar">
      //     <Route path="/colortherapy"><Color/>Color Therapy</Route>
      //   {/* <Link color="inherit" to="../pages/colorTher" onClick={handleClick}>
      //     Color Therapy
      //   </Link> */}
      //   <Link color="inherit" href="#" onClick={handleClick}>
      //     About
      //   </Link>
      // </Breadcrumbs>
      // </Router>
//     )
// }
