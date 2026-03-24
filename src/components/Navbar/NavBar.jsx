import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { logoIcon } from '../../helpers';
import { useTranslation } from 'react-i18next';




const NavBar = () => {
  const { t, i18n } = useTranslation()

  const changeLang = (lng) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('lng', lng)
  }

  const currentLang = i18n.language.toUpperCase()

  return (
    <>
      <Navbar expand="lg" className="bg-white shadow-sm py-2" sticky="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
            <img src={logoIcon} alt="" />
            <div className="brand-text">
              <div className="brand-top">{t('lawoffice')}</div>
              <div className="brand-bottom">INTERNATIONAL LEGAL ADVISOR</div>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-3 text-nowrap align-items-center">

              <Nav.Link as={NavLink} to="/">{t('home')}</Nav.Link>
              <Nav.Link as={NavLink} to="/services">{t('services')}</Nav.Link>
              <Nav.Link as={NavLink} to="/review">{t('feedback')}</Nav.Link>
              <Nav.Link as={NavLink} to="/contacts">{t('contacts')}</Nav.Link>
              <Nav.Link as={NavLink} to="/payment">{t('payment')}</Nav.Link>

              {/* 🌍 Production Language Switcher */}
              <NavDropdown
                title={currentLang}
                id="lang-dropdown"
                align="end"
                className="ms-3 lang-dropdown"
              >
                <NavDropdown.Item
                  active={i18n.language === 'ru'}
                  onClick={() => changeLang('ru')}
                >
                  🇷🇺 Русский
                </NavDropdown.Item>

                <NavDropdown.Item
                  active={i18n.language === 'uz'}
                  onClick={() => changeLang('uz')}
                >
                  🇺🇿 O‘zbekcha
                </NavDropdown.Item>

                <NavDropdown.Item
                  active={i18n.language === 'en'}
                  onClick={() => changeLang('en')}
                >
                  🇬🇧 English
                </NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar