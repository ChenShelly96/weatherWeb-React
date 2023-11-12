import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
      <>
          <Nav>
              <NavMenu>

              <NavLink to="/"  activeStyle index>
                  Home
                  </NavLink>

                  <NavLink to="/favorites" activeStyle>
                  Favorites
                  </NavLink>
  
              </NavMenu>
          </Nav>
      </>
  );
};

export default Navbar;