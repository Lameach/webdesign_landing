import React from 'react'
import ButtonStyles from '../enums'
import content from '../Assets/pic1.svg'
import './MainScreen.css'
import Button from './Button'
import { animateScroll, scroller } from 'react-scroll'

const purchaseClick = () => {
  scroller.scrollTo('contact', {
    smooth: true,
    offset: 100,
  })
}

const infoClick = () => {
  scroller.scrollTo('advantages', {
    smooth: true,
  })
}

const MainScreen = () => {
  return (
    <div className="mainScreen">
      <div className="mainScreen__text">
        <h1 className="mainScreen__header">Веб-дизайн в Москве</h1>
        <p className="mainScreen__description">Сделаем дизайн для вашего сайта качественно <br/> и недорого.
      Учтем все пожелания!</p>
        <div className="mainScreen__buttons">
          <Button text="Заказать" styles={ButtonStyles.Filled} action={purchaseClick} />
          <Button text="Подробнее" styles={ButtonStyles.Bordered} action={infoClick} />
        </div>
      </div>
      <img src={content} className="mainScreen__image" />
    </div>
  )
}

export default MainScreen;