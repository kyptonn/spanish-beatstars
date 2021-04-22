import React, {useState} from 'react'
import './NavToggler.css'


export default function NavToggler() {

    var [toggler, setToggler] = useState("div-oculto-toggler")
    
    


    return (
        <div className="contenedor-general-navtoggler">

            <div className="ham-toggler-div" >
                <i onClick={() => {setToggler("div-oculto-toggler-activo animate__animated animate__slideInUp")}} class="fas fa-bars fa-lg"></i>
            </div>

            <div className="buscador-inicio-nav">
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span>
                    <input type="text" class="form-control" placeholder="¿Qué estás buscando?" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
           </div>

           <div className={`${toggler} `}>{/* animate__animated animate__slideInUp */}
                <div className="links">
                    <h2>MENU</h2>
                    <i onClick={() => { setToggler("div-oculto-toggler animate__animated animate__slideOutUp")}} class="cruz far fa-times-circle fa-lg"></i>
                    <hr></hr>
                    <h3>Beats</h3>
                    <h3>Beat Makers</h3>
                    <h3>Publica tus Beats</h3>
                    <br></br>
                    <h3>Contacto</h3>
                </div>

           </div>

        </div>
    )
}
