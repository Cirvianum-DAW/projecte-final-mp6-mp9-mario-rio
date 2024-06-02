import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    is_admin: false
  });
  const navigate = useNavigate();

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

  const handleUserSelect = (userId) => {
    const user = users.find((u) => u.id === parseInt(userId));
    setSelectedUser(user);
    setNewUser({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      is_admin: false
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({
      ...selectedUser,
      [name]: value,
    });
  };

  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleUserUpdate = async (e) => {
    e.preventDefault();
    try {
      if (selectedUser) {
        await axios.put(`http://localhost:3001/users/${selectedUser.id}`, selectedUser);
        alert('User updated successfully');
      } else {
        const response = await axios.post('http://localhost:3001/users', newUser);
        setUsers([...users, response.data]);
        alert('User created successfully');
      }
    } catch (error) {
      console.error('Error updating/creating user:', error);
      alert('Error updating/creating user');
    }
  };

  const handleUserDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/users/${selectedUser.id}`);
      alert('User deleted successfully');
      setSelectedUser(null);
      setUsers(users.filter((user) => user.id !== selectedUser.id));
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error deleting user');
    }
  };

  return (
    <div className="container mx-auto mt-20">
      <Helmet>
        <title>User Management | AirsoftMunteanu</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by username"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <select onChange={(e) => handleUserSelect(e.target.value)} className="p-2 border rounded w-full">
          <option value="">Select a user</option>
          {filteredUsers.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </select>
      </div>
      {selectedUser && (
        <form onSubmit={handleUserUpdate} className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h3 className="text-xl font-bold mb-4">Edit User</h3>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={selectedUser.firstName}
              onChange={handleUserChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={selectedUser.lastName}
              onChange={handleUserChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={selectedUser.email}
              onChange={handleUserChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="is_admin" className="block text-gray-600">
              Admin
            </label>
            <input
              type="checkbox"
              id="is_admin"
              name="is_admin"
              checked={selectedUser.is_admin}
              onChange={(e) =>
                setSelectedUser({
                  ...selectedUser,
                  is_admin: e.target.checked,
                })
              }
              className="mr-2 leading-tight"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded mr-4">
            Update User
          </button>
          <button
            type="button"
            className="bg-red-500 text-white p-2 rounded"
            onClick={handleUserDelete}
          >
            Delete User
          </button>
        </form>
      )}
      {!selectedUser && (
        <form onSubmit={handleUserUpdate} className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h3 className="text-xl font-bold mb-4">Create User</h3>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={newUser.firstName}
              onChange={handleNewUserChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={newUser.lastName}
              onChange={handleNewUserChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={newUser.username}
              onChange={handleNewUserChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={newUser.email}
              onChange={handleNewUserChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={newUser.password}
              onChange={handleNewUserChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="is_admin" className="block text-gray-600">
              Admin
            </label>
            <input
              type="checkbox"
              id="is_admin"
              name="is_admin"
              checked={newUser.is_admin}
              onChange={(e) =>
                setNewUser({
                  ...newUser,
                  is_admin: e.target.checked,
                })
              }
              className="mr-2 leading-tight"
            />
          </div>
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Create User
          </button>
        </form>
      )}
    </div>
  );
};

export default UserManagementPage;
