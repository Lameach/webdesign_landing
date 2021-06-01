import React from 'react'
import ButtonStyles from '../enums'
import content from '../Assets/pic1.svg'
import './MainScreen.css'
import Button from './Button'

const MainScreen = () => {
  return (
      <div className="mainScreen">
        <div className="mainScreen__text">
          <h1 className="mainScreen__header">Веб-дизайн в Москве</h1>
          <p className="mainScreen__description">Сделаем дизайн для вашего сайта качественно и недорого.
      Учтем все пожелания!</p>
          <div className="mainScreen__buttons">
            <Button text="Заказать" styles={ButtonStyles.Filled} action={() => null} />
            <Button text="Подробнее" styles={ButtonStyles.Bordered} action={() => null} />
          </div>
        </div>
        <object type="image/svg+xml" data={content} className="mainScreen__image"></object>
      </div>
  )
}

export default MainScreen;