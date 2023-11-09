import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../api/api';
import { QuestionCard } from '../components/QuestionCard';

export const Quiz = () => {
  const { difficulty, amount } = useParams();
  const [questionsData, setQuestionsData] = useState([]);
  const [score, setScore]=useState(0)
  const [count, setCount]=useState(0)
const [resultModal, setResultModal] = useState(false);
  useEffect(() => {
    const getdata = async () => {
      const data = await api.fetchData(difficulty, amount);
      setQuestionsData(data);
    };

    getdata();
  }, [amount, difficulty]);

  console.log(questionsData);
  return (
    <div>
       <QuestionCard 
       questionsData={questionsData}
       score={score}
       setScore={setScore}
       count={count}
       setCount={setCount}
       resultModal={resultModal}
       setResultModal={setResultModal}

       />
    </div>
  )
}
