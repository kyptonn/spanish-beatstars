import React, {useRef, useState} from 'react'
import './Registro.css'
import logo from '../components/logo-blanco.png'
import { AuthProvider, useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'


export default function Registro() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {registro} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== 
        passwordConfirmRef.current.value){
            return setError('Las contraseñas no coinciden. Inténtalo de nuevo.')
        }

        try{
            setError('')
            setLoading(true)
        await registro(emailRef.current.value, passwordRef.current.value)
        history.push("/panel")
        } catch {
            setError( <div className="error animate__animated animate__bounceIn">Error al crear la cuenta</div>)
        }

        setLoading(false)
    }
   
    return (
        
        <div>
            <div className="inicio-sesion">
            <Link to="/"><img src={logo}></img></Link>
                {/* <h2>Inicia Sesión para continuar</h2> */}
                <h2>Regístrate para continuar</h2>
           

                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="introducir-datos">
                        <h5>Email</h5>
                        <input id="email"type="text" ref={emailRef} placeholder="   Introduce tu email"className="usuario-email"></input>
                        <h5>Contraseña</h5>
                        <input id="password" type="password" ref={passwordRef} placeholder="   Introduce tu contraseña" className="contrasena"></input>
                        <h5>Confirmar Contraseña</h5>
                        <input id="password-confirm" type="password" ref={passwordConfirmRef} placeholder="   Introduce de nuevo la contraseña" className="contrasena"></input>
                        <button disabled={loading} type="submit" className="boton-sesion">Registrarse</button>
                    
                        <h6 className="pregunta">¿Ya estás registrado?<Link to="/inicio-sesion"> Inicia sesión</Link></h6>
                        <h6><Link to="/forgot-password">¿Olvidase tu contraseña?</Link></h6>
                    
                    
                    </div>
                </form>
            </div>


            
        </div>
        
    )
}
