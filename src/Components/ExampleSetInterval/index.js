import React, { useState, useEffect } from 'react';

export const ExampleSetInterval = () => {
    const [value, setValue] = useState(0);
    console.log(value);

    const increase = () => {
        setValue((value) => value + 1);
    }

    useEffect(() => {
        const timerId = setInterval(increase, 500);

        return () => {
            clearInterval(timerId);
        }
    }, [value]);

    return (
        <>
            <h1>ExampleSetInterval</h1>
            <p>{ value }</p>
        </>
    );
};
