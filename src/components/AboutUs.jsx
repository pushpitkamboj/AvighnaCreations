import React from 'react';
import Logo from './assets/Logo.png'

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center mb-8 w-full md:w-1/2 lg:w-full 
    // bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg p-6 
    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-black-900 sm:text-4xl">
              About Avighna Creations
            </h2>
            <p className="mt-4 text-lg text-black-500">
            With years of expertise in event management, Avighna Creations is your go-to
destination for crafting unforgettable beginnings. From dreamy weddings to lively parties
and corporate events to destination celebrations, we're here to make your vision a
reality!
At Avighna Creations, we're all about those special touches that make your event truly
unique. From mouthwatering catering to stunning photography and videography,
flawless makeup and hair, groovy choreography, and fabulous costumes, we've covered
everything to ensure your event stands out
            </p>
            <div className="mt-8">
              {/* <button className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Sign Up for Free
              </button> */}
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-auto"
              src={Logo}
              alt="Vidyard Hero Section"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg text-black-500">
        Our tagline, "crafting unforgettable beginnings," speaks to our commitment to creating
magical moments you'll treasure forever. Sit back, relax, and let us handle the details
while you soak up every minute of your special day with loved ones.
        </p>
      </div>
              <br></br>
              <br></br>
    <div className="bg-green-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">70+</h2>
            <p className="mt-2 text-lg text-gray-300">Successful events</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">2023</h2>
            <p className="mt-2 text-lg text-gray-300">Wheels Up!</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">Dwarka East</h2>
            <p className="mt-2 text-lg text-gray-300">Built in Delhi</p>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">In the News</h3>
            <p className="mt-2 text-gray-300">What the media is saying</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">Better Care</h3>
            <p className="mt-2 text-gray-300">A word from our CEO</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">Values</h3>
            <p className="mt-2 text-gray-300">Our DNA</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;