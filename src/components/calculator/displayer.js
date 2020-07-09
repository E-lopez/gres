import React, { useState } from "react"
import { Row, Col, Container } from "react-bootstrap"
import calcStyles from "../../style/calculator.module.css"
import Card from './cards'
import Graph from './graph'


const Data = [
    {
      "none":{
          "none":{"none":""}
        },
      "Obra Civil": {
        "none":{
            "none":""
          },
          "vivienda":{
            "Chatarra":0.0515,
            "Cartón":0.01,
            "Plásticos":0.0250,
            "drywall":0.0435,
            "especiales":0.07,
            "pétreos":0.14,
            "basuras":0.035
          },
          "comercio":{
            "Chatarra":0.0515,
            "Cartón":0.01,
            "Plásticos":0.0250,
            "drywall":0.0435,
            "especiales":0.07,
            "pétreos":0.14,
            "basuras":0.035
          },
          "educación":{
            "Chatarra":0.0515,
            "Cartón":0.01,
            "Plásticos":0.0250,
            "drywall":0.0435,
            "especiales":0.07,
            "pétreos":0.14,
            "basuras":0.035
          }
      },
      "Interiores" : {
        "none":{
            "none":""
          },
          "mobiliario" : {
            "chatarra":0.18,
            "cartón":0.09,
            "plásticos":0.0775,
            "drywall":0.2,
            "especiales":0.18,
            "pétreos":0.07,
            "basuras":0.5
          }
      },
      "Ampliaciones" : {
        "none":{
            "none":""
          },
          "rehabilitaciones":{
            "Chatarra":0.025,
            "Cartón":0.02,
            "Plásticos":0.015,
            "drywall":0.1,
            "Chatarra":0.025,
            "Cartón":0.02,
            "Plásticos":0.015,
            "drywall":0.1
          },
          "operaciones":{
            "Especiales":0.04,
            "Petreos":0.07,
            "basuras":0.07,
            "Chatarra":0.025,
            "Cartón":0.02,
            "Plásticos":0.015,
            "drywall":0.1
          }
      }
    }
  ]

function Displayer(props){
    const [total, addTotal] = useState(0)
    const [amounts, addAmount] = useState({"Especiales":0,
                                            "Petreos":0,
                                            "basuras":0,
                                            "Chatarra":0,
                                            "Cartón":0,
                                            "Plásticos":0,
                                            "drywall":0})



    function handleChange() {
        var demoArea = props.demoArea === "" ? 0 : props.demoArea 
        var area = props.area === "" ? 0 : props.area 
        var parcial = {}
        var resTotal = 0

        Object.keys(Data["0"][`${props.type}`][`${props.subType}`]).map((index, i) => {
            var factor = Data["0"][`${props.type}`][`${props.subType}`][`${index}`]
            area = parseInt(area) + parseInt(demoArea)
            var res = parseFloat(factor)*area
            parcial[index] = res.toFixed(1)

            resTotal = resTotal + res
        })  
        
        return [addAmount(parcial), addTotal(resTotal)]
    }

    return(
        <Row className={calcStyles.displayWrap}>
            <Col xs={12}>
                <button
                style={{
                  backgroundColor:"transparent",
                  border:"none",
                  width:"100%",
                  marginBottom:"1rem"
                }}
                    onClick={() => handleChange()}>
                    <Card data={"Calcular"} num={1} />
                </button>
            </Col>
            <Col xs={12} md={4}>
                <div className={calcStyles.mainFigures}>
                    <p style={{color:"#495159", fontSize:"18px"}}>- Tipo de residuo</p>
                    <div style={{}}>
                    {Object.keys(amounts).map((index, i) => {
                        return(
                            <div style={{display:"flex", flexDirection:"row", borderBottom:"solid 1px #eee"}} key={i}>
                                <p className={calcStyles.mainLabels}>
                                    {index}
                                </p>
                                <div style={{width:"100%", textAlign:"right"}}>
                                    <p style={{ fontFamily:"monospace", fontSize:"1.5rem", color:"#005C69"}}>{amounts[index]}m3</p>
                                </div>
                            </div>
                        )
                    })    
                    }
                    </div>
                    <div style={{backgroundColor:"#eee", color:"#005C69", textAlign:"right", padding:"0 0.2rem"}}>
                        <h1>
                            <span style={{fontSize:"1rem", color:"#777"}}>total  </span> 
                            {total.toFixed(1)}
                            <span style={{fontSize:"1rem"}}>m3</span>
                        </h1>
                    </div>
                </div>
            </Col>
            <Col xs={12} md={8}>
                <Graph data={amounts} />
            </Col>
        </Row>
    )
}
  
export default Displayer;