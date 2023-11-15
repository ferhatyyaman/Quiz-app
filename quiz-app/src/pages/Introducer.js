import React, { useState } from 'react'
import { DropdownComponent } from '../components/Dropdown'
import "../styles/Inroducer.css"
import { Button } from 'react-bootstrap'
import {useNavigate } from 'react-router-dom'


export const Introducer = () => {
    const difficulty=["easy","medium","hard"]
    const [difficultyChange, setDifficultyChange]=useState("")
    const TotalQuestions=10
    const navigate=useNavigate()
    const startQuiz = () => {
      if(difficultyChange){
       navigate(`/quiz/${difficultyChange}/${TotalQuestions}`)
      }
      
        console.log('Seçilen Zorluk: ', difficultyChange);
      };

    console.log(difficultyChange)
  return (
    <div className='container'>
        <div className='main'>
            <img src="" alt="" width={350} />
            
            <div className='main-dropdown'>
                <DropdownComponent data={difficulty} setDifficultyChange={setDifficultyChange} difficultyChange={difficultyChange}/>
            </div>
            <div className='main-btn'>
                <Button variant="success" onClick={startQuiz}>Quize Başla</Button>
            </div>
        </div>
    </div>
  )
}
