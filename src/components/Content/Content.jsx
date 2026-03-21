import React from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Content.scss'
import { Link, NavLink } from 'react-router-dom'
import Practices from '../Practices/Practices'
import Footer from '../Footer/Footer'
import { useTranslation } from 'react-i18next'

const Content = () => {

  const { t } = useTranslation()
  return (
    <>
        <main className="main">
            <section className="banner">
                    <div className="banner__box">
                        <h2 className="banner__box-title">
                          {t('lawoffice')} INTERNATIONAL LEGAL ADVISOR
                          </h2>
                        <span>
                          {t('hero_subtitle')}
                        </span>
                        <p className="banner__box-text">
                          
                        </p>
                        <button className="banner__box-btn">
                          <Link to="/contacts">{t('cta_consultation')}</Link>
                          </button>
                    </div>
            </section>
            <Practices/>
            <Footer/>
        </main>
    </>
  )
}

export default Content