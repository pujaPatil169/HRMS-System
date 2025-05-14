import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../redux/slices/authSlice';

const LoginRegister = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const [isRegistered, setIsRegistered] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'employee',
  });

  const toggleForm = () => {
    setIsRegistered(!isRegistered);
    setFormData({ username: '', password: '', role: 'employee' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistered) {
      dispatch(loginUser({ username: formData.username, password: formData.password }));
    } else {
      dispatch(registerUser(formData));
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>{isRegistered ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        {!isRegistered && (
          <div style={{ marginBottom: '10px' }}>
            <label>Role:</label>
            <select name="role" value={formData.role} onChange={handleChange} style={{ width: '100%', padding: '8px' }}>
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
              <option value="superadmin">Superadmin</option>
            </select>
          </div>
        )}
        <button type="submit" style={{ padding: '10px 20px' }}>
          {isRegistered ? 'Login' : 'Register'}
        </button>
      </form>
      <p style={{ marginTop: '10px' }}>
        {isRegistered ? "Don't have an account?" : 'Already registered?'}{' '}
        <button onClick={toggleForm} style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer' }}>
          {isRegistered ? 'Register here' : 'Login here'}
        </button>
      </p>
      {authState.status === 'failed' && <p style={{ color: 'red' }}>{authState.error}</p>}
    </div>
  );
};

export default LoginRegister;
