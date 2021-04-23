import React, { useState, useEffect } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from './logo-blanco.png'
import firebase from '../firebase'

export const Navbar = () => {
    

    // Mostrar/Ocultar botón "Inicio Sesión"
    const user = firebase.auth().currentUser;

    const [logeado, setLogeado] = useState()

    useEffect(() =>{        
        if(user){
            setLogeado("inicio-sesion-link-logeado")
        }else{
            setLogeado("inicio-sesion-link")
        }
    },[])

   
    
   
   
     
    const [navLinkOpen, setNavLinkOpen] = useState(false)
    
    const cambiarEstado = () =>{
        setNavLinkOpen(!navLinkOpen)
    }

    return (
       <nav>
                <div className="logo">
                <Link to="/"><img src={logo} alt="Logo"/></Link>
                </div>

                
                <ul className={'navlinks'}>
                    <Link to='/inicio-sesion'><a className={logeado}>Iniciar Sesión</a></Link>
                   
                    {/* <li className="link"><a href="#">Home</a></li>*/}
                    <Link to='/subir-beat'><a>Subir</a></Link>
                    <Link to='/panel'><a>Panel</a></Link>
                    {/* <li className="link"><a href="#">Services</a></li> */}
                    <Link to='/carrito'><i class="fas fa-shopping-cart"></i></Link>
                    {/* <li className="link"><a href="#">Contact Us</a></li> */}
                    <div onClick={cambiarEstado} className="hamburger-toggle2">
                    
                </div>


                
                </ul>
                
                

            </nav>
    )
}
