import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { starshipsActions } from '../../../bus/starships/actions';

export const useStarshipsFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(starshipsActions.fetchAsync());
  },[dispatch])

  const { data, isFetching } = useSelector((state) => state.starships);

  return {
    data,
    isFetching
  }
};
