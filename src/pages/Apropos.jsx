import {Component} from "react";

import "../styles/accueil.css";
import {Header} from "../components/Header";
import {Banniere} from "../components/Banniere"
import { DropDown } from "../components/DropDown";
import {Footer} from "../components/Footer"

import imageBack from "../data/imageApropos.svg"

export function Apropos () {



    return (
        <div>
            <Header />
            <Banniere image={imageBack} />
            <div className="drop-down-Apropos">
                <div className="drop-down-Apropos-content">
                    <DropDown nom="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements, et toutes les informations sont 
                    régulièrement vérifiées  par nos équipes."/>
                    <DropDown nom="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                    <DropDown nom="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                    N'hésitez pas à nous contacter si vous avez la moindre question."/>
                    <DropDown nom="Responsabilité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
                    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
                </div>
            </div>
            <Footer />
        </div>
        )
}
