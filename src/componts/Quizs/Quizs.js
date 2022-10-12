import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { toast } from 'react-toastify';
import Options from '../Options/Options';

const Quizs = ({question}) => {
    console.log(question);
    const {options, id, correctAnswer} = question;
    const notify = () => toast(correctAnswer);

    return (
        <div className='shadow-sm m-5 border border-2 block'>
            <EyeIcon onClick={notify} className='h-4 w-4'></EyeIcon>
                

            <h2>{question.question}</h2>
            <div className='grid grid-cols-2'>
            {
                options.map(option => <Options
                key={option.id}
                option ={option}
                id = {id}
                ></Options>)
            }
            </div>
            
        </div>
    );
};

export default Quizs;