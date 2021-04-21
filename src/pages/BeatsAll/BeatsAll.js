import React , {useState, useEffect} from 'react'
import firebase, { db, auth } from '../../firebase'
import play from '../../components/circuloplay.png'


import './BeatsAll.css'
import { Navbar } from '../../components/Navbar'





export default function BeatsAll() {


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

            <div className="superior">
                <h1>Top Beats</h1>
                <div className="general">
                    {spells.map(spell => (
                    

                            <div /* onClick={(e) => {console.log(e.target.nextElementSibling.children[1].innerText);}}  */ className="beat-container">    
                                <div className="caja-cuadrada">
                                {/* <img src={play}   
                                    onClick={(e) => {console.log(e.target.nextElementSibling.children[1].innerText);
                                    setGlobalState({beatActivo:e.target.nextElementSibling.children[0].innerText});
                                    setCurrentSong({currentPlaying:e.target.nextElementSibling.children[1].innerText});                            
                                    }} className="playerstop" />  */}


                                    <div className="info-oculta">
                                        <p>{spell.beatUrl}</p>
                                        <p>{spell.name}</p> 
                                    </div>
                                    <img className="imagen-fondo-beats"src={spell.imagenURL}/>

                                    <div className="info-oculta">
                                        <p>{spell.beatUrl}</p> 
                                    </div>
                                </div>

                                <h4>{spell.precio}€</h4>
                                <h2 key={spell.name}>{spell.name}</h2>
                                <h3>{spell.nombreUsuario}</h3>
                            </div>
                        
                    ))}
                </div>

            </div>
        </div>
    )
}
