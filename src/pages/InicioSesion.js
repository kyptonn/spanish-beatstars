import React, {useRef, useState} from 'react'
import './Registro.css'
import logo from '../components/logo-blanco.png'
import { AuthProvider, useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'


export default function InicioSesion() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const {inicioSesion} = useAuth()
    const {registro} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

       
        try{
            setError('')
            setLoading(true)
        await inicioSesion(emailRef.current.value, passwordRef.current.value)
        history.push("/panel")
        } catch {
            setError(  <div className="error animate__animated animate__bounceIn">Error al iniciar sesión</div>)
        }

        setLoading(false)
    }
   
    return (
        
        <div>
            <div className="inicio-sesion">
                <Link to="/"><img src={logo}></img></Link>
                {/* <h2>Inicia Sesión para continuar</h2> */}
                <h2>Inicia sesión para continuar</h2>
           
              
                    {error && <p>{error}</p>}
             
                <form onSubmit={handleSubmit}>
                    <div className="introducir-datos">
                        <h5>Email</h5>
                        <input id="email"type="text" ref={emailRef} placeholder="   Introduce tu email"className="usuario-email"></input>
                        <h5>Contraseña</h5>
                        <input id="password" type="password" ref={passwordRef} placeholder="   Introduce tu contraseña" className="contrasena"></input>
                        <button disabled={loading} type="submit" className="boton-sesion">Iniciar Sesión</button>




                        <h6 className="pregunta">¿Aún no estás registrado? <Link to="/registro">Regístrate</Link></h6>
                       

                        <h6><Link to="/forgot-password">¿Olvidase tu contraseña?</Link></h6>
                    
                    
                    </div>
                </form>
            </div>


            
        </div>
        
    )
}
