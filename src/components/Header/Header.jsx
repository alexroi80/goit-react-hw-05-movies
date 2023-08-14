import React from 'react';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header=()=>{
    return(
        <div className={css.container}>
        <nav className={css.nav}>
        <NavLink to="/" className={(navLink) => navLink.isActive ? css.active : ""} >Home</NavLink>
        <NavLink to="/movies" className={(navLink) => navLink.isActive ? css.active : ""} >Movies</NavLink>
      </nav>
        </div>
    )
}

export default Header;