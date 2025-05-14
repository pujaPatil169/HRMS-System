import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const LayoutWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, role } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="app-layout">
      <header className="app-header" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#1976d2', color: 'white' }}>
        <div className="logo">
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '20px' }}>
            HRMS & Payroll
          </Link>
        </div>
        <nav>
          {!token ? (
            <>
              <Link to="/login" style={{ color: 'white', marginRight: '15px' }}>Login</Link>
              <Link to="/register" style={{ color: 'white' }}>Register</Link>
            </>
          ) : (
            <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
              Logout
            </button>
          )}
        </nav>
      </header>
      <div className="app-body" style={{ display: 'flex' }}>
        {token && <Sidebar role={role} />}
        <main style={{ flexGrow: 1, padding: '20px' }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default LayoutWrapper;
