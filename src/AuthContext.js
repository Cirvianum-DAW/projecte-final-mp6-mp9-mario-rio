import React, { createContext, useState, useEffect } from 'react';
import { login as loginUser } from './utils/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const userData = await loginUser(username, password);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('hasLoggedIn', true);
      setUser(userData);
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('hasLoggedIn');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
