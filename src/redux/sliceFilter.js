import { createSlice } from '@reduxjs/toolkit';
import { setFilter } from './actions';

const sliceFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {},
  extraReducers: {
    [setFilter]: (state, action) => action.payload,
  },
});

export default sliceFilter;
