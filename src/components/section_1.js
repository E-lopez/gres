import React from "react"
import Fade from 'react-reveal/Fade';
import { Image, Col } from 'react-bootstrap'
import "../style/layout.css"

import pg from "../images/pg.svg"
import mgn from "../images/mgn.svg"
import disp from "../images/disp.svg"
import cls from "../images/cls.svg"

import indexStyles from "../style/index.module.css"


const Content = [
    {
        title: "Planificación Ambiental",
        text: "Puntos ecológicos, señalización, capacitaciones y gestión del cambio.",
        Img: pg,
        fade: 3000
    },
    {
        title: "Gestión de Proyecto",
        text: "Coordinamos transporte, certificaciones de disposición y garantizamos sus puntos LEED.",
        Img: mgn,
        fade: 5000
    },
    {
        title: "Separación en la Fuente",
        text: "Instalación de centro de acopio gres©, garantizamos la separación en la fuente, pesaje y mantenimiento de entorno.",
        Img: disp,
        fade: 7000
    },
    {
        title: "Orden y Aseo",
        text: "Aseo fino, entrega de certificados y cierre de PIN ambiental.",
        Img: cls,
        fade: 8500
    }
]

export default function Bullets() {
  return (
    <>
        {Object.keys(Content).map(function(index, i) {
           const item = Content[index]
            return (
                <Col xs={12} md={3} key={i}>
                    <Fade duration={item.fade}> 
                        <h4>
                        <Image src={item.Img} className={indexStyles.Image}/>
                        <br/>{item.title}
                    </h4>
                        <p style={{textAlign:"center", fontSize:"1rem"}}>{item.text}</p>
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



