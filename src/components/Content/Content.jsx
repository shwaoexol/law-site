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
                        <h2 className="banner__box-title">Адвокатское бюро INTERNATIONAL LEGAL ADVISOR: лучшее юридическое сопровождение в Узбекистане</h2>
                        <span>На страже ваших прав</span>
                        <p className="banner__box-text">
                        Я верю в то, что «Все граждане Республики Узбекистан имеют одинаковые права и свободы и равны перед законом без различия пола, расы, национальности, языка, религии, социального происхождения, убеждений, личного и общественного положения.» (ст. 18 Конституции Республики Узбекистан). Я считаю, что если вы что-то делаете, то нужно это делать хорошо либо не делать вовсе, и поэтому с успехом представляю интересы своих клиентов с марта 2021 года. Независимо от характера и сложности ваших юридических проблем, от меня вы получите полноценную помощь и эффективное юридическое сопровождение. Защита прав клиентов — это то, что Адвокатское бюро "INTERNATIONAL LEGAL ADVISOR" умеет лучше всего.
                        </p>
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