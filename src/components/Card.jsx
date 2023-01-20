import {Component} from "react"

import "../styles/card.css"

import data from "../logementData/data.json"
import CartContent from "./CardContent";

export function Card () {
    return (
        <div className="card-all">
            {data.map((appart, id) => (
                <CartContent key={id} appart={appart} />
            ))}
        </div>
    )
}
