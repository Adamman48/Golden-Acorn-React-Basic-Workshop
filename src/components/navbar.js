'use strict';

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to='/'>Home&#x1f330;</NavLink>
      <NavLink to='/simple/redux'>With Redux&#x1f330;</NavLink>
      <NavLink to='/simple/states'>With states</NavLink>
    </div>
  );
};

export default NavBar;