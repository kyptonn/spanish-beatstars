import React, {useState, useEffect} from 'react'
import { Navbar } from '../../components/Navbar'
/* import db from '../../firebase' */

import app from '../../firebase'
import firebase from '../../firebase'
import auth from '../../firebase'


import './BeatPage.css'

import metronomo from './metronomo.png'
import metronomo2 from './metronomo2.png'
import reloj from './reloj.png'
import carrito from './carrito.png'

// Atualmente, cualquier URL que tenga "beat/", se redirigirá a la BeatPage.
// El objetivo ahora es hacer un barrido de la DB, en la colección de "beatsVenta",
// y conseguir (hacer que coincida) algun beat con la URL final.


const db = app.firestore()



var windowLocation= window.location   
var dirtyURL = windowLocation.pathname

var cleanURL = dirtyURL.replace("/beat/", "")
var beatURL = parseInt(cleanURL)


console.log(beatURL)


export default function BeatMaker() {

    const [beat, setBeat] = useState()
    const [usuario, setUsuario] = useState()



    useEffect(() => {
            firebase.firestore().collection('beatsVenta').where('identificador', '==', beatURL).get()
            .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    const datos = doc.data()
                    setBeat(datos);
                   
                })
            })
      
       
    },[])

  
    console.log(beat)       


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div>
            <Navbar />
            <div className="container-general-beatmaker">
                <div className="portada">
                    
                    <img className="beatPortada" src=""/* {beat.imagenURL}  */ alt="#"/>
                    <h2>{/* {beat.name} */} </h2>
                    <h4>Beat by </h4>
                    <div className="tempo">
                        <h5><img src={metronomo2}/>120</h5><h5><img src={reloj}/>16 Abril, 2021</h5>
                    </div>
                    
                        <button className="boton-compra"><img className="carrito" src={carrito}/>50,00€</button>
               
                
                </div>


            </div>
        </div>
    )
}
