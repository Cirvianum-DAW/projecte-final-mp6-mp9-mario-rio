// src/pages/ProfilePage.js
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const [reservations, setReservations] = useState([]);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/reservations?user_id=${user.id}`);
        setReservations(response.data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/orders?user_id=${user.id}`);
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    if (user) {
      fetchReservations();
      if (!user.is_admin) {
        fetchOrders();
      }
    }
  }, [user]);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{user ? `${user.username}'s Profile` : 'Profile'} | AirsoftMunteanu</title>
      </Helmet>
      <div className="container mx-auto mt-20 flex flex-col items-center flex-grow">
        <section className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Profile</h2>
          <p><strong>First Name:</strong> {user?.firstName}</p>
          <p><strong>Last Name:</strong> {user?.lastName}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <div className="mt-4">
            <label htmlFor="newPassword" className="block text-gray-600">New Password:</label>
            <input type="password" id="newPassword" className="w-full p-2 border rounded" />
            <button className="bg-blue-500 text-white p-2 rounded mt-2">Change Password</button>
          </div>
        </section>
        {!user?.is_admin && (
          <section className="bg-white p-8 rounded shadow-md w-full max-w-md mt-8">
            <h2 className="text-2xl font-bold mb-4">My Reservations</h2>
            <ul>
              {reservations.map((res) => (
                <li key={res.id} className="mb-4">
                  <p><strong>Event ID:</strong> {res.event_id}</p>
                  <p><strong>Date:</strong> {new Date(res.date).toLocaleDateString()}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
        {user?.is_admin && (
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-full mt-8"
            onClick={() => navigate('/user-management')}
          >
            Manage Users
          </button>
        )}
        {!user?.is_admin && (
          <section className="bg-white p-8 rounded shadow-md w-full max-w-md mt-8">
            <h2 className="text-2xl font-bold mb-4">My Orders</h2>
            <ul>
              {orders.map((order) => (
                <li key={order.id} className="mb-4">
                  <p><strong>Product ID:</strong> {order.product_id}</p>
                  <p><strong>Quantity:</strong> {order.quantity}</p>
                  <p><strong>Total Price:</strong> ${order.total_price}</p>
                  <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
