import React from 'react';
import { Starships } from '../Starships';
import { Planets } from '../Planets';

export const Swapi = () => {
  return (
    <>
      <h1>Swapi</h1>
      <Starships />
      <Planets />
    </>
  )
};