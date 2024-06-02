import React from 'react';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
  return (
    <main className="container mx-auto mt-8 flex-1">
      <Helmet>
        <title>Contact | AirsoftMunteanu</title>
      </Helmet>
      <section className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
          <form action="#" method="post" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-600">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-600">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-2 border rounded"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Submit
            </button>
          </form>
        </div>

        <aside className="lg:w-1/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1482.878424931956!2d2.3103300000000004!3d41.98403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a52f505b0487c5%3A0x90885d08746b034c!2sCarrer%20Joan%20Maragall%2C%207%2C%2008510%20Roda%20de%20Ter%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1673468041273!5m2!1ses!2ses"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </aside>
      </section>

      <section className="flex flex-col items-center mt-8">
        <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/?size=100&id=yGcWL8copNNQ&format=png&color=000000"
              alt="Facebook"
              className="w-8 h-8"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
              alt="Twitter"
              className="w-8 h-8"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/?size=100&id=xWVjuc9hryql&format=png&color=000000"
              alt="Instagram"
              className="w-8 h-8"
            />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
