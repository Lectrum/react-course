import React, { useState } from 'react';

export const ExampleSetTimeout = () => {
    const [value, setValue] = useState(0);
    console.log(value);

    const increase = () => {
        setValue((value) => value + 1);
    }

    setTimeout(increase, 500);

    return (
        <>
            <h1>ExampleSetTimeout</h1>
            <button onClick={ increase }>increase</button>
            <p>{ value }</p>
        </>
    );
};
