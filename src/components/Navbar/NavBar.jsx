import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { logoIcon } from '../../helpers';


const NavBar = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                  <img src={logoIcon} alt="" />
                  АБ International Legal Advisor
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link as={NavLink} to="/">Главная</Nav.Link>
                    <Nav.Link as={NavLink} to="/services">Услуги</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">О нас</Nav.Link>
                    <Nav.Link as={NavLink} to="/review">Оставить отзыв</Nav.Link>
                    <Nav.Link as={NavLink} to="/contacts">Контакты</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default NavBar