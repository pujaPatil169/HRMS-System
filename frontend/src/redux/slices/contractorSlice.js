import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axiosInstance';

export const fetchContractors = createAsyncThunk('contractors/fetch', async () => {
  const res = await axios.get('/contractors');
  return res.data;
});

const contractorSlice = createSlice({
  name: 'contractors',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContractors.fulfilled, (state, action) => {
      state.list = action.payload;
      state.status = 'succeeded';
    });
  },
});

export default contractorSlice.reducer;
