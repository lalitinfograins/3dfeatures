import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Image, Row } from 'react-bootstrap'
import logo from "../../assets/image/landing/info-white.png"
const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg fixed-top d-flex" >
  <Container fluid>
    <Link className="navbar-brand" to="/"> <Image src={logo} alt="logo-1" className="logo_img"/> </Link>
    <button className="navbar-toggler btn btn-none btn btn-border-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blockchain
          </a>
          <Container>
          <Row>
            <Col lg={3}>
            <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
            </Col>
            <Col lg={3}>
            <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
            </Col>
            <Col lg={3}>
            <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
            </Col>
          </Row>
           </Container>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/">Contact</Link>
        </li>
        
      </ul>
      </div>
  </Container>
</nav>
    </>
  )
}

export default Header
