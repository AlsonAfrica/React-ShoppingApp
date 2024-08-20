import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        isFormVisible: false,
        activeContainer: null, // Track the active container ID
    },
    reducers: {
        toggleFormVisibility(state) {
            state.isFormVisible = !state.isFormVisible;
        },
        setActiveContainer(state, action) {
            state.activeContainer = action.payload;
        },
    },
});

export const { toggleFormVisibility, setActiveContainer } = formSlice.actions;

export default formSlice.reducer;
