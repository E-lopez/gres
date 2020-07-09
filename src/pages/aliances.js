import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RegisterNew from "../components/Aliances/registerNew"
import formStyles from "../style/form.module.css"
import { Row, Col } from "react-bootstrap"

const Aliances = () => (
  <Layout>
    <SEO title="Page two" />
    <div className={formStyles.main}>
      <h1 className={formStyles.head}>Conviértase en <span style={{color:"#EE705B"}}>aliado</span></h1>
      <Row>
        <Col sx={12} md={{span: 8, offset: 2}}>
          <p style={{textAlign:"center", color:"#777", padding:"2rem 0"}}>Queremos que su negocio haga parte de la economía circular que estamos construyendo. Regístrese y haga parte de nuestros aliados.</p>
        </Col>
      </Row>
      <Row>
        <RegisterNew />
      </Row>
    </div>
  </Layout>
)

export default Aliances;


