import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBrand
  } from './NavbarElements';

function Navigation() {
    return ( 
        <Nav>
        <Bars />
        <NavBrand>Aaron Ferguson</NavBrand>
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home  
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
          <NavLink to='/projects' activeStyle>
            Project
          </NavLink>
        </NavMenu>
      </Nav>
    );
}

export default Navigation;