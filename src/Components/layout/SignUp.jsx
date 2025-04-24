// src/components/SignUp.jsx
import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername]       = useState('');
  const [email, setEmail]             = useState('');
  const [password, setPassword]       = useState('');
  const [confirm, setConfirm]         = useState('');
  const [error, setError]             = useState('');
  const [success, setSuccess]         = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // basic validation
    if (!username || !email || !password) {
      setError('All fields are required.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }

    // load existing users or start with []
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    // check for duplicate username/email
    if (users.some(u => u.username === username)) {
      setError('Username already taken.');
      return;
    }
    if (users.some(u => u.email === email)) {
      setError('Email already registered.');
      return;
    }

    // append new user
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    setSuccess('Account created! You can now log in.');
    // clear form
    setUsername(''); setEmail(''); setPassword(''); setConfirm('');
  };

  return (
    <div className="container-form">
      <div className="Card">
        <h1>Create Account</h1>
        {error   && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoComplete="off"
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="off"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="new-password"
          />

          <label>Confirm Password</label>
          <input
            type="password"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            autoComplete="new-password"
          />

          <button className="btn-sign-in" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
