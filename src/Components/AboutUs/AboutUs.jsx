import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-5">
      <div>
        <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
        
        <p className="text-lg mb-6">
          Welcome to <span className="font-semibold text-amber-500">Creator Dashboard</span> - a platform built for modern creators to manage their profiles, engage with dynamic content, and grow their digital presence.
        </p>

        <p className="text-lg mb-6">
          Our mission is to empower users by providing a seamless experience to earn rewards, stay informed, and interact with inspiring content from multiple platforms like Twitter, Reddit, and LinkedIn.
        </p>

        <p className="text-lg mb-6">
          Whether you are an artist, influencer, entrepreneur, or just passionate about creating, our dashboard is designed to keep you connected and motivated. 
          Earn credit points for your daily activities, save and share your favorite content, and be part of a growing creator community.
        </p>

        <p className="text-lg">
          Built with love by the VertxAI Team - using the power of the MERN stack and modern cloud technologies to bring you a faster, safer, and more rewarding experience.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
