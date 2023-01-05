import {Component} from "react"

import "../styles/cart.css"


export function CartContent (props) {
    return(
    fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json")
    .then((response) => response.json())
    .then ((data) => console.log(data))
        /*<div className="cart-content-all">
            <div className="cart-content">
                <h2>{props.titre}</h2>
            </div>
        </div>*/
    
}