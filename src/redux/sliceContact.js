import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { addContact, deleteContact } from './actions';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addContact, (state, action) => {
      const contact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };
      if (state.find(item => item.name === contact.name)) {
        alert(`${contact.name} is already in contacts`);
        return state;
      }
      return [...state, contact];
    });
    builder.addCase(deleteContact, (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    });
  },
});

export default contactSlice;
