// import React from 'react';
// import {
//   Box,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from '@mui/material';

// const mockAttendance = [
//   {
//     id: 1,
//     name: 'Rohit Sharma',
//     date: '2025-05-01',
//     loginTime: '09:00 AM',
//     logoutTime: '06:00 PM',
//     status: 'Present',
//   },
//   {
//     id: 2,
//     name: 'Priya Mehta',
//     date: '2025-05-01',
//     loginTime: '09:30 AM',
//     logoutTime: '05:45 PM',
//     status: 'Present',
//   },
//   {
//     id: 3,
//     name: 'Ajay Kumar',
//     date: '2025-05-01',
//     loginTime: '-',
//     logoutTime: '-',
//     status: 'Absent',
//   },
// ];

// const AttendanceList = () => {
//   return (
//     <Box>
//       <Typography variant="h5" gutterBottom>
//         Employee Attendance Records
//       </Typography>
//       <TableContainer component={Paper} sx={{ mt: 2 }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Employee Name</TableCell>
//               <TableCell>Date</TableCell>
//               <TableCell>Login Time</TableCell>
//               <TableCell>Logout Time</TableCell>
//               <TableCell>Status</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {mockAttendance.map((record) => (
//               <TableRow key={record.id}>
//                 <TableCell>{record.name}</TableCell>
//                 <TableCell>{record.date}</TableCell>
//                 <TableCell>{record.loginTime}</TableCell>
//                 <TableCell>{record.logoutTime}</TableCell>
//                 <TableCell>{record.status}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default AttendanceList;


import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const mockAttendance = [
  {
    id: 1,
    name: 'Rohit Sharma',
    date: '2025-05-01',
    loginTime: '09:00 AM',
    logoutTime: '06:00 PM',
    status: 'Present',
  },
  {
    id: 2,
    name: 'Priya Mehta',
    date: '2025-05-01',
    loginTime: '09:30 AM',
    logoutTime: '05:45 PM',
    status: 'Present',
  },
  {
    id: 3,
    name: 'Ajay Kumar',
    date: '2025-05-01',
    loginTime: '-',
    logoutTime: '-',
    status: 'Absent',
  },
];

const AttendanceList = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Employee Attendance Records
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Login Time</TableCell>
              <TableCell>Logout Time</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockAttendance.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.name}</TableCell>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.loginTime}</TableCell>
                <TableCell>{record.logoutTime}</TableCell>
                <TableCell>{record.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AttendanceList;
