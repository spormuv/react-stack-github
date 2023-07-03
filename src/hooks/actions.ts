import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addFavourite, removeFavourite } from '../store/github/github.slice';

const actions = {
  addFavourite,
  removeFavourite,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
