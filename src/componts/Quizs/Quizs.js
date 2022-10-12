import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { toast } from 'react-toastify';
import Options from '../Options/Options';

const Quizs = ({question}) => {
    console.log(question);
    const {options, id, correctAnswer} = question;
    const notify = () => toast(correctAnswer);

    const handleCorreactAns = (option) =>{
        if(option === correctAnswer){
            toast('Right Ans')
        }
        else{
            toast('Wrong Ans')
        }
    }

    return (
        <div className='shadow-sm m-5 border-2 block'>
            <EyeIcon onClick={notify} className='h-4 w-4'></EyeIcon>
                

            <h2 className='text-xl'>{question.question}</h2>
            <div className='md:grid grid-cols-2	justify-between'>
            {
                options.map(option => <Options
                key={option.id}
                option ={option}
                id = {id}
                handleCorreactAns={handleCorreactAns}
                ></Options>)
            }
            </div>
            
        </div>
    );
};

export default Quizs;