import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { starshipsActions } from '../../bus/starships/actions';

export const Starships = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(starshipsActions.fetchAsync());
  }, [dispatch])

  const { data, isFetching } = useSelector((state) => state.starships);

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