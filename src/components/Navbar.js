'use strict';

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to='/'>Home</NavLink> <br/>
      <NavLink to='/simple/redux'>With Redux</NavLink> <br/>
      <NavLink to='/simple/states'>With states</NavLink>
    </div>
  );
};

export default NavBar;
