import React from 'react';
import { NavLink } from 'react-router-dom';
const ContactSection = () => {
 return (
   <div className="flex justify-center space-x-8 bg-gray-100 py-8">
     <div className="flex flex-col items-center">
       <div className="mb-4">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           strokeWidth={1.5}
           stroke="currentColor"
           className="h-8 w-8 text-yellow-500"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
           />
         </svg>
       </div>
       <div className="text-center">
         <h3 className="text-lg font-bold text-gray-800 mb-2">Support</h3>
         <p className="text-gray-600 mb-4">
           For swift assistance, contact our dedicated support team at +91 99124
           13442. We are here to address your queries and ensure a seamless
           experience.
         </p>
         <NavLink to="/ContactUs" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          Contact Us
         </NavLink>
       </div>
     </div>

     <div className="flex flex-col items-center">
       <div className="mb-4">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           strokeWidth={1.5}
           stroke="currentColor"
           className="h-8 w-8 text-pink-500"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
           />
         </svg>
       </div>
       <div className="text-center">
         <h3 className="text-lg font-bold text-gray-800 mb-2">Email Us</h3>
         <p className="text-gray-600 mb-4">
           Reach out to avighnacreations23@gmail.com for prompt and
           comprehensive support on all your event-related inquiries and
           assistance.
         </p>
         <a className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
            href="mailto:avighnacreations23@gmail.com">
           Email Us
         </a>
       </div>
     </div>

     <div className="flex flex-col items-center">
       <div className="mb-4">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           strokeWidth={1.5}
           stroke="currentColor"
           className="h-8 w-8 text-red-500"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
           />
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
           />
         </svg>
       </div>
       <div className="text-center">
         <h3 className="text-lg font-bold text-gray-800 mb-2">Address</h3>
         <p className="text-gray-600 mb-4">
           Navigate success with our support from H.No. 66/632/631, Mallareddy
           Nagar, Gajularamaram, New Delhi - a beacon in QutubNagar,
           delivering excellence at every step.
         </p>
         <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
           Location
         </button>
       </div>
     </div>
   </div>
 );
};

export default ContactSection;