import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../AuthContext';

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [reservations, setReservations] = useState([]);
  const { user } = useContext(AuthContext);
  const [warning, setWarning] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/events');
        const eventsData = response.data.map(event => ({
          ...event,
          id: parseInt(event.id, 10),
        }));
        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    const fetchReservations = async () => {
      try {
        const response = await axios.get('http://localhost:3001/reservations');
        const reservationsData = response.data.map(reservation => ({
          ...reservation,
          id: parseInt(reservation.id, 10),
          user_id: parseInt(reservation.user_id, 10),
          event_id: parseInt(reservation.event_id, 10),
        }));
        setReservations(reservationsData);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchEvents();
    fetchReservations();
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

  const handleReserve = async (eventId) => {
    if (!user) {
      setWarning('Please log in to reserve an event.');
      return;
    }

    try {
      const response = await axios.get('http://localhost:3001/reservations');
      const reservations = response.data;
      const newId = reservations.length > 0 ? Math.max(...reservations.map(res => res.id)) + 1 : 1;

      const newReservation = {
        id: newId,
        user_id: user.id,
        event_id: eventId,
        date: new Date().toISOString(),
      };

      await axios.post('http://localhost:3001/reservations', newReservation);

      const updatedEvents = events.map((event) =>
        event.id === eventId
          ? { ...event, availableSlots: event.availableSlots - 1 }
          : event
      );
      setEvents(updatedEvents);
      setReservations([...reservations, newReservation]);
    } catch (error) {
      console.error('Error reserving event:', error);
    }
  };

  const handleCancelReservation = async (eventId) => {
    if (!user) {
      setWarning('Please log in to cancel a reservation.');
      return;
    }

    try {
      const reservationToCancel = reservations.find(
        (res) => res.user_id === user.id && res.event_id === eventId
      );

      if (reservationToCancel) {
        await axios.delete(
          `http://localhost:3001/reservations/${reservationToCancel.id}`
        );

        const updatedEvents = events.map((event) =>
          event.id === eventId
            ? { ...event, availableSlots: event.availableSlots + 1 }
            : event
        );
        setEvents(updatedEvents);
        setReservations(
          reservations.filter((res) => res.id !== reservationToCancel.id)
        );
      }
    } catch (error) {
      console.error('Error canceling reservation:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Events | AirsoftMunteanu</title>
      </Helmet>
      <div className="container mx-auto mt-8 flex flex-col items-center flex-grow">
        <h1 className="text-3xl font-bold mb-8">Events</h1>
        {warning && (
          <div className="bg-red-500 text-white text-center p-4 mb-4">
            {warning}
          </div>
        )}
        {user && user.is_admin && (
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
              <p className="text-gray-600">Available Slots: {event.availableSlots}</p>
              {user && user.is_admin ? (
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
              ) : reservations.some((res) => res.user_id === user?.id && res.event_id === event.id) ? (
                <button
                  className="bg-red-500 text-white px-6 py-3 rounded-full mt-4"
                  onClick={() => handleCancelReservation(event.id)}
                >
                  Cancel Reservation
                </button>
              ) : (
                <button
                  className="bg-blue-500 text-white px-6 py-3 rounded-full mt-4"
                  onClick={() => handleReserve(event.id)}
                >
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
