import React from 'react';
import { useNews } from './useNews';

export const SmartNews = () => {
    const { posts } = useNews();

    const articles = posts.map(({ title, objectId }) => (
        <li key={objectId}>{ title }</li>
    ));

    return (
        <>
            <h2>Smart News</h2>
            <ul>
                { articles }
            </ul>
        </>
    )
}