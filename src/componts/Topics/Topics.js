import React from 'react';
import { useLoaderData } from 'react-router-dom';
import quizImg from '../../componts/img/quizImg.jpg'
import Statistics from '../Statistics/Statistics';

const Topics = () => {
    const loaderData = useLoaderData()
    const datas = loaderData.data;
    console.log(datas);
    return (
        <div>
            
        <div className='md:flex bg-green-100'>
            <div>
                <img className='lg:w-5/10 lg:h-5/ lg:m-10 lg:mt-10 mb-12 rounded-lg shadow-md' src={quizImg} alt="" />
            </div>
            <div className='lg:w-5/6 m-36 text-slate-500 text-3xl'>
                <h2>Welcome to the world’s largest quiz community. Play a quiz or create your own. Join a virtual or live event. There's a Sporcle for everyone!</h2>
            </div>
        </div>
        <div className='lg:flex gap-5 m-20'>
            {
                datas.map(data => <Statistics
                key={data.id}
                data={data}
                ></Statistics>)
            }
        </div>
        </div>
    );
};

export default Topics;