import { Component } from "react"
import { Link } from "react-router-dom";

import "../styles/header.css"


import imageLogo from '../data/LOGO.png'



export function Header({accueil, apropos}) {
    return (
    <div className="header-nav">
        <img src={imageLogo} alt="logo" />
        <ul>
            <Link to="/">
            <li className={accueil ? "active" : "none"}>
                Accueil
            </li>
            </Link>
            <Link to="/Apropos">
                <li className={apropos ? "active" : "none"}>
                    A Propos
                </li>
            </Link>
        </ul>
        
    </div>



    );
}

export default Header