import React from 'react'
import pic2 from '../Assets/pic2.svg'
import ButtonStyles from '../enums'
import Button from './Button'
import './ServiceScreen.css'

const ServiceScreen = () => {
  return (
    <div className="serviceScreen">
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
        <Button text="Рассчитать" styles={ButtonStyles.Filled} action={() => null}/>
      </div>
    </div>
  )
}

export default ServiceScreen;