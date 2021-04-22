import React , {useState, useEffect, useContext} from 'react'
import firebase, { db, auth } from '../../firebase'
import play from '../../components/circuloplay.png'
import {Link} from 'react-router-dom'

import './BeatsAll.css'
import { Navbar } from '../../components/Navbar'

import {Player } from '../../components/AudioPlayer';
import { GlobalStateContext } from '../../contexts/GlobalState';
import { GlobalSongContext} from '../../contexts/CurrentPlaying';




export default function BeatsAll() {
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

 const [estadoReproductor, setEstadoReproductor] = useState(play)
////////////////////////////////////////////////////////////////////////////


    const [spells, setSpells] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection("beatsVenta").get()
            setSpells(data.docs.map(doc => doc.data()))
        }
        fetchData()

    },[])

    console.log(spells)





    return (

        <div>
            <Navbar />

            <div className="superior-all">
                <h1>Top Beats</h1>
                <div className="general-all">
                    {spells.map(spell => (
                    

                            <div /* onClick={(e) => {console.log(e.target.nextElementSibling.children[1].innerText);}}  */ className="beat-container-all">    
                                <div className="caja-cuadrada-all">
                                <img src={play}   
                                    onClick={(e) => {console.log(e.target.nextElementSibling.children[1].innerText);
                                    setGlobalState({beatActivo:e.target.nextElementSibling.children[0].innerText});
                                    setCurrentSong({currentPlaying:e.target.nextElementSibling.children[1].innerText});                            
                                    }} className="playerstop-all" /> 


                                    <div className="info-oculta">
                                        <p>{spell.beatUrl}</p>
                                        <p>{spell.name}</p> 
                                    </div>



                                    <Link to={`/beat/${spell.identificador}`}>   

                                    <img className="imagen-fondo-beats-all"src={spell.imagenURL}/>

                                    <div className="info-oculta">
                                        <p>{spell.beatUrl}</p> 
                                    </div>
                                    </Link> 

                                </div>

                                <h4>{spell.precio}€</h4>
                                <h2 key={spell.name}>{spell.name}</h2>
                                <h3>{spell.nombreUsuario}</h3>
                            </div>
                        
                    ))}
                </div>

            </div>
            <div className="reproductor-all">
            <Player /> 
        </div>
        </div>
    )
}
