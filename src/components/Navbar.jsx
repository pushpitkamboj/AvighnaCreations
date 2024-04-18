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
import { Link, useNavigate } from 'react-router-dom';
import logo from "./assets/Logo.png";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setShowMenu(false); // Close the menu after clicking a link
  };

  const navLinks = [
    { name: 'Home', path: '/Home' },
    { name: 'About us', path: '/AboutUs' },
    { name: 'Our services', path: '/OurServices' },
    { name: 'Gallery', path: '/Gallery' },
    { name: 'Blog', path: '/Blog' },
    { name: 'Contact us', path: '/ContactUs' },
  ];

  return (
    <nav className="bg-blue-600 px-4 py-2 flex justify-between items-center">
      <div className="flex items-center">
        <img
          className="h-16 w-auto mr-4 rounded-xl"
          src={logo}
          alt="company Logo"
        />
        <h4 className="text-3xl font-bold text-green">Avighna Creations</h4>
      </div>

      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {showMenu && (
        <div className="md:hidden bg-blue-600 w-full absolute left-0 top-16 z-10">
          <ul className="flex flex-col space-y-2 py-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300 block"
                  onClick={() => handleLinkClick(link.path)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <ul className="hidden md:flex space-x-4">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}