import React from 'react';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'

const Statistics = ({data}) => {
    const {logo, name, total} = data;
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50  bg-slate-700">
                <div>    
	                <img src={logo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                </div>
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400"></span>
		<h2 className="text-xl font-semibold tracking-wide text-yellow-50">{name}</h2>
        <div className='mt-4 flex align-center'>
        <h2 className='text-yellow-50 p-3 bg-slate-600 rounded-lg mr-5'>Total Quiz: {total}</h2>
        <button className='bg-gray-800 hover:bg-slate-900 font-semibold p-2 rounded-lg flex  text-yellow-50'>Start Quiz<ArrowSmallRightIcon className='h-5 w-5 my-1' /></button>
        </div>
	</div>
  </div>
</div>
    );
};

export default Statistics;