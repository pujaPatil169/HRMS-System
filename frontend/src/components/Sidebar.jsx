import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ role }) => {
  let links = [];

  if (role === 'superadmin') {
    links = [
      { to: '/superadmin/dashboard', label: 'Dashboard' },
      { to: '/superadmin/add-client', label: 'Add Client' },
      { to: '/superadmin/client-list', label: 'Client List' },
      { to: '/superadmin/reports', label: 'Reports' },
    ];
  } else if (role === 'admin') {
    links = [
      { to: '/admin/dashboard', label: 'Dashboard' },
      { to: '/admin/employee-list', label: 'Employee List' },
      { to: '/admin/attendance-list', label: 'Attendance List' },
      { to: '/admin/leave-requests', label: 'Leave Requests' },
      { to: '/admin/salary-management', label: 'Salary Management' },
      { to: '/admin/roster-management', label: 'Roster Management' },
    ];
  } else if (role === 'employee') {
    links = [
      { to: '/employee/dashboard', label: 'Dashboard' },
      { to: '/employee/apply-leave', label: 'Apply Leave' },
      { to: '/employee/leave-balance', label: 'Leave Balance' },
      { to: '/employee/attendance', label: 'Attendance' },
      { to: '/employee/roster-view', label: 'Roster View' },
      { to: '/employee/salary', label: 'Salary' },
    ];
  }

  return (
    <aside style={{ width: '220px', backgroundColor: '#f5f5f5', padding: '20px' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {links.map((link) => (
            <li key={link.to} style={{ marginBottom: '10px' }}>
              <Link to={link.to} style={{ textDecoration: 'none', color: '#333' }}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
