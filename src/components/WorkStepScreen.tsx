import React, { ElementType } from 'react'
import step1 from '../Assets/Icons/step1.svg'
import step2 from '../Assets/Icons/step2.svg'
import step3 from '../Assets/Icons/step3.svg'
import step4 from '../Assets/Icons/step4.svg'
import './WorkStepScreen.css'
import WorkStepItem from './WorkStepItem'

const items_content: Array<{ image: string, text: string }> = [
  {
    image: step1,
    text: "Заполняете бриф и обсуждаете свои пожелания с дизайнером"
  },
  {
    image: step2,
    text: "Утверждаете сроки и стоимость выполнения дизайна"
  },
  {
    image: step3,
    text: "Получаете готовый дизайн в указанные сроки и вносите правки"
  },
  {
    image: step4,
    text: "Радуетесь отличному дизайну по вашим пожеланиям"
  }
]

const items: Array<JSX.Element> = items_content.map((item) => {
  return <WorkStepItem key={item.text} image={item.image} text={item.text} />
})

const WorkStepScreen = () => {
  return (
    <div className="workStepScreen">
      <h2>Этапы работы</h2>
      <div className="workStepScreen__items">
        {items}
      </div>
    </div>
  )
}

export default WorkStepScreen;