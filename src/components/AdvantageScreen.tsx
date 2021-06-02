import React, { ElementType } from 'react'
import AdvantageItem from './AdvantageItem'
import fast from '../Assets/Icons/fast.svg'
import creative from '../Assets/Icons/creative.svg'
import universal from '../Assets/Icons/universal.svg'
import flexible from '../Assets/Icons/flexible.svg'
import './AdvantageScreen.css'

const items_content: Array<{image: string, header: string, text: string}> = [
  {
    image: fast,
    header: "Четкие сроки",
    text: "Назначаем удобные сроки и четко их соблюдаем"
  }, 
  {
    image: universal,
    header: "Универсальность",
    text: "Делаем дизайн любой сложности под любые устройства"
  },
  {
    image: creative,
    header: "Креатив",
    text: "Подбираем уникальную идею под каждый проект"
  },
  {
    image: flexible,
    header: "Гибкость",
    text: "Подстраиваемся под пожелания клиента и вносим любые правки"
  }
]

const items: Array<JSX.Element> = items_content.map((item) => {
  return <AdvantageItem key={item.header} image={item.image} header={item.header} text={item.text}/>
})

const AdvantageScreen = () => {
  return (
    <div className="advantageScreen">
      {items}
    </div>
  )
}

export default AdvantageScreen;