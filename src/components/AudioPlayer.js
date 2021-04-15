// AUDIO PLAYER
import React, {useContext, useEffect} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Thumbs } from 'swiper';
import CajaBeats from './CajaBeats'

import './AudioPlayer.css'
import { GlobalStateContext } from '../contexts/GlobalState';
import { GlobalSongContext } from '../contexts/CurrentPlaying'


export const Player = () => {
    const [currentSong, setCurrentSong] = useContext(GlobalSongContext)
    const {currentPlaying} = currentSong;

    const [globalState, setGlobalState] = useContext(GlobalStateContext)
    const {beatActivo} = globalState;
    var clasePlayer="player animate__animated animate__fadeIn";
    if(beatActivo == '1'){
        clasePlayer="player-apagado"
    }


 
    
    
    
    return (
        
       
        <div className={clasePlayer}>
           
            <AudioPlayer
                /* autoPlay */
                src={beatActivo}
                onPlay={e => console.log("onPlay")}
                header={currentPlaying}
                // other props here
               
            />
            
        </div>
       
    )
    
}

