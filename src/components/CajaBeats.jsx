import React from 'react'
import './CajaBeats.css'
import play from './circuloplay.png'
import verificado from './verificado.png'

export const CajaBeats = () => {
    return (
        <div>
            <div className="beat-container">
                <div className="caja-cuadrada">
                    <img src={play}></img>   
                </div>
                {/* TITULO */}
                <h2>Booba Type Beat</h2>
                {/* ARTISTA */}
                <h3>Svcio Beats<img className="verificado" src={verificado}/></h3>
            </div>
        </div>
    )
}
