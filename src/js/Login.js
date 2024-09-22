import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const USERNAME = process.env.REACT_APP_USERNAME; // Add this line
  const PASSWORD = process.env.REACT_APP_PASSWORD; // Add this line

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === USERNAME && password === PASSWORD) { // Update this line
      setIsAuthenticated(true);
      navigate('/add-card');
    } else {
      console.log(USERNAME, PASSWORD);
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', padding: '1rem' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
