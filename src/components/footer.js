//import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import { Row, Col, Image, Form } from 'react-bootstrap'

import footStyle from '../style/footer.module.css'
import fb from "../images/facebook.svg"
import wa from "../images/whatsapp.svg"
import li from "../images/linkedin.svg"
import yt from "../images/youtube.svg"

export default function Footer(props) {
  return (
        <Row className={footStyle.main}>
            <Col xs={12} md={8}>
                <div className={footStyle.calculator}>
                    <div className={footStyle.calculatorTxt}>
                        <h2>¿Sabe cuánto residuo va a generar su obra?</h2>
                        <h4>Descubralo en <span style={{color:"#EE705B"}}>!4 clicks¡</span></h4>
                        <div className={footStyle.btnWrapper}>
                            <a className={footStyle.btn} href="/calculator"><span>Iniciar</span></a>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={12} md={4}>
                <div className={footStyle.news}>
                    <h4>Newsletter </h4>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Su email" />
                            <Form.Text className="text-muted">
                            Nunca te enviaremos spam. 
                            <button type="button">Suscribir</button>
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </div>
            </Col>
            <Col xs={12}>
                <div className={footStyle.links}>
                    <div className={footStyle.linksTop}>
                        <p>cra 43a # 24a - 29 of. 104</p>
                        <p>+571 3165148155</p>
                        <p>info@gresrcd.com</p>
                    </div>
                    <div className={footStyle.linksBottom}>
                        <Image src={wa} className={footStyle.linksImg} />
                        <Image src={fb} className={footStyle.linksImg} />
                        <Image src={yt} className={footStyle.linksImg} />
                        <Image src={li} className={footStyle.linksImg} />
                    </div>
                    <p style={{marginTop:"2rem", textAlign:"center"}}>©2020 Gres s.a.s. derechos reservados</p>
                </div>
            </Col>
        </Row>   
  )
}