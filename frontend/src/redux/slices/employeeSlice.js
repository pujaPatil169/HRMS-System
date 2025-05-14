import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

export const loginEmployee = createAsyncThunk('employee/login', async ({ employeeId, faceData }, thunkAPI) => {
  try {
    const res = await axios.post('/api/employee/login', { employeeId, faceData }, { withCredentials: true });
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    currentEmployee: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logoutEmployee(state) {
      state.currentEmployee = null;
      Cookies.remove('employeeToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginEmployee.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginEmployee.fulfilled, (state, action) => {
        state.currentEmployee = action.payload.employee;
        state.status = 'succeeded';
        Cookies.set('employeeToken', action.payload.token);
      })
      .addCase(loginEmployee.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Login failed';
      });
  },
});

export const { logoutEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
