import React, { useState } from 'react';

const Auth = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistered) {
      // Handle login logic here
      console.log('Logging in with', formData);
    } else {
      // Handle registration logic here
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      console.log('Registering with', formData);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '1rem' }}>
      <h2>{isRegistered ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {!isRegistered && (
          <div style={{ marginTop: '1rem' }}>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <button type="submit" style={{ marginTop: '1rem' }}>
          {isRegistered ? 'Login' : 'Register'}
        </button>
      </form>
      <p style={{ marginTop: '1rem' }}>
        {isRegistered ? "Don't have an account?" : 'Already registered?'}{' '}
        <button onClick={() => setIsRegistered(!isRegistered)} style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer' }}>
          {isRegistered ? 'Register here' : 'Login here'}
        </button>
      </p>
    </div>
  );
};

export default Auth;
