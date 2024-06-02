import React from 'react';
import EventReservationForm from '../components/EventReservationForm';
import { Helmet } from 'react-helmet';

const EventPage = () => {
  return (
    <div className="p-4">
      <Helmet>
        <title>AirsoftMunteanu | Events</title>
      </Helmet>
      <h1 className="text-2xl font-bold">Book Event</h1>
      <EventReservationForm />
    </div>
  );
};

export default EventPage;
