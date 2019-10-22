import React, { useState, useMemo } from 'react';

const calculate = (a,b) => {
    console.log('calculate');

    return a + b;
}

export const ExampleUseMemo = () => {
    const [a, setA] = useState(1);
    const [b, setB] = useState(2);
    const [counter, setCounter] = useState(0);

    const sum = useMemo(() => calculate(a, b), [a, b]);

    return (
        <>
            <h1>ExampleUseMemo</h1>
            <p>Sum { sum }</p>
            <p onClick={ () => setA(a + 1) }>A { a }</p>
            <p onClick={ () => setB(b + 1) }>B { b }</p>
            <h3 onClick={ () => setCounter(counter + 1) }>Counter { counter }</h3>
        </>
    );
};
