import React from "react"
//import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import { Image, Row, Col } from 'react-bootstrap'

import Layout from "../components/layout"
import Bullets from "../components/section_1"
import Process from "../components/section_2"

import SEO from "../components/seo"

import indexStyles from "../style/index.module.css"
import coca from "../images/icons.png"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className={indexStyles.main}>
        <Fade duration={4500} top>
          <h3>
            un proceso, una factura, un contacto, un sistema único... 
          </h3>
        </Fade>
        <Fade duration={3000}>
          <h2>Gestión <span style={{ color: "#08778c"}}> Avanzada </span>
                de residuos RCD</h2> 
          <div className={indexStyles.btnWrapper}>
            <a href="#second" className={indexStyles.btn}><span>Ver más</span></a>
          </div>
        </Fade>
        <div id="second" style={{position:"absolute", bottom:"0", color: "transparent"}}>...</div>
      </div>
      
      <div  className={indexStyles.general}>
        <Row className="justify-content-sm-center">
            <div className={indexStyles.bullets}>
              <h2>Lo que <span style={{color:"#087f8c"}}>hacemos</span></h2> 
              <Row>
                 <Bullets />
              </Row> 
            </div>
        </Row>       
      </div>

      <div className={indexStyles.process}>
        <Row noGutters>
          <Col xs={12} md={8}>
            <h2><span style={{color:"#087f8c", fontSize: "4rem"}}>8</span> señales de que nos necesita en su proyecto</h2> 
          </Col>
          <Process />
        </Row>
        <div className={indexStyles.btnWrapperProcess}>
          <p className={indexStyles.btn}><span>Hablemos</span></p>
        </div>
      </div>

      <div className={indexStyles.process}>
        <Fade duration={3000} bottom>
          <Row>
            <Col xs={12} md={8}>
              <h2 style={{textAlign:"left", marginTop:"0"}}>Nuestro equipo ha tenido la<span style={{color:"#087f8c", fontSize: "3rem"}}>oportunidad</span> de trabajar con ellos</h2> 
            </Col>
            <Col xs={12} style={{backgroundColor:"#087F8C", padding:"2rem"}}>
              <Image src={coca} style={{margin:0}} />
            </Col>
          </Row>
        </Fade>
      </div>

      <div className={indexStyles.contact}>
        <Row className="justify-content-sm-center">
            <div className={indexStyles.contactInfo}>
              <h2>Tenemos mucho de que hablar...</h2> 
              <div className={indexStyles.btnWrapperContact}>
                <p className={indexStyles.btn}><span>Contactenos</span></p>
              </div>            
            </div>
        </Row>       
      </div>
  </Layout>
)

export default IndexPage
