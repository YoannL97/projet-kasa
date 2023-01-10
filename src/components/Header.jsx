import { Component } from "react"
import { Link } from "react-router-dom";

import "../styles/header.css"


import imageLogo from '../data/LOGO.png'



export function Header() {
    return (
    <div className="header-nav">
        <img src={imageLogo} alt="logo" />
        <ul>
            <Link to="/">
            <li className="li-1">
                accueil
            </li>
            </Link>
            <Link to="/Apropos">
                <li className="li-2">
                    A propos
                </li>
            </Link>
        </ul>
        
    </div>



    );
}

export default Header