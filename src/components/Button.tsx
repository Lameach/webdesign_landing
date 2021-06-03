import React, { ButtonHTMLAttributes } from 'react'
import ButtonStyles from '../enums'
import './Button.css'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string,
  styles: ButtonStyles,
  action: (e: HTMLElement) => void
}

const Button : React.FC<IButtonProps> = ({text, styles, action}) => {
  return (
    <button className={"button-" + styles} onClick={(e) => action(e.target as HTMLElement)}>{text}</button>
  )
}

export default Button;