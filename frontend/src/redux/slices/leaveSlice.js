import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axiosInstance';

export const fetchLeaveRequests = createAsyncThunk('leave/fetch', async () => {
  const res = await axios.get('/leave');
  return res.data;
});

export const applyLeave = createAsyncThunk('leave/apply', async (leaveData) => {
  const res = await axios.post('/leave', leaveData);
  return res.data;
});

const leaveSlice = createSlice({
  name: 'leave',
  initialState: {
    requests: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaveRequests.fulfilled, (state, action) => {
        state.requests = action.payload;
        state.status = 'succeeded';
      })
      .addCase(applyLeave.fulfilled, (state, action) => {
        state.requests.push(action.payload);
      });
  },
});

export default leaveSlice.reducer;
