import { useState, useEffect } from 'react'

import { Tech } from './tech'

import './info.css'

export function Info({curriculum}){

    const [cv, setCv] = useState([])

    useEffect(()=>{
        setCv(curriculum)
    },  [])

    return(
        <>
        <section className="lenguaje">
            <h1>Lenguajes y técnologia</h1>

            <div className="lenguaje-content">
                <Tech icon='icons/html-5.png' lenguaje='HTML' ani='4'></Tech>
                <Tech icon='icons/css-3.png' lenguaje='CSS' ani='3'></Tech>
                <Tech icon='icons/js.png' lenguaje='JavaScript' ani='10'></Tech>
                <Tech icon='icons/php.png' lenguaje='PHP' ani='3'></Tech>
                <Tech icon='icons/react.png' lenguaje='React' ani='5'></Tech>
                <Tech icon='icons/nodejs.png' lenguaje='NodeJS' ani='6'></Tech>
                <Tech icon='icons/next.png' lenguaje='NextJS' ani='5'></Tech>
            </div>

        </section>

        <section className='integrantes' id='info'>
            <h1>Integrantes</h1>

            <div className='cv'>
                {cv.map((cvItem, index)=>(
                        
                        <article className={`cv-content ${index === 0 ? 'violet' : 'green'}`}  key={cvItem.id}>
                            <div className='image-profile'>
                                <img src={cvItem.thumbnail} alt="" />
                            </div>
                            <div className='info-profile'>
                                <h2>{cvItem.nombre}</h2>
                                <div className='desc-profile'>
                                    <h4>{cvItem.desc}</h4>
                                    <ul>
                                        <li>{cvItem.espe1}</li>
                                        <li>{cvItem.espe2}</li>
                                        <li>{cvItem.espe3}</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='links-profile'>
                                <button><img src="icons/descargar.png" alt="" />Descargar CV</button>
                                <button><img src="icons/direccion.png" alt="" />Portafolio</button>
                            </div>
                        </article>
                    ))}
            </div>

        </section>
        </>
    )
}