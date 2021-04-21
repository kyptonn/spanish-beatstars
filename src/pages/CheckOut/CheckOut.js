import React, {useContext, useState} from 'react'
import {GlobalCartItems} from '../../contexts/CartContext'
import './CheckOut.css'
import {Link, useHistory} from 'react-router-dom'
export default function CheckOut() {


    const history = useHistory();
    const goBack = () => {
        history.goBack()
      }

     /////// CARRITO //////////////////////////////////////////////////////////
     const [cartItems, setCartItems] = useContext(GlobalCartItems)
     console.log(cartItems)



     const EliminarDelCarrito = () => {
         setCartItems(cartItems.precio=0)
     }

    const MostrarCarrito = () => {
        
        console.log(cartItems.price)

        if(cartItems.price == 0 || cartItems.precio == undefined){
            return(
                <h1>No tienes nada en el carrito</h1>
            )
        }else{
            return (
                    <>
                        <div className="productos">
                            <img className="imagen-beat" src={cartItems.imagen}/>
                            <h1 className="titulo-beat">{cartItems.titulo}</h1>
                            <h1 className="precio-beat">{cartItems.precio}€</h1>
                            <div className="boton-eliminar">
                                <button onClick={() => EliminarDelCarrito()}>Eliminar</button>
                            </div>
                        </div>
                    </>
            )
        }
    }

    const ElementosCheckOut = () => {


        if(cartItems.price == 0 || cartItems.precio == undefined){
            return(
               <button onClick={() => goBack()} className="boton-volver">Volver</button>
               
            )
        }else{
            return (
                    <>
                        <h1 className="total-carrito">Total Carrito: {cartItems.precio}€</h1>
                        <button  className="procesar-pago">Procesar Pago</button>
                    </>
            )
        }
    }

    

    return (
        <div className="contenedor-superior">
            <h1 className="tutilo-carrito">Carrito</h1>

        
            
            {
                [cartItems].map(productos => (
                    <>
                        <MostrarCarrito/>
                        <ElementosCheckOut />
                    </>


            ))}


            
        </div>
    )
}


