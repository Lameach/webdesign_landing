import React from 'react'
import ContactForm from './ContactForm'
import pic3 from '../Assets/pic3.svg'
import './ContactScreen.css'

let submit: void;

const ContactScreen = () => {
  return (
    <div className="contactScreen">
      <div className="contactScreen__content">
        <h2 className="contactScreen__header">Связаться и заказать</h2>
        <ContactForm submit={submit} />
      </div>
      <img src={pic3} className="contactScreen__image" />
    </div>
  )
}

export default ContactScreen;