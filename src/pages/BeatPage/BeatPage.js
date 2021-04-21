import React, {useState, useEffect, useContext} from 'react'
import { Navbar } from '../../components/Navbar'
import './BeatPage.css'

import {useAuth} from '../../contexts/AuthContext'
import app from '../../firebase'
import firebase from 'firebase/app'
import auth from '../../firebase'

import axios from 'axios'




import metronomo from './metronomo.png'
import metronomo2 from './metronomo2.png'
import reloj from './reloj.png'
import carrito from './carrito.png'
import circuloplay from '../../components/circuloplay.png'

import {Player } from '../../components/AudioPlayer';
import { GlobalStateContext } from '../../contexts/GlobalState';
import { GlobalSongContext} from '../../contexts/CurrentPlaying'
import {GlobalCartItems} from '../../contexts/CartContext'






import play from '../../components/circuloplay.png'

const db = app.firestore()




var windowLocation= window.location   
var dirtyURL = windowLocation.pathname

var cleanURL = dirtyURL.replace("/beat/", "")
var beatURL = parseInt(cleanURL)


console.log(beatURL)


export default function BeatMaker() {

    /////// REPRODUCTOR //////////////////////////////////////////////////////
    const [currentSong, setCurrentSong] = useContext(GlobalSongContext)
    const {currentPlaying} = currentSong;
    useEffect(() => {
        console.log('la base actual se ha actualizado')
    }, [currentSong])

    const [globalState, setGlobalState] = useContext(GlobalStateContext)
    const {beatActivo} = globalState;
    useEffect(() =>{
        console.log('el globalstate se ha actualizado')
    }, [globalState])
    //////////////////////////////////////////////////////////////////////////
   

    
    const [usuario, setUsuario] = useState()

    
    const [titulo, setTitulo] = useState()
    function Titulo(){  
        const [beat, setBeat] = useState()

        const [imagen, setImagen] = useState()
        const [beatmaker, setBeatmaker] = useState()

        useEffect(() => {  
        firebase.firestore().collection('beatsVenta').where('identificador', '==', beatURL).get()
            .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    const datos = doc.data()
            
                   /*  setImagen(datos.imagenURL) */
                    setTitulo(datos.name)
                    setUsuario(datos.usuario)
                
                    /* console.log('hola') */
                    console.log(usuario) 
                })
            })
        },[usuario]) 
        return <h2>{titulo} </h2>

    }

    const [imagen, setImagen] = useState()
    function Imagen(){  
        const [beat, setBeat] = useState()
        const [usuario, setUsuario] = useState()

        const [titulo, setTitulo] = useState()
        const [beatmaker, setBeatmaker] = useState()

        useEffect(() => {  
        firebase.firestore().collection('beatsVenta').where('identificador', '==', beatURL).get()
            .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    const datos = doc.data()
            
                    setImagen(datos.imagenURL)
                    /* setTitulo(datos.name) */
                
                   /*  console.log(imagen) */
                    /* console.log(datos)  */
                })
            })
        },[]) 
        return imagen

    }

    function Usuario(){  
        const [beat, setBeat] = useState()
       

        const [imagen, setImagen] = useState()
        const [titulo, setTitulo] = useState()
        const [beatmaker, setBeatmaker] = useState()

        useEffect(() => {  
        firebase.firestore().collection('beatsVenta').where('identificador', '==', beatURL).get()
            .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    const datos = doc.data()
            
                    setBeatmaker(datos.nombreUsuario)
                   
                    /* console.log(datos)  */
                })
            })
        },[usuario]) 
         return  beatmaker


    }

    function Bpm(){  
        
        const [bpm, setBpm] = useState()
        
        useEffect(() => {  
        firebase.firestore().collection('beatsVenta').where('identificador', '==', beatURL).get()
            .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    const datos = doc.data()
            
                    setBpm(datos.BPM)
                   
                    /* console.log(datos)  */
                })
            })
        },[usuario]) 
         return  bpm


    }   
    
    function Fecha(){  
        
        const [fecha, setFecha] = useState()
        
        useEffect(() => {  
        firebase.firestore().collection('beatsVenta').where('identificador', '==', beatURL).get()
            .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    const datos = doc.data()
                    const fechaM = datos.fecha

                    const seconds = parseInt(fechaM.seconds*1000)

                   


                   
                    var newDate = new Date(seconds).toLocaleDateString("es-ES");
                    setFecha(newDate)
                    
                    /* console.log(datos)  */
                })
            })
        },[usuario]) 
        /* onsole.log(fecha)  */
         return fecha


    }    
    
    const [precio, setPrecio] = useState()
    function Precio(){  
        
        
        useEffect(() => {  
        firebase.firestore().collection('beatsVenta').where('identificador', '==', beatURL).get()
            .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    const datos = doc.data()
                    

                    setPrecio(parseInt(datos.precio))
                   
                })
            })
        },[usuario]) 
        /* onsole.log(fecha)  */
         return precio


    }   
    
    const [URLbeat, setURLBeat] = useState()
    function BeatURL(){  
        
        
        useEffect(() => {  
        firebase.firestore().collection('beatsVenta').where('identificador', '==', beatURL).get()
            .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    const datos = doc.data()
                    
                    setURLBeat(datos.beatUrl)

                    /* console.log(datos)  */
                })
            })
        },[usuario]) 
        /* onsole.log(fecha)  */
         return URLbeat

    }   


    /////// CARRITO //////////////////////////////////////////////////////////
    const [cartItems, setCartItems] = useContext(GlobalCartItems)
    console.log(cartItems)


    const AgregarCarrito = (items, price, image, beatURL) => {
    
        setCartItems(items, price, image, beatURL);
        console.log(cartItems)
    }
    
    //////////////////////////////////////////////////////////////////////////

   

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div>
            <Navbar />
            <div className="container-general-beatmaker">
                <div className="portada">
                    <img className="beatPortada" src={Imagen()}  alt="#"/>
                    <h2> {Titulo()} </h2>

                    <img onClick={(e)=> {console.log(e.target.nextElementSibling.children[1].innerText);
                                        setGlobalState({beatActivo:e.target.nextElementSibling.children[1].innerText});
                                        setCurrentSong({currentPlaying:e.target.nextElementSibling.children[0].innerText});
                                        }} className="circuloplay" src={circuloplay}/> 
                    <div className="info-oculta">
                        <p>{Titulo()}</p>
                        <p>{BeatURL()}</p>
                        
                    </div>

                    <h4>Beat by {Usuario()}</h4>
                    <div className="tempo">
                        <h5><img src={metronomo2}/>{Bpm()}</h5><h5><img src={reloj}/>{Fecha()}</h5>
                    </div>

                    <button onClick={() => AgregarCarrito({titulo, precio, URLbeat, imagen})}   className="boton-compra"><img className="carrito" src={carrito}/>{Precio()}€</button>
              
                </div>
            </div>
            <div className="reproductor">
                <Player /> 
            </div>
        </div>
    )
}
