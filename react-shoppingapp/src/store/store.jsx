import {configureStore} from '@reduxjs/toolkit';
import popupSlice from './popupSlice';
import formSlice from './formSlice';
// import listReducer from './listSlice'; 



const store = configureStore ({
    reducer:{
        popup:popupSlice,
        form:formSlice,
        // list: listReducer, 
    
    }
});
export default store;