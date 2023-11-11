import React from 'react'
import "../styles//ResultModal.css"
import { useNavigate } from 'react-router-dom';

export const ResultModal = ({score, setScore}) => {
  const navigate = useNavigate();
  const handleRestart = () => {
    setScore(0);

    navigate('/');
  };

  return (
    <div className='ResultModal'>
        <div className='result'>
            <div className='result-title'>
                    <h1>Skor</h1>
            </div>
            <div className='result-main'>
                    <h1>{score}</h1>
            </div>
            <div className='result-btn' onClick={handleRestart}>
            Yeniden Başla
            </div>
        </div>
    </div>
  )
}
