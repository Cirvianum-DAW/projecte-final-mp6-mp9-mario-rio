import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <div className="footer-section mb-4 mx-4">
          <img
            src="https://optimario.netlify.app/pin.84bb889e.svg"
            alt="Location Logo"
            className="w-8 h-8 mb-2 mx-auto"
          />
          <p className="text-sm text-center">123 Main Street, Cityville, Country</p>
        </div>
        <div className="footer-section mb-4 mx-4">
          <img
            src="https://optimario.netlify.app/telephone.e6378c1e.svg"
            alt="Phone Logo"
            className="w-8 h-8 mb-2 mx-auto"
          />
          <p className="text-sm text-center">Phone: +1 (555) 123-4567</p>
        </div>
        <div className="footer-section mb-4 mx-4">
          <img
            src="https://optimario.netlify.app/email.4b784215.svg"
            alt="Contact Logo"
            className="w-8 h-8 mb-2 mx-auto"
          />
          <p className="text-sm text-center">Email: info@example.com</p>
        </div>
        <hr className="border-gray-700 my-20 w-full" />
        <div className="container mx-auto flex flex-col justify-center items-center">
          <p className="text-sm">Copyright © 2024, Educational Purpose Only! Uploaded on Netlify.</p>
          <div className="mt-4">
            <a href="/" className="text-blue-400 hover:text-blue-500 mr-4">Home</a>
            <a href="/terms" className="text-blue-400 hover:text-blue-500 mr-4">Terms</a>
            <a href="/policies" className="text-blue-400 hover:text-blue-500 mr-4">Policies</a>
            <a href="/sources" className="text-blue-400 hover:text-blue-500 mr-4">Sources</a>
            <a href="/contact" className="text-blue-400 hover:text-blue-500">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
