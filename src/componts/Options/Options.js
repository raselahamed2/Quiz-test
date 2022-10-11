import React from 'react';

const Options = ({option}) => {
    return (
        <div className=' ml-10 p-5'>
            <p><input type="radio" name="options" value="a" id="radio1" />{option}</p>
        </div>
    );
};

export default Options;