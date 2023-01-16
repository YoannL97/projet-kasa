import React from "react";
import "../styles/fiche-logement.css"

function Tag({tags}) {
    return(
        <span className="tag">{tags}</span>
    );
}

export default Tag;