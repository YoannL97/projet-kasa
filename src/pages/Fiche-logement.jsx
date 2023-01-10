import {Component} from "react";
import { useParams } from "react-router-dom"

import apparts from "../logementData/data.json"

import {Header} from "../components/Header";
import { Carrousel } from "../components/Carrousel";

export function FicheLogement () {
    const appartId = useParams();
    const appart = apparts.find( logement => logement.id === appartId.id);

    return (

        <div>
            <Header />
            <Carrousel images={appart.pictures} />

        </div>
        )
}

