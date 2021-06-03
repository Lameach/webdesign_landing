import React from 'react'
import './WorkStepItem.css'

interface Props {
  image: string;
  text: string;
}

const WorkStepItem: React.FC<Props> = ({image, text}: Props) => {
  const allWords: Array<string> = text.split(" ")
  const boldWord: string = allWords[0];
  allWords.shift()
  const otherWords: string = allWords.join(" ")
  return (
    <div className="workStepItem">
      <img src={image} className="workStepItem__image"/>
      <p className="workStepItem__text"><strong>{boldWord}</strong><br/>{otherWords}</p>
    </div>
  )
}

export default WorkStepItem;