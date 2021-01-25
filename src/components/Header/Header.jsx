import React from 'react';
import style from './Header.module.css'
import {ReactComponent as Logo} from './../../Icon.svg'
import {Nav} from "../Nav/Nav";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header className={style.header}>
            {/*<NavLink to='/'>*/}
                <Logo />
            {/*</NavLink>*/}
            <Nav />
        </header>
    )
}
