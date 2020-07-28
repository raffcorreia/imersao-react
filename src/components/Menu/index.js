import React from 'react';
import Logo from '../../assets/logo.png';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="RafFlix logo" />
            </a>
        </nav>
    );
}

export default Menu;