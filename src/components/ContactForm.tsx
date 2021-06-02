import React from 'react'
import Button from './Button'
import ButtonStyles from '../enums'
import './ContactForm.css'

interface FProps {
  submit: void
}

const ContactForm: React.FC<FProps> = (props: FProps) => {
  return (
    <div className="contactForm">
      <input className="contactForm__input" type="text" placeholder="Имя" />
      <input className="contactForm__input" type="tel" placeholder="Контактный телефон" />
      <textarea className="contactForm__textarea" placeholder="Дополнительная информация (не обязательно)" rows={10}/>
      <div className="contactForm__buttons">
        <Button text="Отправить" styles={ButtonStyles.Filled} action={() => props.submit} />
        <Button text="Скачать бриф" styles={ButtonStyles.Bordered} action={() => null} />
      </div>
    </div>
  )
}

export default ContactForm;