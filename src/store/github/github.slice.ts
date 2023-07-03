import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface IGithubState {
  favoutires: string[];
}

const initialState: IGithubState = {
  favoutires: JSON.parse(localStorage.getItem('favoutires') ?? '[]'),
};

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<string>) => {
      state.favoutires.push(action.payload);
      localStorage.setItem('favoutires', JSON.stringify(state.favoutires));
    },
    removeFavourite: (state, action: PayloadAction<string>) => {
      state.favoutires = state.favoutires.filter(
        item => item !== action.payload
      );
      localStorage.setItem('favoutires', JSON.stringify(state.favoutires));
    },
  },
});

export const { addFavourite, removeFavourite } = githubSlice.actions;
export default githubSlice.reducer;
