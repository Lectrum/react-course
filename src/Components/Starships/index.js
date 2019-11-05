import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { starshipsActions } from '../../bus/starships/actions';

export const Starships = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(starshipsActions.fetchAsync());
  }, [dispatch])

  return (
    <>
      <h1>Starships</h1>
    </>
  )
};