import React, { useState } from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import Layout from "../components/layout"
import SEO from "../components/seo"

import calcStyles from "../style/calculator.module.css"
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap"
import Card from '../components/calculator/cards'
import Displayer from '../components/calculator/displayer'

const Data = [
  {
    "Obra Civil": ["vivienda", "comercio", "educación"],
    "Interiores" : ["mobiliario"],
    "Ampliaciones" : ["rehabilitaciones", "operaciones"]
  }
]


function Calculator() {
  const [type, addType] = useState("none");
  const [subType, addSubtype] = useState("none");
  const [area, addArea] = useState("");
  const [demo, addDemo ] = useState("");
  const [demoArea, adddemoArea ] = useState("");

  function handleType(index) {
    if(subType !== "none") {
      addSubtype("none")
    }
    addType(index)
  }

 return (
  <Layout>
    <SEO title="Page two" />
    <div className={calcStyles.main}>
      <Container className={calcStyles.head} fluid>
       <Fade duration={3000}>
         <h2>Nuestra misión:</h2>
        </Fade> 
        <Fade duration={4500} bottom>
          <p>-Hacer las cosas simples</p>
        </Fade>
      </Container>
    </div>

    <Row className={calcStyles.appWrap}>
        <Col sx={12} md={6}>
          <div style={{display:"flex", alignItems: "center"}}>
            <p className={calcStyles.item}>1</p> 
            <p>¿De qué tipo es su obra? <small style={{color:"#777"}}>{type}</small></p>
          </div>
          <div className={calcStyles.selector}>
            {Object.keys(Data["0"]).map((index, i) => {
              return (
              <button
                style={{
                  backgroundColor:"transparent",
                  border:"none",
                  width:"100%",
                }}
                key={i}
                onClick={() => handleType(index)}>
                <Card data={index} num={i} key={i} />
              </button>
              )
            })}
          </div>
        </Col> 
        <Col sx={12} md={6}>
          <div style={{display:"flex", alignItems: "center"}}>
            <p className={calcStyles.item}>2</p> 
            <p>¿En qué sector? <small style={{color:"#777"}}>{subType}</small></p>
            </div>
            {type === "none" ? 
              <div style={{display:"flex",alignItems:"center", justifyContent:"center", margin:"3rem", padding:"3rem", backgroundColor:"#eee"}}>
                <p>Selecciona el tipo de obra para ver opciones</p>
              </div>
            :
            <div className={calcStyles.selector}>
              {(Data["0"][`${type}`]).map((index, i) => {
                return (
                  <button
                    style={{
                      backgroundColor:"transparent",
                      border:"none",
                      width:"100%",
                    }}
                    key={i}
                    onClick={() => addSubtype(index)}>
                    <Card data={index} num={i} key={i} />
                  </button>
                )
              })}
            </div>
            }
        </Col> 
      </Row>
      <Row className={calcStyles.appWrap}>
        <Col sx={12} md={6}>
          <div style={{display:"flex", alignItems: "center"}}>
            <p className={calcStyles.item}>3</p> 
            <p>¿Cuál es el área de construcción?</p>
          </div>
          <div className={calcStyles.selector}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Ingresa área del proyecto sin símbolos."
              aria-describedby="basic-addon1"
              type="number"
              value={area}
              onChange={(e) => addArea(e.target.value)}
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon1">m2</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          </div>
        </Col> 
        <Col sx={12} md={6}>
          <div style={{display:"flex", alignItems: "center"}}>
            <p className={calcStyles.item}>4</p> 
            <p>¿Tiene fase de demolición?  <small style={{color:"#777"}}>{demo}</small></p>
          </div>
          <div className={calcStyles.selectorDemo}>
                <button
                    style={{
                      backgroundColor:"transparent",
                      border:"none",
                    }}
                    onClick={() => addDemo("Sí")}>
                    <Card data={"Sí"} num={1} />
                </button>
                <button
                    style={{
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      backgroundColor:"transparent",
                      border:"none"
                    }}
                    onClick={() => addDemo("No")}>
                    <Card data={"No"} num={2} />
                </button>
          </div>
        </Col> 
      </Row>
      {demo == "Sí" ?
        <Row className={calcStyles.appWrap}>
          <Col sx={12} md={{spam:4, offset:6}}>
            <div className={calcStyles.selector}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Ingrese área de Demolición."
                  aria-describedby="basic-addon1"
                  value={demoArea}
                  type="number"
                  onChange={(e) => adddemoArea(e.target.value)}
                />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon1">m2</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </Col>
        </Row>
        :
        <></>
      }

      <Displayer 
        type={type} 
        subType={subType}
        area={area}
        demoArea={demoArea}  
      />
  </Layout>
 )
}

export default Calculator
