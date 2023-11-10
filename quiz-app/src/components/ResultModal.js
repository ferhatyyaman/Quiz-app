import React from 'react'
import "../styles//ResultModal.css"
export const ResultModal = ({score, setScore}) => {
  return (
    <div className='ResultModal'>
        <div className='result'>
            <div className='result-title'>
                    <h1>Skor</h1>
            </div>
            <div className='result-main'>
                    <h1>{score}</h1>
            </div>
            <div className='result-btn'>
                Yeniden Başla
            </div>
        </div>
    </div>
  )
}
