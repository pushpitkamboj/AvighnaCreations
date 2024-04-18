import React from 'react';
import Image from './assets/Logo.png'

const Intro = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        // backgroundImage: {Image}
        backgroundImage: `url('https://cdn0.weddingwire.in/article/9179/3_2/1280/jpg/79719-wedding-events-gautam-khullar-lead-image.jpeg')`,
      }}
    >

      <div className="absolute inset-0 bg-gray-900 bg-opacity-30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="text-center">
           <h1 className="text-5xl font-bold mb-4">Welcome to Avighna Creations</h1>
           {/* <p className="text-lg mb-8">
            15+ Years of Experience Crafting Memorable Events in Telangana and Andhra Pradesh: Your One-Stop Destination for Catering and Comprehensive Event Management Services.
          </p>  */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
            <span className="text-xl font-semibold">Crafting unforgettable beginnings</span>
            <div className="w-4 h-4 bg-red-500 rounded-full ml-2"></div>
          </div>
          <div className="flex items-center justify-center">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;