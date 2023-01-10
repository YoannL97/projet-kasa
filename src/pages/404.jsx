import React from "react";
import "../styles/404.css";
import { NavLink } from "react-router-dom";
import {Header} from "../components/Header";

export function Erreur404() {
    return(
        <div>
        <Header />
        <div className="page-404">
            <h1 className="titre-404">404</h1>
            <span className="description-404">Oups! La page que vous demandez n'existe pas.</span>
            <NavLink to="/" className="lien">Retourner sur la page d’accueil</NavLink>
        </div>
        </div>
    );
}

