import { Routes, Route } from 'react-router-dom';
import SuperadminLayout from './layouts/SuperadminLayout';
import ClientList from './pages/Superadmin/ClientList';
import SuperadminDashboard from './pages/Superadmin/Dashboard';
import AddClient from './pages/Superadmin/AddClient';
import DeleteClient from './pages/Superadmin/DeleteClient';
import Reports from './pages/Superadmin/Reports';

function App() {
  return (
    <Routes>
      <Route path="/superadmin" element={<SuperadminLayout />}>
        <Route path="dashboard" element={<SuperadminDashboard />} />
        <Route path="clients" element={<ClientList />} />
        <Route path="add-client" element={<AddClient />} />
        <Route path="delete-client" element={<DeleteClient />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  );
}

export default App;
