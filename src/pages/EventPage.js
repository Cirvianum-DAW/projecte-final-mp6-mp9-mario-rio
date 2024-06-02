import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setLoggedInUser(storedUser);
    }

    fetchEvents();
  }, []);

  const handleDelete = async (eventId) => {
    try {
      await axios.delete(`http://localhost:3001/events/${eventId}`);
      setEvents(events.filter((event) => event.id !== eventId));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleEdit = (eventId) => {
    navigate(`/events/edit/${eventId}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>AirsoftMunteanu | Events</title>
      </Helmet>
      <div className="container mx-auto mt-8 flex flex-col items-center flex-grow">
        <h1 className="text-3xl font-bold mb-8">Events</h1>
        {loggedInUser && loggedInUser.is_admin && (
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-full mb-8"
            onClick={() => navigate('/events/add')}
          >
            Add Event
          </button>
        )}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {events.map((event) => (
            <article key={event.id} className="bg-white p-4 rounded shadow-md flex flex-col">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-bold mb-2">{event.name}</h2>
              <p className="text-gray-600">Date: {new Date(event.date).toLocaleDateString()}</p>
              <p className="text-gray-600">Time: {new Date(event.date).toLocaleTimeString()}</p>
              {loggedInUser && loggedInUser.is_admin ? (
                <div className="flex justify-between mt-4">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                    onClick={() => handleEdit(event.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleDelete(event.id)}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <button className="bg-blue-500 text-white px-6 py-3 rounded-full mt-4">
                  Reserve
                </button>
              )}
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default EventPage;
