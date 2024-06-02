import React from 'react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
      <main className="container mx-auto mt-8 flex-1">
        <Helmet>
        <title>AirsoftMunteanu | About Us</title>
        </Helmet>
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      <section className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <article className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Our Story</h2>
            <p className="text-gray-600">
              AirsoftMunteanu was founded with a passion for adventure and teamwork. Our field provides a safe and exciting environment for airsoft enthusiasts of all levels. Over the years, we have grown into one of the most popular airsoft destinations in the region, offering a variety of terrains and scenarios to challenge and entertain players.
            </p>
          </article>

          <article className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to provide the ultimate airsoft experience, promoting safety, fun, and camaraderie among players. We strive to create an inclusive community where everyone, from beginners to seasoned players, can enjoy the thrill of airsoft in a well-maintained and friendly environment.
            </p>
          </article>

          <article className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p className="text-gray-600">
              At AirsoftMunteanu, we envision a future where airsoft is recognized as a premier recreational activity that fosters teamwork, strategic thinking, and physical fitness. We are committed to continuous improvement, constantly upgrading our facilities and services to provide the best possible experience for our community.
            </p>
          </article>
        </div>

        <aside className="lg:w-1/3">
          <div className="w-full h-48 bg-gray-300 mb-4 flex items-center justify-center">
            <span>Image Placeholder 1</span>
          </div>

          <div className="w-full h-48 bg-gray-300 mb-4 flex items-center justify-center">
            <span>Image Placeholder 2</span>
          </div>

          <div className="w-full h-48 bg-gray-300 mb-4 flex items-center justify-center">
            <span>Image Placeholder 3</span>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default AboutPage;
