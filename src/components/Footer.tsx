import React from 'react'
import './Footer.css'
import Logo from '../Assets/logo_white.png'

const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo}/>
      <div className="footer__nav">
        <a className="footer__navtext">Услуги и цены</a>
        <a className="footer__navtext">Этапы работы</a>
        <a className="footer__navtext">Обратная связь</a>
        <a className="footer__contact">+7 (999) 999-99-99</a>
      </div>
    </div>
  )
}

export default Footer;