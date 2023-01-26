import { useEffect } from "react";
import { useParams, Navigate} from "react-router-dom"
import "../styles/fiche-logement.css"
import apparts from "../logementData/data.json"

import {Header} from "../components/Header";
import { Carrousel } from "../components/Carrousel";
import {DropDown} from "../components/DropDown"
import {Footer} from "../components/Footer"
import Tag from "../components/Tag";

import { Erreur404 } from "./404";

export function FicheLogement () {
    const appartId = useParams();
    const appart = apparts.find( logement => logement.id === appartId.id);


    
    const tagsLogement = appart.tags.map((tags, index) => {
        return <Tag key={index} tags={tags} />
    });

    const equipLogement = appart.equipments.map((equipement, index) => {
        return <li key={index}>{equipement}</li>
    }
    )

    const star = appart.rating
    const etoileNbr = parseInt(star)

     if (appart) {
       return <Navigate to="/404" replace={true}/>
    }
    
    
    return ( 
      
        
        <div className="fiche-logement">
            <Header /> 
            <Carrousel images={appart.pictures} />
            <div className="appartement-info">
                <div>  
                    <h1>{appart.title}</h1>
                    <p>{appart.location}</p>
            
                    <div className="tags">{tagsLogement}</div>
                </div> 
                <div className="div-info-bas">
                    <div className="host-info">
                        <h2>{appart.host.name}</h2>  
                        <img src={appart.host.picture} />
                    </div>
                    <div className="etoile">
                        <div className={etoileNbr >= 1 ? "etoile-orange" : "etoile-grise"}></div>
                        <div className={etoileNbr >= 2 ? "etoile-orange" : "etoile-grise"}></div>
                        <div className={etoileNbr >= 3 ? "etoile-orange" : "etoile-grise"}></div>
                        <div className={etoileNbr >= 4 ? "etoile-orange" : "etoile-grise"}></div>
                        <div className={etoileNbr >= 5 ? "etoile-orange" : "etoile-grise"}></div>
                    </div>
                </div>

            </div>

            <div className="fiche-logement-dropdown">
                <DropDown content={appart.description} nom="description"/>
                <DropDown content={equipLogement} nom="Equipements" className="fiche-logement-equipement" />
            </div>
            <Footer />
        </div>
    )
   
}


