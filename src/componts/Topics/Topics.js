import React from 'react';
import quizImg from '../../componts/img/quizImg.jpg'

const Topics = () => {
    return (
        <div className='flex bg-green-100'>
            <div>
                <img className='w-5/10 h-5/6 m-10 mt-10 mb-12 rounded-lg shadow-md' src={quizImg} alt="" />
            </div>
            <div className='w-5/6 m-36 text-slate-500 text-3xl'>
                <h2>Welcome to the world’s largest quiz community. Play a quiz or create your own. Join a virtual or live event. There's a Sporcle for everyone!</h2>
            </div>
        </div>
    );
};

export default Topics;