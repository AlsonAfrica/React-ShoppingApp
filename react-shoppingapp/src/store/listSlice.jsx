import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'list',
  initialState: {
    items: [], 
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); 
    },
  },
});

export const { addItem } = listSlice.actions;
export default listSlice.reducer;
