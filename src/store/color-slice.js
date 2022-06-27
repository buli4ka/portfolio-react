import { createSlice } from '@reduxjs/toolkit';
import { COLORS } from 'constants/colors';
import { BACKGROUND_COLOR_STORAGE, COLOR_STORAGE } from 'constants/storage';
import storage from 'utils/storage';

const initialState = {
  backgroundColor: storage.get(BACKGROUND_COLOR_STORAGE) ?? COLORS.GRAY,
  color: storage.get(COLOR_STORAGE) ?? COLORS.WHITE,
};

const slice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    changeBackgroundColor: (state, { payload }) => {
      state.backgroundColor = payload.backgroundColor;
    },
    changeColor: (state, { payload }) => {
      state.color = payload.color;
    },
  }
});

export default slice.reducer;

export const getBackgroundColor = state => state.backgroundColor;
export const getColor = state => state.color;

export const { changeBackgroundColor, changeColor } = slice.actions;