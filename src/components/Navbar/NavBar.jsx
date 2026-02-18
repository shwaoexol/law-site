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
        <Navbar expand="lg" className="bg-white shadow-sm py-2" sticky="top">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
                  <img src={logoIcon} alt="" />
                  <div className="brand-text">
                    <div className="brand-top">АДВОКАТСКОЕ БЮРО</div>
                    <div className="brand-bottom">INTERNATIONAL LEGAL ADVISOR</div>
                  </div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto flex-row flex-nowrap gap-3 text-nowrap align-items-center">
                    <Nav.Link as={NavLink} to="/">Главная</Nav.Link>
                    <Nav.Link as={NavLink} to="/services">Виды помощи</Nav.Link>
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