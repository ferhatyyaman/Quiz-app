import React, { useState,useEffect } from 'react'
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
        setCount(count+1)
        if(count==9) setResultModal(true)
        setTimer(30)
            };   
        
        useEffect(()=>{
            const interval = setInterval(()=>{
                if(timer>0){
                    setTimer(timer-1)
                }
                if(timer==0 && count<10){
                    setCount(count+1)
                    setTimer(30)
                }
                else if(count>=10){
                    setResultModal(true)
                }
            },1000)
            return ()=>{
                clearInterval(interval)
            }
        },[timer])
        
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
