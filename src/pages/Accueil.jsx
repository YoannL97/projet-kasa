import {Component} from "react";

import "../styles/accueil.css";
import {Header} from "../components/Header";
import {Banniere} from "../components/Banniere"
import {Card} from "../components/Card";
import {Footer} from '../components/Footer';

import imageBack from '../data/IMG.png'

export function Accueil () {



    return (
        <div>
            <Header accueil="active" />
            <main>
            <Banniere image={imageBack} texte="Chez vous, partout et ailleurs"/>
            <Card />
            </main>
            <Footer />
        </div>
        )
}

export default Accueil;
