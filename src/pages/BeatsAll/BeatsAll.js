import React , {useState, useEffect, useContext} from 'react'
import firebase, { db, auth } from '../../firebase'
import play from '../../components/circuloplay.png'
import {Link, useHistory} from 'react-router-dom'

import './BeatsAll.css'
import { Navbar } from '../../components/Navbar'

import {Player } from '../../components/AudioPlayer';
import { GlobalStateContext } from '../../contexts/GlobalState';
import { GlobalSongContext} from '../../contexts/CurrentPlaying';
import { GlobalSearchContext} from '../../contexts/SearchContext';

var searchIcon = <i class="fas fa-search"></i>;


export default function BeatsAll() {
    let history = useHistory();
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







// BUSCADOR

    const [preBuscador, setPreBuscador] = useState()
    const [buscador, setBuscador] = useContext(GlobalSearchContext);


   /*  console.log(buscador) */

    const getDatos= async () => {
        const datosFiltrados = preBuscador.split(" ");
        console.log(datosFiltrados)

        setBuscador(datosFiltrados);

        await history.push(`/search?q=${datosFiltrados}`);
    }







///////////






    return (

        <div className="contenedor-general-beatsall">
            <Navbar />


            <form onSubmit={e => {e.preventDefault();getDatos()}}>
            <div className="filtros-buscador">
                <div class="input-group mb-3 p-3">
                    <span class="input-group-text" id="basic-addon1">{searchIcon}</span>
                    <input type="text" onChange={e => setPreBuscador(e.target.value)} class="form-control" placeholder="Prueba con 'Trap Beat' o 'Reggaeton Beat'" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
            </div>
            </form>


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
                                <Link to={`/profile/${spell.nombreUsuario}`}>
                                    <h3>{spell.nombreUsuario}</h3>
                                </Link>
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
