import React from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Content.scss'
import { NavLink } from 'react-router-dom'
import Practices from '../Practices/Practices'
import ContactForm from '../ContactForm/ContactForm'
import Footer from '../Footer/Footer'

const Content = () => {
  return (
    <>
        <main className="main">
            <section className="banner">
                    <div className="banner__box">
                        <h2 className="banner__box-title">Адвокатское бюро</h2>
                        <p className="banner__box-text">
                            Справедливость · Равенство · Доверие
                        </p>
                        <Button as={NavLink} to="/services" variant='light'>Подробнее</Button>
                    </div>
            </section>
            <Practices/>
            <ContactForm/>
            <Footer/>
        </main>
    </>
  )
}

export default Content