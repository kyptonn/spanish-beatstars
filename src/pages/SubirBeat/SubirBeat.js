import React, {Component} from 'react';
import firebase from 'firebase';

import UploadFile from '../../components/UploadFile/UploadFile'
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

import './SubirBeat.css'


export default function SubirBeat() {
    return (
        <div>
            <Navbar />
            <div className="container-maestro">
             <h2>Selecciona tu Beat</h2>
             <br></br> <br></br>
            <UploadFile />
            <br></br>
            <h5>El nombre del archivo, será el nombre del Beat</h5>
            <h5>Nunca repitas el nombre de tus Beats</h5>
            <h5>Los Beats que subas, han de estar en perfectas condiciones</h5>
            <h5>Aunque puedes subir tus Beats en .mp3, intenta subirlos siempre en formato .wav. En un futuro esto será obligatorio</h5>
            <Footer />
            </div>
        </div>
    )
}
