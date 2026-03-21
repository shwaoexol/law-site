import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.scss'
import { useTranslation } from 'react-i18next'

const ContactForm = () => {
  const form = useRef()
  const { t } = useTranslation()
  const [status, setStatus] = useState('')

  const sendEmail = (event) => {
    event.preventDefault()

    setStatus('loading')

    emailjs
      .sendForm(
        'service_jo4swbv',
        'template_qtf4jsq',
        form.current,
        {
          publicKey: '--57B5cXdCcZGtBwn',
        }
      )
      .then(
        () => {
          setStatus('success')
          form.current.reset()
        },
        (error) => {
          setStatus('error')
          console.log('FAILED...', error.text)
        }
      )
  }

  return (
    <section className="contact">
      <div className="wrapper">
        <div className="content">

          <h2 className="content__title">
            {t('form_title')}
          </h2>

          <form ref={form} onSubmit={sendEmail} className="form">
            
            <div className="contact__row">
              <input
                type="text"
                name="name"
                placeholder={t('form_name')}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder={t('form_message')}
              required
            />

            <button type="submit">
              {t('form_submit')}
            </button>

            {/* ✅ Статусы */}
            {status === 'loading' && (
              <span className="status">...</span>
            )}

            {status === 'success' && (
              <span className="status success">
                {t('success_message') || 'Sent successfully'}
              </span>
            )}

            {status === 'error' && (
              <span className="status error">
                {t('error_message') || 'Error occurred'}
              </span>
            )}

          </form>

        </div>
      </div>
    </section>
  )
}

export default ContactForm