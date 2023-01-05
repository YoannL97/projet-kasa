import { Component } from "react"

import "../styles/header.css"


import imageLogo from '../data/LOGO.png'



export function Header() {
    return (
    <div className="header-nav">
        <img src={imageLogo} alt="logo" />
        <ul>
            <li className="li-1">
                accueil
            </li>
            <li className="li-2">
                A propos
            </li>
        </ul>
        
    </div>



    );
}

export default Header