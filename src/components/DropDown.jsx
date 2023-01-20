import React from "react";
import { useState } from "react";
import "../styles/dropDown.css"


import fleche from "../data/fleche-haut.svg"

export function DropDown (props) {

    const [close, open] = useState(false)


    return(
        <div className="drop-down-fiche">
            <div className="drop-down-haut">
                
                <p>{props.nom}</p>
                
                <img src={fleche} onClick={() => open(!close)} className={close ? "haut" : "bas"}/>
                
            </div>
            <div className={close ? "on" : "off"}>
                <p>{props.content}</p>
            </div>
        </div>
    )
}
