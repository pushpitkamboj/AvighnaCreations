// import React from 'react';
// import logo from "./assets/Logo.png"
// import {Link, NavLink} from 'react-router-dom'

// export default function Navbar() {
//   return (
//     <nav className="bg-blue-600 flex justify-between items-center h-16 px-4">

// <img
//         className="h-16 w-auto ml-4 rounded-xl"
//         // className='class="h-6 w-auto'
//         src= {logo}
//         alt="company Logo"
//       />

//       <h4 className="text-3xl font-bold text-green">
//          Avighna Creations 
//      </h4>
      
      
//       <ul className="flex space-x-4">
//         <li>


// <NavLink
//       to="/Home"
//       className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300"
//       activeClassName="bg-green-700"
//     >
//       Home
//     </NavLink>

//         </li>
//         <li>


// <NavLink
//       to="/AboutUs"
//       className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300"
//       activeClassName="bg-green-700"
//     >
//       About us
//     </NavLink>

//         </li>
//         <li>
      

// <NavLink
//       to= "/OurServices"
//       className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300"
//       activeClassName="bg-green-700"
//     >
//       Our services 
//     </NavLink>
//         </li>
//         <li>


// <NavLink
//       to ="/Gallery"
//       className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300"
//       activeClassName="bg-green-700"
//     >
//       Gallery 
//     </NavLink>
//         </li>
//         <li>

// <NavLink
//       to="/Blog"
//       className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300"
//       activeClassName="bg-green-700"
//     >
//       Blog 
//     </NavLink>


//         </li>
//         <li>


// <NavLink
//       to= "/ContactUs"
//       className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300"
//       activeClassName="bg-green-700"
//     >
//       Contact us
//     </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }


import React, { useState } from 'react';
import logo from "./assets/Logo.png";
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <img
          className="h-12 w-auto mr-4 rounded-xl"
          src={logo}
          alt="company Logo"
        />
        <h4 className="text-2xl font-bold text-green sm:hidden">
          Avighna Creations
        </h4>
      </div>

      <div className="sm:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </div>

      <ul
        className={`sm:flex sm:items-center sm:space-x-4 bg-blue-600 sm:bg-transparent absolute sm:relative w-full sm:w-auto left-0 sm:left-auto top-16 sm:top-0 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <li className="sm:inline-block">
          <NavLink
            to="/Home"
            className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300 block sm:inline-block"
            activeClassName="bg-green-700"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
        </li>
        <li className="sm:inline-block">
          <NavLink
            to="/AboutUs"
            className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300 block sm:inline-block"
            activeClassName="bg-green-700"
            onClick={toggleMenu}
          >
            About us
          </NavLink>
        </li>
        <li className="sm:inline-block">
          <NavLink
            to="/OurServices"
            className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300 block sm:inline-block"
            activeClassName="bg-green-700"
            onClick={toggleMenu}
          >
            Our services
          </NavLink>
        </li>
        <li className="sm:inline-block">
          <NavLink
            to="/Gallery"
            className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300 block sm:inline-block"
            activeClassName="bg-green-700"
            onClick={toggleMenu}
          >
            Gallery
          </NavLink>
        </li>
        <li className="sm:inline-block">
          <NavLink
            to="/Blog"
            className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300 block sm:inline-block"
            activeClassName="bg-green-700"
            onClick={toggleMenu}
          >
            Blog
          </NavLink>
        </li>
        <li className="sm:inline-block">
          <NavLink
            to="/ContactUs"
            className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300 block sm:inline-block"
            activeClassName="bg-green-700"
            onClick={toggleMenu}
          >
            Contact us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}