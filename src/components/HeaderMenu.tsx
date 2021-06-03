import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import './HeaderMenu.css'
import Logo from '../Assets/logo.png'


interface INavLink {
  text: string,
  href: string
}

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

const HeaderMenu = () => {

  
const [ isVisible , setVisible ] = useState<boolean>(false)

const links: Array<JSX.Element> = items.map((item, i) => {
  return <Link key={i} activeClass="active" to={item.href} spy={true} className="headerMenu__navtext" smooth={true}>{item.text}</Link>
})

const linksBurger: Array<JSX.Element> = items.map((item, i) => {
  return <Link key={i} activeClass="active" to={item.href} spy={true} className="headerMenu__navtext" smooth={true} onClick={() => setVisible(false)}>{item.text}</Link>
})

  return (
    <div className="headerMenu">
      <img src={Logo} className="headerMenu__image"/>
      <div className="headerMenu__burger">
        <div className="headerMenu__burgerButton" onClick={() => setVisible(!isVisible)}>
          <span />
        </div>
        <div className={isVisible ? "headerMenu__burgerMenu visible" : "headerMenu__burgerMenu"}>
          {linksBurger}
          <a className="headerMenu__contact">+7 (999) 999-99-99</a>
        </div>
        <div className={isVisible ? "headerMenu__burgerBlur visible" : "headerMenu__burgerBlur"} onClick={()=> setVisible(!isVisible)}/>
      </div>
      <div className="headerMenu__nav">
        {links}
        <a className="headerMenu__contact">+7 (999) 999-99-99</a>
      </div>
    </div>
  )
}

export default HeaderMenu;