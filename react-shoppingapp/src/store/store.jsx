import {configureStore} from '@reduxjs/toolkit';
import popupSlice from './popupSlice';
import formSlice from './formSlice';
import itemsSlice from './itemsSlice';


// import listReducer from './listSlice'; 

const store = configureStore ({
    reducer:{
        popup:popupSlice,
        form:formSlice,
        items:itemsSlice
        // item:itemSlice
        
        // list: listReducer, 
    
    }
});
export default store;