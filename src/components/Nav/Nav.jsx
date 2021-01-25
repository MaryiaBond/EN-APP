import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Nav.module.css'
// import NavLink from "react-router-dom/modules/NavLink";

export const Nav = () => {
    return (
       <nav className={style.nav}>
           <NavLink to='/dashboard' > home </NavLink>
           <NavLink to='/games' > games </NavLink>
           <NavLink to='/library' > library </NavLink>
           <NavLink to='/learn' > learn </NavLink>
       </nav>
    )
}
