// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Async thunks for CRUD operations
// export const fetchItems = createAsyncThunk(
//   'list/fetchItems',
//   async () => {
//     const response = await fetch('http://localhost:5001/items');
//     return response.json();
//   }
// );

// export const addItemAsync = createAsyncThunk(
//   'list/addItem',
//   async (item) => {
//     const response = await fetch('http://localhost:5001/items', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(item),
//     });
//     return response.json();
//   }
// );

// export const updateItemAsync = createAsyncThunk(
//   'list/updateItem',
//   async ({ id, changes }) => {
//     const response = await fetch(`http://localhost:5001/items/${id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(changes),
//     });
//     return response.json();
//   }
// );

// export const deleteItemAsync = createAsyncThunk(
//   'list/deleteItem',
//   async (id) => {
//     await fetch(`http://localhost:5001/items/${id}`, {
//       method: 'DELETE',
//     });
//     return id;
//   }
// );

// const listSlice = createSlice({
//   name: 'list',
//   initialState: {
//     items: [],
//     status: 'idle', // Can be 'idle', 'loading', 'succeeded', 'failed'
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchItems.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchItems.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.items = action.payload;
//       })
//       .addCase(fetchItems.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(addItemAsync.fulfilled, (state, action) => {
//         state.items.push(action.payload);
//       })
//       .addCase(updateItemAsync.fulfilled, (state, action) => {
//         const { id, changes } = action.payload;
//         const item = state.items.find(item => item.id === id);
//         if (item) {
//           Object.assign(item, changes);
//         }
//       })
//       .addCase(deleteItemAsync.fulfilled, (state, action) => {
//         state.items = state.items.filter(item => item.id !== action.payload);
//       });
//   },
// });

// export default listSlice.reducer;
