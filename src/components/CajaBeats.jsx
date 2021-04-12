import React from 'react'
import './CajaBeats.css'

import play from './circuloplay.png'
import verificado from './verificado.png'



export default class CajaBeats extends React.Component{

    render(){
        console.log(this.props.beatimagen1)
        var imagen = this.props.imagens
        return (
            <div>
                <div className="beat-container">
                    <div className="caja-cuadrada">
                        <img className="imagen-fondo-beats"src={this.props.imagen}></img> 
                        <img className="playStop"src={play}></img> 

                    </div>
                    {/* TITULO */}
                    <h2>{this.props.beat1nombre}</h2>

                    {/* ARTISTA */}
                    <h3>{this.props.nombrebeatmaker}<img className="verificado" src={verificado}/></h3>
                </div>
            </div>
        )
    }
}
