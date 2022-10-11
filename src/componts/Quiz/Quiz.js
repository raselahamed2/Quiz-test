import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizs = useLoaderData();
    console.log(quizs);
    return (
        <div>
            <h2>this is quiz</h2>
        </div>
    );
};

export default Quiz;