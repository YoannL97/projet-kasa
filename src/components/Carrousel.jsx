import {Component} from "react"
import { useState } from "react";

import flecheGauche from "../data/Vector.png"
import flecheDroite from "../data/VectorD.png"

import "../styles/carrousel.css"

export function Carrousel ({images}) {
    const [position, setposition] = useState(0)
    let nbrImage = images.length;

    return (
        <div className="carrousel">
            <div className="carrousel-content">
                
                <img src={flecheGauche} className="fleche-gauche" />
                <img src={flecheDroite} className="fleche-droite" />

                {images.map((image, index) => {
                    return(
                        <div
                            key={index}
                            className={
                                index === position ? "image-active" : "image-inactive"
                            }
                        >
                            {index === position && (
                                <img src={image} className="image-active" />
                            )}
                        </div>
                    )
                    }
                    )
                }

            </div>
        </div>
    )
}