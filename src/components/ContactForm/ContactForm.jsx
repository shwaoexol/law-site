import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.scss'

const ContactForm = () => {
    const form = useRef();
    
    const sendEmail = (event) => {
        event.preventDefault()

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
                    console.log('SUCCES!')
                },
            (error) => {
                console.log('FAILED...', error.text)
            })
    }
  return (
    <>
        <section className="contact">
            <div className="wrapper">
                <div className="content">
                    <h2 className="content__title">Расскажите нам о вашем случае</h2>
                    <form ref={form} onSubmit={sendEmail} className="form">
                        <div className="contact__row">
                            <input type="text" name="name" placeholder="Имя" required />
                            <input type="email" name="email" placeholder="Email" required />
                        </div>
                        <textarea
                            name="message" placeholder="Сообщения" required
                        />
                        <button type="submit">Отправить</button>
                        {status && <span className="status">{status}</span>}
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactForm