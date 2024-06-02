import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import ContentSection from '../components/ContentSection';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const hasLoggedIn = localStorage.getItem('hasLoggedIn');

    if (user && hasLoggedIn) {
      setWelcomeMessage(`Welcome to AirsoftMunteanu, ${user.username}!`);
      setLoggedInUser(user);
      const timer = setTimeout(() => {
        setWelcomeMessage('');
        localStorage.removeItem('hasLoggedIn');
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, []);

  const onLogout = () => {
    localStorage.removeItem('user');
    setLoggedInUser(null);
  };

  return (
    <div>
      <Helmet>
        <title>AirsoftMunteanu | Home</title>
      </Helmet>
      {welcomeMessage && (
        <div className="bg-green-500 text-white text-center p-4 absolute w-full z-40 top-16">
          {welcomeMessage}
        </div>
      )}
      <div>
        <Carousel />
        <ContentSection />
      </div>
    </div>
  );
};

export default HomePage;
