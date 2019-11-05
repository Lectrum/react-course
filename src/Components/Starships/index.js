import React from 'react';
import { useStarshipsFetch } from './hooks/useStarshipsFetch';

export const Starships = () => {
  const { isFetching, data } = useStarshipsFetch();

  const loader = isFetching && (
    <p>Loading data from API...</p>
  );

  const list = isFetching || data.map(({name}, index) => (
    <li key={index}>{name}</li>
  ));

  return (
    <>
      <h1>Starships</h1>
      {loader}
      {list}
    </>
  )
};