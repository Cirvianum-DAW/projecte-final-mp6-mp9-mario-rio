import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const PoliciesPage = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="container mx-auto mt-8 flex-1">
      <Helmet>
        <title>AirsoftMunteanu | Policies</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-8">Policies</h1>

      <div className="accordion mb-4">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3"
          onClick={() => toggleAccordion(1)}
        >
          <span>General Policies</span>
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${openAccordion === 1 ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5L5 1 1 5"
            />
          </svg>
        </button>
        {openAccordion === 1 && (
          <div className="p-5 border border-b-0 border-gray-200 bg-gray-100">
            <p className="mb-2 text-gray-700">
              Our general policies are designed to ensure a safe and enjoyable experience for all participants. Please adhere to all safety guidelines and respect the property and other participants.
            </p>
          </div>
        )}
      </div>

      <div className="accordion mb-4">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3"
          onClick={() => toggleAccordion(2)}
        >
          <span>Safety Rules</span>
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${openAccordion === 2 ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5L5 1 1 5"
            />
          </svg>
        </button>
        {openAccordion === 2 && (
          <div className="p-5 border border-b-0 border-gray-200 bg-gray-100">
            <p className="mb-2 text-gray-700">
              Safety is our top priority. All players must wear protective gear, including goggles and face masks. No physical contact is allowed, and all weapons must be checked and approved by our staff before use.
            </p>
          </div>
        )}
      </div>

      <div className="accordion">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3"
          onClick={() => toggleAccordion(3)}
        >
          <span>Booking and Cancellation</span>
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${openAccordion === 3 ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5L5 1 1 5"
            />
          </svg>
        </button>
        {openAccordion === 3 && (
          <div className="p-5 border border-t-0 border-gray-200 bg-gray-100">
            <p className="mb-2 text-gray-700">
              All bookings must be made at least 48 hours in advance. Cancellations made within 24 hours of the scheduled time will not be refunded. Please contact our support team for any booking-related inquiries.
            </p>
            <p className="mb-2 text-gray-700">
              For more information on our booking and cancellation policies, please visit our <a href="https://google.com" className="text-blue-600 hover:underline">Booking and Cancellation page</a>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PoliciesPage;
