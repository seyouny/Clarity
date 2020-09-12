import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import "./Navbar.css"
export default function Navbar() {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }

    return (
        <Breadcrumbs maxItems={2} aria-label="breadcrumb" className="navbar">
        <Link color="inherit" href="#" onClick={handleClick}>
          Home
        </Link>
        <Link color="inherit" href="#" onClick={handleClick}>
          About
        </Link>
      </Breadcrumbs>
    )
}
