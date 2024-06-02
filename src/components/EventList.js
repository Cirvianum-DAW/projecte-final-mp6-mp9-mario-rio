// src/components/EventList.js
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import EventCard from './EventCard';
import { AuthContext } from '../AuthContext';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios.get('http://localhost:3001/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const handleDelete = (eventId) => {
    axios.delete(`http://localhost:3001/events/${eventId}`)
      .then(() => setEvents(events.filter(event => event.id !== eventId)))
      .catch(error => console.error('Error deleting event:', error));
  };

  const handleEdit = (event) => {
    // Show edit form or navigate to edit page
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {events.map(event => (
        <EventCard key={event.id} event={event} isAdmin={user && user.is_admin} onDelete={handleDelete} onEdit={handleEdit} />
      ))}
    </section>
  );
};

export default EventList;
