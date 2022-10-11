import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='font-medium mt-10 flex gap-5 container ml-20'>
            <div className='border-solid border-2 border-sky-500 w-5/12'>
            <h2 className='font-bold pt-5'>c</h2>
            <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
            </p>
            </div>

            <div className='border-solid border-2 border-sky-500 w-5/12'>
            <h2 className='font-bold'>2. How dose context api works?</h2>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>

            <div className='border-solid border-2 border-sky-500 w-5/12'>
            <h2 className='font-bold pt-5'>3. What is useRef?</h2>
            <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
            
        </div>
     </div>
    );
};

export default Blog;