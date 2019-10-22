import React, { useState, memo } from 'react';

const DefaultChild = ({ title }) => {
    console.log('default child', title);

    return (
        <span>Hi</span>
    );
};

const Child = memo(({ title }) => {
    console.log('Improved child', title);

    return (
        <span>Hi</span>
    );
}, (prevProps, nextProps) => {
    return prevProps.title === nextProps.title
})

export const ExampleMemo = () => {
    console.log('parent');
    
    const [a, setA] = useState(1);
    const [b, setB] = useState(2);

    const [val, setVal] = useState(0);

    return (
        <>
            <DefaultChild title={ val } />
            <p onClick={ () => setA(a + 1) }>A { a }</p>
            <p onClick={ () => setB(b + 1) }>B { b }</p>
            <p onClick={ () => setVal(val + 1) }>Val</p>
        </>
    )
};
