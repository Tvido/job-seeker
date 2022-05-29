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
        activeclassname={s.active}
      >
        Home Page
      </NavLink>

      <NavLink to="/auth" className={s.link} activeclassname={s.active}>
        Auth Page
      </NavLink>

      <NavLink to="/main" className={s.link} activeclassname={s.active}>
        Main Page
      </NavLink>

      <NavLink to="/favorites" className={s.link} activeclassname={s.active}>
        Favorites Page
      </NavLink>

      <NavLink to="/profile" className={s.link} activeclassname={s.active}>
        Profile Page
      </NavLink>
    </nav>
  );
};
