import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axiosInstance';

export const fetchPayroll = createAsyncThunk('payroll/fetch', async () => {
  const res = await axios.get('/payroll');
  return res.data;
});

const payrollSlice = createSlice({
  name: 'payroll',
  initialState: {
    records: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPayroll.fulfilled, (state, action) => {
      state.records = action.payload;
      state.status = 'succeeded';
    });
  },
});

export default payrollSlice.reducer;
