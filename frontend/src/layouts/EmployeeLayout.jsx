import React from 'react';
import { Outlet } from 'react-router-dom';
import LayoutWrapper from './LayoutWrapper';

function EmployeeLayout() {
  return <LayoutWrapper><Outlet /></LayoutWrapper>;
}

export default EmployeeLayout;
