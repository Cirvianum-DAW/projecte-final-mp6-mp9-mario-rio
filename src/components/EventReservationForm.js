import React, { useState } from 'react';
import { bookEvent } from '../api/api';

const EventReservationForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [participants, setParticipants] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await bookEvent({ eventName, eventDate, participants });
      console.log('Event booked successfully:', response);
    } catch (error) {
      console.error('Error booking event:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label htmlFor="eventName">Event Name</label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="border p-2"
        />
      </div>
      <div>
        <label htmlFor="eventDate">Event Date</label>
        <input
          type="date"
          id="eventDate"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="border p-2"
        />
      </div>
      <div>
        <label htmlFor="participants">Participants</label>
        <input
          type="number"
          id="participants"
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
          className="border p-2"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Book Event
      </button>
    </form>
  );
};

export default EventReservationForm;
