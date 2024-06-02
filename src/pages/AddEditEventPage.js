import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const AddEditEventPage = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState({
    name: '',
    description: '',
    image: '',
    date: '',
    availableSlots: '',
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchEvent = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/events/${id}`);
          const event = {
            ...response.data,
            id: parseInt(response.data.id, 10),
            availableSlots: parseInt(response.data.availableSlots, 10),
          };
          setEventData(event);
          setIsEditMode(true);
        } catch (error) {
          console.error('Error fetching event:', error);
        }
      };
      fetchEvent();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: name === 'availableSlots' ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await axios.put(`http://localhost:3001/events/${id}`, eventData);
      } else {
        const response = await axios.get('http://localhost:3001/events');
        const newId = response.data.length > 0 ? Math.max(...response.data.map(event => parseInt(event.id, 10))) + 1 : 1;
        const newEvent = { ...eventData, id: newId };
        await axios.post('http://localhost:3001/events', newEvent);
      }
      navigate('/events');
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{isEditMode ? 'Edit Event' : 'Add Event'} | AirsoftMunteanu</title>
      </Helmet>
      <div className="container mx-auto mt-8 flex justify-center items-center flex-grow">
        <section className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">{isEditMode ? 'Edit Event' : 'Add Event'}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-600">
                Event Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={eventData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-gray-600">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={eventData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="image" className="block text-gray-600">
                Image URL:
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={eventData.image}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-gray-600">
                Date:
              </label>
              <input
                type="datetime-local"
                id="date"
                name="date"
                value={eventData.date}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="availableSlots" className="block text-gray-600">
                Available Slots:
              </label>
              <input
                type="number"
                id="availableSlots"
                name="availableSlots"
                value={eventData.availableSlots}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              {isEditMode ? 'Update Event' : 'Add Event'}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddEditEventPage;
