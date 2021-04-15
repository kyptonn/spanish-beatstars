//PANEL
import React, {useState} from 'react'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import { Navbar } from '../components/Navbar'

import './Dashboard.css'
import { Footer } from '../components/Footer'


export default function Dashboard() {
    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogOut () {
        setError('')
        try{
            await logout()
            history.push('/')
        }catch{
            setError('Failed to log out')
        }
    }
    
    
    return (
        <div>
            <Navbar />
            
            <div className="container-general">
            <div className="botones-generales">
                    <button className="adquiridos">Beats Adquiridos</button>
                    <button className="en-venta">Beats en Venta</button>
                </div>


                <h1>Panel de Usuario</h1>
                <hr></hr>
                {error && <p>{error}</p>}
                <div className="datos-cuenta">
                    <strong>Email: </strong>{currentUser.email}
                    <Link to="/update-profile" className="actualizar">Actualizar<br></br></Link>
                    <br></br>
                    <strong>Contraseña: </strong> ****
                    <Link to="/forgot-password" className="actualizar">Cambiar Contraseña<br></br></Link><br></br>

                    <button variant="link" className="cerrar-sesion" onClick={handleLogOut}>Cerrar Sesión</button>
                </div>
                <br></br>
                <br></br>
               
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}
