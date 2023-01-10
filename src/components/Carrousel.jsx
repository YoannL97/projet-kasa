import {Component} from "react"

import flecheGauche from "../data/Vector.png"
import flecheDroite from "../data/VectorD.png"

import "../styles/carrousel.css"

export function Carrousel ({images}) {
    let nbrImage = images.length;
    //console.log(nbrImage);

    let longeur = document.querySelector(".carrousel-image")
    //longeur.style.width = 
    return (
        <div className="carrousel">
            <div className="carrousel-content">
                
                <img src={flecheGauche} className="fleche-gauche" />
                <img src={flecheDroite} className="fleche-droite" />

                {
                images.map((image, index) => {
                    return(
                        <img key={index} className="carrousel-image" src={image} />
                    )
                    }
                    )
                }

            </div>
        </div>
    )
}