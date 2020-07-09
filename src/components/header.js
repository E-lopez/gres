import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from 'react-bootstrap'

import headerStyles from "../style/header.module.css"

import logo from "../images/gres_logo_1.1.png"

export default function Header(props) {
  return (
      <header style={{ marginBottom: `1.5rem`,  backgroundColor:"#fff", position:"fixed", width:"100%", zIndex:"100"}}>
          <Navbar expand="false">
          <Link to="/">
            <img
              src={logo}
              width="150"
              alt="Gres logo"
              style={{margin: "0"}}
            />
          </Link>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto" style={{padding:"2rem"}}>
                <Link to="/calculator" className={headerStyles.link}>Calculadora de volumen de residuos</Link>
                <Link to="/dashboard" className={headerStyles.link}>Dashboard Proyectos</Link>
                <Link to="/about" className={headerStyles.link}>Quienes somos</Link>                
                <Link to="/aliances" className={headerStyles.link}>Alianzas</Link>
                <Link to="/blog" className={headerStyles.link}>Blog</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </header>
  )
}
