import React from 'react'
import './Home.css'
import {Navbar} from '../components/Navbar'
import CajaBeats from '../components/CajaBeats';
import { Beatmakers } from '../components/Beatmakers';
import { Generos } from '../components/Generos';
import { Footer } from '../components/Footer';

// import Swiper JS
import {Swiper,SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper'
// import Swiper styles
import 'swiper/swiper-bundle.css';




import beats from '../database/beats.json'
 

var searchIcon = <i class="fas fa-search"></i>;
export const Home = () => {
 

    return (
        <div>
            <Navbar />
           
            <div className="imagen-inicio">
                <img width="100%" opacity="" src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="hola"></img>
                <div className="overlay"></div>

                <h2>#1 MARKETPLACE DE HABLA HISPANA</h2>
                {/* <h3>#1 MARKETPLACE DE HABLA HISPANA</h3> */}
            </div>

           {/*  <div className="busqueda-inicio">
                <input className="buscador" placeholder="  Prueba con 'Trap Beat' o 'Reggaeton Beat'"></input>
            </div> */}
            
            <div className="buscador-inicio">
                <div class="input-group mb-3 p-3">
                    <span class="input-group-text" id="basic-addon1">{searchIcon}</span>
                    <input type="text" class="form-control" placeholder="Prueba con 'Trap Beat' o 'Reggaeton Beat'" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
           </div>


            {/*  TOP BEATS DE LA SEMANA   */}      
           <div className="top-beats-semana">
                <h2>Top Beats de la Semana</h2>
                {/*  SWIPER   */}      
                <Swiper
                spaceBetween={0}
                slidesPerView={1.8}       
                >

                    {
                        beats.map((beat) =>  <SwiperSlide><CajaBeats 
                        nombrebeatmaker={beat.nombrebeatmaker}
                        beat1nombre={beat.beat1nombre}
                        imagen={beat.beat1.imagen} //NOS HEMOS KEDADO AKI. HAY QUE IMPORTAR ESTO AL CSS, O BIEN EJECUTAR LA IMAGEN DENTRO DE CAJABEATS.JSX

                        /></SwiperSlide>)
                    }
                </Swiper>
            {/*   SWIPER  */}     
           </div>

            {/*  TOP BEATS DE LA SEMANA   */}      
            <div className="trending-beats">
                <h2>Trending Beats</h2>
                {/*  SWIPER   */}      
                <Swiper
                spaceBetween={0}
                slidesPerView={1.8}       
                >
                   {
                        beats.map((beat) =>  <SwiperSlide><CajaBeats 
                        nombrebeatmaker={beat.nombrebeatmaker}
                        beat1nombre={beat.beat1nombre}
                        imagen={beat.beat1.imagen} //NOS HEMOS KEDADO AKI. HAY QUE IMPORTAR ESTO AL CSS, O BIEN EJECUTAR LA IMAGEN DENTRO DE CAJABEATS.JSX

                        /></SwiperSlide>)
                    }
                   
                </Swiper>
            {/*   SWIPER  */}     
           </div>



            {/*  TOP BEATMAKERS   */}  
            <div className="top-beatmakers">
                <h2>Mejores Beatmakers</h2>
                {/*  SWIPER   */}      
                <Swiper
                spaceBetween={0}
                slidesPerView={1.8}       
                >
                    <SwiperSlide><Beatmakers/></SwiperSlide>
                    <SwiperSlide><Beatmakers/></SwiperSlide>
                    <SwiperSlide><Beatmakers/></SwiperSlide>
                    <SwiperSlide><Beatmakers/></SwiperSlide>
                    <SwiperSlide><Beatmakers/></SwiperSlide>
                    <SwiperSlide><Beatmakers/></SwiperSlide>
                    <SwiperSlide><Beatmakers/></SwiperSlide>
                </Swiper>
                {/*   SWIPER  */} 
            </div>



            {/*  EXPLORAR POR GÉNEROS   */}  
            <div className="generos">
                <h2>Búsqueda por Géneros</h2>
                {/*  SWIPER   */}      
                <Swiper
                spaceBetween={0}
                slidesPerView={1.8}       
                >

                    <SwiperSlide><Generos/></SwiperSlide>
                    <SwiperSlide><Generos/></SwiperSlide>
                    <SwiperSlide><Generos/></SwiperSlide>
                    <SwiperSlide><Generos/></SwiperSlide>
                    <SwiperSlide><Generos/></SwiperSlide>
                    <SwiperSlide><Generos/></SwiperSlide>
                    <SwiperSlide><Generos/></SwiperSlide>
                    <SwiperSlide><Generos/></SwiperSlide>

                </Swiper>
                {/*   SWIPER  */} 
            </div>

            <Footer/>
        </div>
    )
}
