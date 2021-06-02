import React from 'react'
import './AdvantageItem.css'

interface Props {
  image: string;
  header: string;
  text: string;
}

const AdvantageItem: React.FC<Props> = ({image, header, text}: Props) => {
  return (
    <div className="advantageItem">
      <img src={image} className="advantageItem__image"/>
      <p className="advantageItem__header">{header}</p>
      <p className="advantageItem__text">{text}</p>
    </div>
  )
}

export default AdvantageItem;