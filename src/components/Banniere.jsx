import {Component} from "react"

import "../styles/banniere.css"


export function Banniere(props) {
    return (
        <div className="banniere">
                <img className="banniere-img " src= {props.image} alt="image de fond" />
                <p>{props.texte}</p>
        </div>
        
    )
}
