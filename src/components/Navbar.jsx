import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from './logo-blanco.png'


export const Navbar = () => {
     
    const [navLinkOpen, setNavLinkOpen] = useState(false)
    

    const cambiarEstado = () =>{
        setNavLinkOpen(!navLinkOpen)
    }

    return (
       <nav>
                <div className="logo">
                <img src={logo} alt="Logo"/>
                </div>

                
                <ul className={'navlinks'}>
                    <Link to='/'><a>Iniciar Sesión</a></Link>
                    {/* <li className="link"><a href="#">Home</a></li>*/}
                    <Link to='/'><a>Vender</a></Link>
                    {/* <li className="link"><a href="#">Services</a></li> */}
                    <Link to='/'><i class="fas fa-shopping-cart"></i></Link>
                    {/* <li className="link"><a href="#">Contact Us</a></li> */}
                    <div onClick={cambiarEstado} className="hamburger-toggle2">
                    
                </div>



                </ul>
                
                

            </nav>
    )
}
