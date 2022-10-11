import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizs from '../Quizs/Quizs';

const Quiz = () => {
    const datas = useLoaderData().data;
    const {name, questions} = datas;
    console.log(datas);
    return (
        <div className='mt-10 w-5/6 ml-20'>
            <div className=''>        
               <h2 className='font-bold text-2xl flex justify-center'>Quiz of: {name}</h2>
            </div>
            {
                questions.map(question => <Quizs 
                    key={question.id}
                    question ={question}                
                ></Quizs>)
            }
        </div>
    );
};

export default Quiz;