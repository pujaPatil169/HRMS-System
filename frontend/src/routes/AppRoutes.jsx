// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import SuperadminLayout from '../layouts/SuperadminLayout';
// import AdminLayout from '../layouts/AdminLayout';
// import EmployeeLayout from '../layouts/EmployeeLayout';
// import ProtectedRoute from './ProtectedRoute';

// // Import pages for Superadmin
// import SuperadminDashboard from '../pages/Superadmin/Dashboard';
// import ClientList from '../pages/Superadmin/ClientList';
// import AddClient from '../pages/Superadmin/AddClient';
// import DeleteClient from '../pages/Superadmin/DeleteClient';
// import Reports from '../pages/Superadmin/Reports';

// // Import pages for Admin
// import AdminDashboard from '../pages/Admin/Dashboard';
// import EmployeeList from '../pages/Admin/EmployeeList';
// import EmployeeSalary from '../pages/Admin/EmployeeSalary';
// import AttendanceList from '../pages/Admin/AttendanceList';
// import AddEmployee from '../pages/Admin/AddEmployee';
// import RosterManagement from '../pages/Admin/RosterManagement';
// import SalaryManagement from '../pages/Admin/SalaryManagement';
// import LeaveRequests from '../pages/Admin/LeaveRequests';
// import Announcements from '../pages/Admin/Announcements';

// // Import pages for Employee
// import EmployeeDashboard from '../pages/Employee/Dashboard';
// import Attendance from '../pages/Employee/Attendance';
// import Salary from '../pages/Employee/Salary';
// import RosterView from '../pages/Employee/RosterView';
// import ApplyLeave from '../pages/Employee/ApplyLeave';
// import LeaveBalance from '../pages/Employee/LeaveBalance';
// import DutyLog from '../pages/Employee/DutyLog';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* Superadmin Routes */}
//       <Route path="/superadmin" element={
//         // <ProtectedRoute role="superadmin">
//           <SuperadminLayout />
//         // </ProtectedRoute>
//       }>
//         <Route path="dashboard" element={<SuperadminDashboard />} />
//         <Route path="clients" element={<ClientList />} />
//         <Route path="add-client" element={<AddClient />} />
//         <Route path="delete-client" element={<DeleteClient />} />
//         <Route path="reports" element={<Reports />} />
//       </Route>

//       {/* Admin Routes */}
//       <Route path="/admin" element={
//         <ProtectedRoute role="admin">
//           <AdminLayout />
//         </ProtectedRoute>
//       }>
//         <Route path="dashboard" element={<AdminDashboard />} />
//         <Route path="employees" element={<EmployeeList />} />
//         <Route path="employee-salary" element={<EmployeeSalary />} />
//         <Route path="attendance" element={<AttendanceList />} />
//         <Route path="add-employee" element={<AddEmployee />} />
//         <Route path="roster-management" element={<RosterManagement />} />
//         <Route path="salary-management" element={<SalaryManagement />} />
//         <Route path="leave-requests" element={<LeaveRequests />} />
//         <Route path="announcements" element={<Announcements />} />
//       </Route>

//       {/* Employee Routes */}
//       <Route path="/employee" element={
//         <ProtectedRoute role="employee">
//           <EmployeeLayout />
//         </ProtectedRoute>
//       }>
//         <Route path="dashboard" element={<EmployeeDashboard />} />
//         <Route path="attendance" element={<Attendance />} />
//         <Route path="salary" element={<Salary />} />
//         <Route path="roster-view" element={<RosterView />} />
//         <Route path="apply-leave" element={<ApplyLeave />} />
//         <Route path="leave-balance" element={<LeaveBalance />} />
//         <Route path="duty-log" element={<DutyLog />} />
//       </Route>

//       {/* Redirect root to login or appropriate dashboard */}
//       <Route path="/" element={<Navigate to="/login" replace />} />
//       {/* Add login and not found routes as needed */}
//     </Routes>
//   );
// };

// export default AppRoutes;



import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SuperadminLayout from '../layouts/SuperadminLayout';
import AdminLayout from '../layouts/AdminLayout';
import EmployeeLayout from '../layouts/EmployeeLayout';
import ProtectedRoute from './ProtectedRoute';

import SuperadminDashboard from '../pages/Superadmin/Dashboard';
import ClientList from '../pages/Superadmin/ClientList';
import AddClient from '../pages/Superadmin/AddClient';
import DeleteClient from '../pages/Superadmin/DeleteClient';
import Reports from '../pages/Superadmin/Reports';

import AdminDashboard from '../pages/Admin/Dashboard';
import EmployeeList from '../pages/Admin/EmployeeList';
import EmployeeSalary from '../pages/Admin/EmployeeSalary';
import AttendanceList from '../pages/Admin/AttendanceList';
import AddEmployee from '../pages/Admin/AddEmployee';
import RosterManagement from '../pages/Admin/RosterManagement';
import SalaryManagement from '../pages/Admin/SalaryManagement';
import LeaveRequests from '../pages/Admin/LeaveRequests';
import Announcements from '../pages/Admin/Announcements';

import EmployeeDashboard from '../pages/Employee/Dashboard';
import Attendance from '../pages/Employee/Attendance';
import Salary from '../pages/Employee/Salary';
import RosterView from '../pages/Employee/RosterView';
import ApplyLeave from '../pages/Employee/ApplyLeave';
import LeaveBalance from '../pages/Employee/LeaveBalance';
import DutyLog from '../pages/Employee/DutyLog';

import Auth from '../pages/Auth';
// import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Superadmin Routes */}
      <Route path="/superadmin" element={
        // <ProtectedRoute role="superadmin">
          <SuperadminLayout />
        // </ProtectedRoute>.
      }>
        <Route path="dashboard" element={<SuperadminDashboard />} />
        <Route path="clients" element={<ClientList />} />
        <Route path="add-client" element={<AddClient />} />
        <Route path="delete-client" element={<DeleteClient />} />
        <Route path="reports" element={<Reports />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={
        // <ProtectedRoute role="admin">
          <AdminLayout />
        // </ProtectedRoute>
      }>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="employee-salary" element={<EmployeeSalary />} />
        <Route path="attendance" element={<AttendanceList />} />
        <Route path="add-employee" element={<AddEmployee />} />
        <Route path="roster-management" element={<RosterManagement />} />
        <Route path="salary-management" element={<SalaryManagement />} />
        <Route path="leave-requests" element={<LeaveRequests />} />
        <Route path="announcements" element={<Announcements />} />
      </Route>

      {/* Employee Routes */}
      <Route path="/employee" element={
        // <ProtectedRoute role="employee">
          <EmployeeLayout />
        // </ProtectedRoute>
      }>
        <Route path="dashboard" element={<EmployeeDashboard />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="salary" element={<Salary />} />
        <Route path="roster-view" element={<RosterView />} />
        <Route path="apply-leave" element={<ApplyLeave />} />
        <Route path="leave-balance" element={<LeaveBalance />} />
        <Route path="duty-log" element={<DutyLog />} />
      </Route>

      {/* Public Routes */}
      <Route path="/auth" element={<Auth />} />
      {/* <Route path="*" element={<NotFound />} /> */}

      {/* Redirect root to auth */}
      <Route path="/" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
};

export default AppRoutes;
