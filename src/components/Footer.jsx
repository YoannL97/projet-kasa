import { Component } from "react"

import "../styles/footer.css"

import logoBlanc from "../data/logo-blanc.svg"

export function Footer () {
    return(
        <div className="footer">
            <div className="footer-content">
                <img src={logoBlanc} />
                <p>2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}


