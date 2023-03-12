import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
import NavLink from "react-router-dom"
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="./pages/StartPage">
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;
  