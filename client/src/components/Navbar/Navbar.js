import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
import "./Navbar.css"
import Color from "../pages/colorTher"
import Link from '@material-ui/core/Link';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";

export default function Navbar() {
    return (
      <Router>
      <div>
        <Breadcrumbs maxItems={2} aria-label="breadcrumb" className="navbar" fontSize="large">
        <Link color="inherit" href="/">Home</Link>

        |

        <Link color="inherit" href="/about">Info</Link>


           
        </Breadcrumbs>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
          <Route path="/about">
          </Route>
          <Route path="/colortherapy">
            <Color />
          </Route>
        </Switch>
     
     */}
     
      </div>
      </Router>
  );
}
    