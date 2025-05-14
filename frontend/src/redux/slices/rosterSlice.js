import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axiosInstance';

export const fetchRoster = createAsyncThunk('roster/fetch', async () => {
  const res = await axios.get('/roster');
  return res.data;
});

const rosterSlice = createSlice({
  name: 'roster',
  initialState: {
    schedule: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRoster.fulfilled, (state, action) => {
      state.schedule = action.payload;
      state.status = 'succeeded';
    });
  },
});

export default rosterSlice.reducer;
