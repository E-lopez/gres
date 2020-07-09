import React from "react"
import Fade from 'react-reveal/Fade';
import { Image, Col } from 'react-bootstrap'
import "../style/layout.css"

import indexStyles from "../style/index.module.css"

const Content = [
    {
        text: "Asume costos asociados al movimiento o trasiegos de residuos.",
        fade: 3000,
        size: 4,
        color: "#829E99",
    },
    {
        text: "Su cronograma se ha visto afectado por procesos relacionados con la disposición de residuos.",
        fade: 3000,
        size: 4,
        color: "#A3CDA5"
    },
    {
        text: "Necesita contactar a varios gestores para cada tipo de residuo.",
        fade: 3000,
        size: 8,
        color: "#83C0C4"
    },
    {
        text: "Sus puntos de acopio interfieren con la actividad constructiva y obstaculizan el movimiento de su equipo de trabajo.",
        fade: 3000,
        size: 4,
        color: "#F8B238"
    },
    {
        text: "Además de disponer, quiere constribuir a la reintegración de los residuos en el ciclo productivo.",
        fade: 3000,
        size: 4,
        color: "#F37E53"
    },
    {
        text: "No sabe con seguridad si el lugar de disposición de sus residuos está certificado por las autoridades competentes.",
        fade: 3000,
        size: 4,
        color: "#A3CDA5"
    },
    {
        text: "En cada Proyecto, invierte recursos financieros y mano de obra para fabricar su centro de acopio.",
        fade: 3000,
        size: 8,
        color: "#829E99"
    },
    {
        text: "La sostenibilidad ambiental y las certificaciones LEED son capitales para su negocio.",
        fade: 3000,
        size: 4,
        color: "#83C0C4"
    },

]

export default function Process() {
  return (
    <>
        {Object.keys(Content).map(function(index, i) {
           const item = Content[index]
            return (
                <Col xs={12} md={`${item.size}`} key={i}>
                    <Fade duration={item.fade} bottom> 
                        <div style={{backgroundColor: "#eee", height: "18rem", padding: "0 1rem", border:"solid 4px #fff"}}>
                            <div className={`${item.size>4?indexStyles.cardWide:indexStyles.card}`}>
                                <div className={`${item.size>4?indexStyles.cardHeaderWide:indexStyles.cardHeader}`}>
                                    <h1>{i+1}</h1>
                                </div>
                                <div className={`${item.size>4?indexStyles.cardBodyWide:indexStyles.cardBody}`}>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>
                        
                    </Fade>
                </Col>
              )
            })
        }

        <Col className='d-xs-block d-md-none'>
            <div style={{height:"10rem"}}>
            <p></p>
            </div>
        </Col>
    </>
  )
}



