import {Component} from "react";

import "../styles/accueil.css";
import {Header} from "../components/Header";
import {Banniere} from "../components/Banniere"
import {CartContent} from "../components/Cart";

export function Accueil () {



    return (
        <div>
            <Header />
            <Banniere />
            <CartContent />
        </div>
        )
}

export default Accueil;
