import React, {useState} from 'react'
import './NavToggler.css'

// MEDIA QUERY
import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive';


export default function NavToggler() {

    var [toggler, setToggler] = useState("div-oculto-toggler")
    var [overlay, setOverlay] = useState("overlay-nav-toggler")
    


    return (

        <div className="contenedor-general-navtoggler">
            <MediaQuery maxWidth={1371}>

            <div className="ham-toggler-div" >
                <i onClick={() => {setToggler("div-oculto-toggler-activo animate__animated animate__slideInUp");
                                    setOverlay("overlay-nav-toggler-activo")}} class="fas fa-bars fa-lg"></i>
            </div>

            <div className="buscador-inicio-nav">
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span>
                    <input type="text" class="form-control" placeholder="¿Qué estás buscando?" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
           </div>



        

            <div className={overlay}></div>
            <div className={`${toggler} `}>{/* animate__animated animate__slideInUp */}
                <div className="links">
                    <h2>MENU</h2>
                    <i onClick={() => { setToggler("div-oculto-toggler animate__animated animate__slideOutUp");
                                        setOverlay("overlay-nav-toggler")}} class="cruz far fa-times-circle fa-lg"></i>
                    <hr></hr>
                    <br></br>
                    <h3>Beats</h3>
                    <h3>Beat Makers</h3>
                    <h3>Publica tus Beats</h3>
                    <br></br>
                    <h3>Contacto</h3>
                </div>

            </div>
            </MediaQuery>
        </div>
    )
}
