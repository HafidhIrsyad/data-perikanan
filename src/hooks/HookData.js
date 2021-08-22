import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { getDataAllPerikanan } from '../store/action';

export const useHooksData = () => {
  const fishery = useSelector(s => s.fishery);
  const dispatch = useDispatch();
  const callback  = useCallback(() => {
    dispatch(getDataAllPerikanan(50, 2))
  }, [dispatch])
  return {
    fishery,
    getAll : callback
  }
}