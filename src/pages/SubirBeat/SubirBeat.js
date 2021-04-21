import React, {Component} from 'react';
import firebase from 'firebase';

/* import Dots from 'react-activity/lib/Dots';
import 'react-activity/lib/Dots/Dots.css'; */

import {UploadFile} from '../../components/UploadFile/UploadFile'
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

import './SubirBeat.css'
import { Link } from 'react-router-dom';


export default function SubirBeat() {
    return (
        <div>
            <Navbar />
            <div className="container-maestro">
             <h2>Selecciona tu Beat</h2>
             <br></br> <br></br>
            <UploadFile />
            <br></br>

            <div className="instrucciones">
                {/* <h4>Instrucciones</h4>
                <h5>Selecciona tu Beat (solo archivos .wav)</h5>
                <h5>Escribe el Nombre de tu Beat</h5>
                <h5>Espera 2 segundos (por si las moscas), y presiona "Subir Beat"</h5> */}
               {/*  <h4>Normas</h4>
                <h5>Nunca repitas el nombre de tus Beats</h5>
                <h5>Los Beats que subas, han de estar en perfectas condiciones</h5>
                <h5>Sube tus Beats en formato <strong>'.wav'. Cualquier Beat que no esté en ese formato será elminado</strong></h5>
                <Link to="/condiciones-licencias"><p>Condiciones Licencias</p></Link> */}
            </div>


            </div>
            <Footer />
        </div>
    )
}
