import React from 'react'
import pic2 from '../Assets/pic2.svg'
import ButtonStyles from '../enums'
import Button from './Button'
import './ServiceScreen.css'
import { scroller } from 'react-scroll'

const calcClick = (e: HTMLElement) => {
  e.blur();
  scroller.scrollTo('contact', {
    smooth: true,
    offset: 100,
  })
}

const ServiceScreen = () => {
  return (
    <div className="serviceScreen" id="services">
      <img src={pic2} className="serviceScreen__image" />
      <div className="serviceScreen__content">
        <h2>Услуги и цены</h2>
        <p className="serviceScreen__text">Мы предлагаем все виды услуг веб-дизайна:</p>
        <ul className="serviceScreen__text">
          <li>Дизайн многостраничных сайтов: визитки, интернет-магазины, каталоги, корпоративные сайты</li>
          <li>Дизайн лендингов</li>
          <li>Редизайн готовых сайтов или макетов</li>
        </ul>
        <p className="serviceScreen__text">Стоимость рассчитывается индивидуально, исходя из сложности проекта и объема работы.</p>
        <Button text="Рассчитать" styles={ButtonStyles.Filled} action={calcClick}/>
      </div>
    </div>
  )
}

export default ServiceScreen;