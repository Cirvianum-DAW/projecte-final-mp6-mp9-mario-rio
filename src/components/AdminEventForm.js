// src/components/AdminEventForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminEventForm = ({ event, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    date: '',
    availableSlots: ''
  });

  useEffect(() => {
    if (event) {
      setFormData({
        name: event.name,
        description: event.description,
        image: event.image,
        date: event.date,
        availableSlots: event.availableSlots
      });
    }
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const saveEvent = event ? axios.put : axios.post;
    const url = event ? `http://localhost:3001/events/${event.id}` : 'http://localhost:3001/events';
    
    saveEvent(url, formData)
      .then(() => onSave())
      .catch(error => console.error('Error saving event:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-600">Event Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label htmlFor="description" className="block text-gray-600">Description:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" required></textarea>
      </div>
      <div>
        <label htmlFor="image" className="block text-gray-600">Image URL:</label>
        <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label htmlFor="date" className="block text-gray-600">Date:</label>
        <input type="datetime-local" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label htmlFor="availableSlots" className="block text-gray-600">Available Slots:</label>
        <input type="number" id="availableSlots" name="availableSlots" value={formData.availableSlots} onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <button type="submit" className="bg-green-500 text-white p-2 rounded">Save Event</button>
    </form>
  );
};

export default AdminEventForm;
