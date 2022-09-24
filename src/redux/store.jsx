import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './reducers/contactsSlice';
import filterSlice from './reducers/filterSlice';


export let store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filterSlice,
  },
  devTools: false,
});