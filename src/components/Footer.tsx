import React from 'react'
import './Footer.css'
import Logo from '../Assets/logo_white.png'
import { Link } from 'react-scroll'
import { INavLink } from './HeaderMenu'

const items: Array<INavLink> = [
  {
    text: "Услуги и цены",
    href: "services",
  },
  {
    text: "Этапы работы",
    href: "worksteps",
  },
  {
    text: "Обратная связь",
    href: "contact",
  }
]


const Footer = () => {
  const links: Array<JSX.Element> = items.map((item, i) => {
    return <Link key={i} activeClass="" to={item.href} spy={true} className="footer__navtext" smooth={true}>{item.text}</Link>
  })

  return (
    <div className="footer">
      <img src={Logo} className="footer__image"/>
      <div className="footer__nav">
        {links}
        <a className="footer__contact">+7 (999) 999-99-99</a>
      </div>
    </div>
  )
}

export default Footer;