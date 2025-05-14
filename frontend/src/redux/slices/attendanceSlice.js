import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axiosInstance';

export const fetchAttendanceRecords = createAsyncThunk('attendance/fetch', async () => {
  const response = await axios.get('/attendance');
  return response.data;
});

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState: {
    records: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAttendanceRecords.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAttendanceRecords.fulfilled, (state, action) => {
        state.records = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchAttendanceRecords.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default attendanceSlice.reducer;
