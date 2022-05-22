import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './NavBar.module.css';

export const NavBar = () => {
  return (
    <nav>
      <NavLink
        exact="true"
        to="/"
        className={s.link}
        activeclassname={s.activeLink}
      >
        Home Page
      </NavLink>
      <NavLink to="/auth" className={s.link} activeclassname={s.activeLink}>
        Auth Page
      </NavLink>
      <NavLink to="/main" className={s.link} activeclassname={s.activeLink}>
        Main Page
      </NavLink>
      <NavLink
        to="/favorites"
        className={s.link}
        activeclassname={s.activeLink}
      >
        Favorites Page
      </NavLink>
      <NavLink to="/profile" className={s.link} activeclassname={s.activeLink}>
        Profile Page
      </NavLink>
    </nav>
  );
};
