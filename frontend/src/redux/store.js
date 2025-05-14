// import { configureStore } from '@reduxjs/toolkit';

// import authReducer from './slices/authSlice';
// import employeeReducer from './slices/employeeSlice';
// import attendanceReducer from './slices/attendanceSlice';
// import leaveReducer from './slices/leaveSlice';
// import payrollReducer from './slices/payrollSlice';
// import contractorReducer from './slices/contractorSlice';
// import rosterReducer from './slices/rosterSlice';
// import uiReducer from './slices/uiSlice'; // For sidebar/navbar UI states, if needed

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,               // Handles login, logout, current user info
//     employees: employeeReducer,      // Handles fetching, updating, managing employee data
//     attendance: attendanceReducer,   // Handles marking, fetching attendance
//     leaves: leaveReducer,            // Handles leave requests, approvals
//     payroll: payrollReducer,         // Handles salary calculations and payroll info
//     contractors: contractorReducer,  // Manages contract-based employee data
//     roster: rosterReducer,           // Handles shift/duty roster generation and assignment
//     ui: uiReducer                    // Optional - for toggling UI elements
//   },
//   devTools: import.meta.env.MODE !== 'production', // Optional: disable in production
// });
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import employeeReducer from './slices/employeeSlice';
import attendanceReducer from './slices/attendanceSlice';
import leaveReducer from './slices/leaveSlice';
import payrollReducer from './slices/payrollSlice';
import contractorReducer from './slices/contractorSlice';
import rosterReducer from './slices/rosterSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    employees: employeeReducer,
    attendance: attendanceReducer,
    leave: leaveReducer,
    payroll: payrollReducer,
    contractors: contractorReducer,
    roster: rosterReducer,
    ui: uiReducer,
  },
});
