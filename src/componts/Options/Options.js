import React from 'react';

const Options = ({option, id, handleCorreactAns}) => {
    return (
        <div className=' ml-10 p-5'>
            <p><input onClick={handleCorreactAns} type="radio" name={id} id="radio1" />{option}</p>
        </div>
    );
};

export default Options;