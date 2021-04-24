import React, { useEffect, useRef, useContext, useState } from 'react'
import {useHistory} from 'react-router-dom'
import {GlobalCartItems} from '../contexts/CartContext'
import app from '../firebase'
import {useAuth} from '../contexts/AuthContext'

//Emailjs
/* import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com'

init("user_po6jjIuX0P5WAN6oiuwQb");
 */


import emailjs from 'emailjs-com';




const db = app.firestore()






export default function PayPal() {
    let history = useHistory();


   
    



    // UID DEL USUARIO
    const {currentUser} = useAuth()
    const usuarioID =currentUser.uid 


    // global state del carrito
    const [cartItems, setCartItems] = useContext(GlobalCartItems)
    console.log(cartItems)



    //// PAYPAL
    const paypal = useRef()


    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: cartItems.titulo,
                            amount: {
                                currency_code: "EUR",
                                value: cartItems.precio
                            }
                        }
                    ]
                })
            },
            onApprove: async(data, actions) => {

                const order = await actions.order.capture()
                console.log(order)
                // Lo que quieras hacer despues de la compra (deberemos imprimir los datos de "order" a la base de datos)
                // // METODO A - SUBIMOS ARCHIVO A DB CREANDO UNA SUBCOLECCION
                
                db.collection('users/').doc(usuarioID).collection('beatsAdquiridos').doc(cartItems.titulo).set({
                    name: cartItems.titulo,
                    beatUrl: cartItems.URLbeat,
                    imagenURL: cartItems.imagen,
                    precio: cartItems.precio,
                    usuario: usuarioID,
                    
                    //falta importar los datos de order
                    idTransaccion: order.id,

                    fecha: order.create_time,
                    status: order.status,
                    payerID: order.payer.payer_id,
                    payerEmail: order.payer.email_address,
                    payerNombre: order.payer.name.given_name
                    
                }) 

                /// EMAIL //////////////////////////////////////////////

               /*  function sendMail(params) { */
                    var templateParams= {
                        to_email:`${order.payer.email_address}`,
                        to_name:`${order.payer.name.given_name}`,
                        nombre_beat:`${cartItems.titulo}`,
                        precio_beat:`${cartItems.precio}€`,
                        transaccion_id:`${order.id}`,
                        transaccion_fecha:`${order.create_time}`,
                        descarga_url:`${cartItems.URLbeat}`
                    };
                    
                    emailjs.send('service_ox3ok2x','template_z3pkeuk',templateParams, 'user_po6jjIuX0P5WAN6oiuwQb')
                    .then((res) => {
                        console.log("success", res.status);
                    });
               /*  } */



                ////////////////////////////////////////////////////////
               


                await history.push("/orden-confirmada"); 

            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    }, [])



    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}
