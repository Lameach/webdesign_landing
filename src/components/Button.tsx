import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react'
import ButtonStyles from '../enums'
import './Button.css'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string,
  styles: ButtonStyles,
  action: () => void
}

const Button : React.FC<IButtonProps> = ({text, styles, action}) => {
  return (
    <button className={"button-" + styles} onClick={() => action()}>{text}</button>
  )
}

export default Button;