import React from "react";
import { Link } from "react-router-dom";

import "../styles/card.css"
import "../pages/Fiche-logement"

const CartContent = ({appart}) => {
    console.log(appart);
    return (
        <Link to="/fiche-logement">
            <div className="card-content">
                    <img src={appart.cover} />   
                    <h2>{appart.title}</h2>
            </div>
        </Link>
    )
}

export default CartContent