// src/components/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return <button onClick={handleLogout} className="text-red-500">Logout</button>;
};

export default Logout;
