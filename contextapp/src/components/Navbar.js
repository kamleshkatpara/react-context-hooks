import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import Demo from './Demo';

const Navbar = () => {

    const { isAuthenticated, toggleAuth } = useContext(AuthContext);

    const { isLightTheme, light, dark } = useContext(ThemeContext);

    const theme = isLightTheme ? light : dark;

    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <Demo />
            <div onClick={toggleAuth}>
                {isAuthenticated ? 'LoggedIn' : 'LoggedOut'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;