import React from 'react';

const EventCard = ({ event, isAdmin, onDelete, onEdit }) => {
  return (
    <article className="mb-8">
      <img src={event.image} alt={event.name} className="w-full h-40 object-cover mb-4" style={{ objectFit: 'contain' }} />
      <h2 className="text-xl font-bold mb-2">{event.name}</h2>
      <p className="text-gray-600">Date: {new Date(event.date).toLocaleDateString()}</p>
      <p className="text-gray-600">Time: {new Date(event.date).toLocaleTimeString()}</p>
      {isAdmin ? (
        <div className="mt-4">
          <button onClick={() => onEdit(event)} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">Edit</button>
          <button onClick={() => onDelete(event.id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        </div>
      ) : (
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full mt-4">Reserve</button>
      )}
    </article>
  );
};

export default EventCard;
