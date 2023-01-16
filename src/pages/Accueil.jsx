import {Component} from "react";

import "../styles/accueil.css";
import {Header} from "../components/Header";
import {Banniere} from "../components/Banniere"
import {Card} from "../components/Card";
import {Footer} from '../components/Footer';

export function Accueil () {



    return (
        <div>
            <Header />
            <Banniere />
            <Card />
            <Footer />
        </div>
        )
}

export default Accueil;
