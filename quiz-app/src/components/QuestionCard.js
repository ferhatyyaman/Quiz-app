import React, { useState } from 'react'
import "../styles/QuestionCard.css"
export const QuestionCard = ({ 
    questionsData,
    score,
    setScore,
    count,
    setCount,
    resultModal,
    setResultModal}) => {

    const [timer, setTimer]=useState(30)

    const approvedChoice = (e) => {
        console.log(e.currentTarget.value);
        const checkAnswer = e.currentTarget.value === questionsData[count]?.correct_answer;
        console.log(checkAnswer);
        if(checkAnswer){
            setScore(score+100)
        }
            };    
        
  return (
    <div className="question">
        
            <div className="questionTimer">
                {timer}
            </div>
            <div className='questionCard'>
            <div className="questionTitle">
            {count + 1}/10 {questionsData[count]?.question}
            </div>

            <div className="questionChoice">
            {questionsData[count]?.answers?.map((answer,i) => (
            <button onClick={approvedChoice} key={i} value={answer}>
            {answer}
            </button>
            ))}
            </div>
        </div>
  </div>
  )
}
