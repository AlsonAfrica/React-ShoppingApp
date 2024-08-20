
import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    isFormVisible: false,
  },
  reducers: {
    toggleFormVisibility: (state) => {
      state.isFormVisible = !state.isFormVisible;
    },
  },
});

export const { toggleFormVisibility } = formSlice.actions;

export default formSlice.reducer;
