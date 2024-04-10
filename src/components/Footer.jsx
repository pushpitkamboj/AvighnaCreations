import React from 'react';
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Avighna Creations</h2>
            <p className="text-gray-300">Event Management: Catering, photography, decor & event planning.</p>
            <p className="text-gray-300">Unforgettable occasions made easy.</p>
          </div>
          <div className="flex items-center mt-4 md:mt-0 md:ml-4">
            <a href="#" className="text-white hover:text-gray-300 mr-4">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:ml-4">
          <div className="mr-4 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <ul>
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="mr-4 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Company</h3>
            <ul>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Our Services</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Important Links</h3>
            <ul>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms & Condition</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Cancellation policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
  <a href="https://www.linkedin.com/in/pushpit-kamboj-234aa1227/" className="text-white-600 hover:text-black-800">
    Designed and created by Aspira
  </a>
      </div>
      {/* <br></br> */}
    </footer>
  );
};

export default Footer;