import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const [reservations, setReservations] = useState([]);
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const fetchReservations = async () => {
        try {
          const response = await axios.get('http://localhost:3001/reservations');
          const userReservations = response.data.filter(reservation => reservation.user_id === user.id);
          setReservations(userReservations);
        } catch (error) {
          console.error('Error fetching reservations:', error);
        }
      };

      fetchReservations();
    }
  }, [user]);

  const handlePasswordChange = async () => {
    if (!newPassword) return;

    try {
      await axios.put(`http://localhost:3001/users/${user.id}`, { ...user, password: newPassword });
      alert('Password updated successfully');
    } catch (error) {
      console.error('Error updating password:', error);
      alert('Error updating password');
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Profile | AirsoftMunteanu</title>
      </Helmet>
      <div className="container mx-auto mt-20 flex flex-col items-center flex-grow">
        <section className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Profile</h2>
          <p><strong>First Name:</strong> {user.firstName}</p>
          <p><strong>Last Name:</strong> {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <div className="mt-4">
            <label htmlFor="newPassword" className="block text-gray-700">New Password:</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button onClick={handlePasswordChange} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
              Change Password
            </button>
          </div>
        </section>
        {!user.is_admin && (
          <section className="bg-white p-8 rounded shadow-md w-full max-w-md mt-8">
            <h2 className="text-xl font-bold mb-4">My Reservations</h2>
            <ul>
              {reservations.map(reservation => (
                <li key={reservation.id} className="mb-4">
                  <strong>Event ID:</strong> {reservation.event_id}<br />
                  <strong>Date:</strong> {new Date(reservation.date).toLocaleDateString()}
                </li>
              ))}
            </ul>
          </section>
        )}
        {user.is_admin && (
          <section className="bg-white p-8 rounded shadow-md w-full max-w-md mt-8">
            <button
              onClick={() => navigate('/manage-users')}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Manage Users
            </button>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
