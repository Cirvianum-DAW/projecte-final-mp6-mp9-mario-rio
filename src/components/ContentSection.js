import React from 'react';
import { Link } from 'react-router-dom';

const ContentSection = () => {
  return (
    <div id="content" className="container mx-auto mt-8 pb-8 lg:pb-16 flex min-h-screen">
      <div className="container mx-auto mt-8 px-4 mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4">
          The Most Famous Airsoft Field in Barcelona
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-2">
          Welcome to AirsoftMunteanu!
        </h2>
        <hr className="border-t-2 border-gray-300 my-4" />

        <p className="text-lg text-center mb-8">Discover what you can find in this airsoft field:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="relative flex flex-col items-center">
            <Link to="/events" className="block w-full h-full">
              <div className="w-full h-64 overflow-hidden rounded-lg mb-2 relative transition duration-300 ease-in-out transform hover:scale-105">
                <img
                  src="https://via.placeholder.com/400x400"
                  alt="Events Image"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 ease-in-out rounded-lg flex items-center justify-center bg-black bg-opacity-50">
                  <span className="text-lg font-semibold text-white">Events</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="relative flex flex-col items-center">
            <Link to="/shop" className="block w-full h-full">
              <div className="w-full h-64 overflow-hidden rounded-lg mb-2 relative transition duration-300 ease-in-out transform hover:scale-105">
                <img
                  src="https://via.placeholder.com/400x400"
                  alt="Shop Image"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 ease-in-out rounded-lg flex items-center justify-center bg-black bg-opacity-50">
                  <span className="text-lg font-semibold text-white">Shop</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="relative flex flex-col items-center">
            <Link to="/policies" className="block w-full h-full">
              <div className="w-full h-64 overflow-hidden rounded-lg mb-2 relative transition duration-300 ease-in-out transform hover:scale-105">
                <img
                  src="https://via.placeholder.com/400x400"
                  alt="Policies Image"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 ease-in-out rounded-lg flex items-center justify-center bg-black bg-opacity-50">
                  <span className="text-lg font-semibold text-white">Policies</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="relative flex flex-col items-center">
            <Link to="/contact" className="block w-full h-full">
              <div className="w-full h-64 overflow-hidden rounded-lg mb-2 relative transition duration-300 ease-in-out transform hover:scale-105">
                <img
                  src="https://via.placeholder.com/400x400"
                  alt="Contact Image"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'top' }}
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 ease-in-out rounded-lg flex items-center justify-center bg-black bg-opacity-50">
                  <span className="text-lg font-semibold text-white">Contact</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <hr className="border-t-2 border-gray-300 my-8" />

        <div className="text-center mt-16 mb-8">
          <p className="text-4xl font-semibold mb-2">More About Us</p>
          <p className="text-lg">
            <Link to="/about" className="text-blue-500 underline text-lg">Visit our About Us page</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
