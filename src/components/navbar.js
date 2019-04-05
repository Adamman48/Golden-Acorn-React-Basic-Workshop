'use strict';

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to='/simple/redux'>With Redux</NavLink>
      <NavLink to='/simple/states'>With states</NavLink>
    </div>
  );
};

export default NavBar;