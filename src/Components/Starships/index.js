import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { starshipsActions } from '../../bus/starships/actions';

export const Starships = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(starshipsActions.fetchAsync());
  }, [dispatch])

  const { data } = useSelector((state) => state.starships);

  const list = data.map(({name}, index) => (
    <li key={index}>{name}</li>
  ));

  return (
    <>
      <h1>Starships</h1>
      {list}
    </>
  )
};