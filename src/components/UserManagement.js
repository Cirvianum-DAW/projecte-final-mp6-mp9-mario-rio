import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    is_admin: false,
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/users', newUser);
      setUsers([...users, newUser]);
      setNewUser({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        is_admin: false,
      });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3001/users/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEditUser = async (userId, updatedUser) => {
    try {
      await axios.put(`http://localhost:3001/users/${userId}`, updatedUser);
      setUsers(users.map(user => (user.id === userId ? updatedUser : user)));
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Users</h2>
      <form onSubmit={handleAddUser} className="space-y-4 mb-4">
        <div>
          <label htmlFor="firstName" className="block text-gray-600">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={newUser.firstName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-gray-600">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={newUser.lastName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="username" className="block text-gray-600">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={newUser.username}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-600">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-600">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={newUser.password}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="is_admin" className="block text-gray-600">Is Admin:</label>
          <input
            type="checkbox"
            id="is_admin"
            name="is_admin"
            checked={newUser.is_admin}
            onChange={() => setNewUser({ ...newUser, is_admin: !newUser.is_admin })}
            className="mr-2 leading-tight"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add User</button>
      </form>
      <h3 className="text-lg font-bold mb-4">All Users</h3>
      <ul>
        {users.map(user => (
          <li key={user.id} className="mb-2 p-2 border rounded">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Admin:</strong> {user.is_admin ? 'Yes' : 'No'}</p>
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
              onClick={() => handleEditUser(user.id, { ...user, is_admin: !user.is_admin })}
            >
              {user.is_admin ? 'Revoke Admin' : 'Make Admin'}
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleDeleteUser(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
