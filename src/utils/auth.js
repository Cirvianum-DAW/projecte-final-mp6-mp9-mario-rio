import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const register = async ({ firstName, lastName, username, email, password }) => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    const users = response.data;
    const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
    const newUser = {
      id: newId,
      firstName,
      lastName,
      username,
      password,
      email,
      created_at: new Date().toISOString(),
      is_admin: false,
      orders: [],
      reservations: []
    };

    await axios.post(`${API_URL}/users`, newUser);
    return newUser;
  } catch (error) {
    throw new Error('Registration failed');
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    const users = response.data;
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return user;
  } catch (error) {
    throw new Error('Login failed');
  }
};
