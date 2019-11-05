import React from 'react';
import { Starships } from '../Starships';
import { Planets } from '../Planets';
import { useLoading } from './hooks/useLoading';

export const Swapi = () => {
  const { isDataLoading } = useLoading();
  const status = isDataLoading && 'NOT READY';

  return (
    <>
      <h1>Swapi {status}</h1>
      <Starships />
      <Planets />
    </>
  )
};