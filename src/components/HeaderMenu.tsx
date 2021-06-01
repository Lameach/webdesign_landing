import React from 'react'
import './HeaderMenu.css'
import Logo from '../Assets/logo.png'

const HeaderMenu = () => {
  return (
    <div className="headerMenu">
      <img src={Logo}/>
      <div className="headerMenu__nav">
        <a className="headerMenu__navtext">Услуги и цены</a>
        <a className="headerMenu__navtext">Этапы работы</a>
        <a className="headerMenu__navtext">Обратная связь</a>
        <a className="headerMenu__contact">+7 (999) 999-99-99</a>
      </div>
    </div>
  )
}

export default HeaderMenu;