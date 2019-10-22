import React from 'react';
import { useLocalStorage } from './useLocalStorage';

export const ExampleLocalStorage = () => {
    const [name, setName] = useLocalStorage('name', 'Bob');

    return (
        <>
            <input
                type="text"
                placeholder="Enter your name"
                value={ name }
                onChange={ e => setName(e.target.value) }
            />
        </>
    )
};
