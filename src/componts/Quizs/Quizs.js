import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Options from '../Options/Options';

const Quizs = ({question}) => {
    const {options} = question
    return (
        <div className='cotainer shadow-xl m-5'>
            <h2>{question.question}</h2>
            <EyeIcon className='h-5 w-5 justify-end flex'/>
            <div className='grid grid-cols-2'>
            {
                options.map(option => <Options
                key={option.id}
                option ={option}
                ></Options>)
            }
            </div>
        </div>
    );
};

export default Quizs;