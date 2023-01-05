import {Component} from "react"

import "../styles/banniere.css"

import imageBack from '../data/IMG.png'

export function Banniere() {
    return (
        <div className="banniere">
                <img className="banniere-img " src= {imageBack} alt="image de fond" />
                <p>Chez vous, partout et ailleurs</p>
        </div>
        
    )
}
