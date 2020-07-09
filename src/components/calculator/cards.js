import React from "react"


const imgs = [
    {
      "Obra Civil": require("../../images/calcIcons/crane.svg"),
      "Interiores": require("../../images/calcIcons/arch.svg"),
      "Ampliaciones": require("../../images/calcIcons/wall.svg"),
      "vivienda": require("../../images/calcIcons/home.svg"),
      "comercio": require("../../images/calcIcons/shop.svg"),
      "educación": require("../../images/calcIcons/school.svg"),
      "mobiliario": require("../../images/calcIcons/chair.svg"),
      "rehabilitaciones": require("../../images/calcIcons/spanner.svg"),
      "operaciones": require("../../images/calcIcons/remodel.svg"),
      "Sí": require("../../images/calcIcons/demolition.svg"),
      "No": require("../../images/calcIcons/undemolished.svg"),
      "Calcular": require("../../images/calcIcons/calculator.svg")
    }
  ]

const cols = ["#EE705B", "#005C69","#5B6269","#75B9BE","#087F8C", "#EE705B","#218C97","#5B6269", "#EE705B"]

const Card = (props) => (
    <>
      <div style={{
          display:"flex",
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"center",
          backgroundColor:`${cols[props.num]}`,
          padding:"0.5rem 2rem",
          margin:"0.5rem 1rem"
      }}>
        <img src={imgs[0][`${props.data}`]} alt="obra civil" height="50px" style={{margin:0, color:"#fff"}}/>
        <p style={{margin:"0 1rem", color:"#fff"}}>{props.data}</p>
      </div>
    </>
  )
  
  export default Card;