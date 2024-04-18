import React from 'react';
import logo from "./assets/Logo.png"
import {Link, NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 flex justify-between items-center h-16 px-4">

<img
        className="h-16 w-auto ml-4 rounded-xl"
        // className='class="h-6 w-auto'
        src= {logo}
        alt="company Logo"
      />

      <h4 className="text-3xl font-bold text-green">
         Avighna Creations 
     </h4>
      
      
      <ul className="flex space-x-4">
        <li>


<NavLink
      to="/Home"
      className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300"
      activeClassName="bg-green-700"
    >
      Home
    </NavLink>

        </li>
        <li>


<NavLink
      to="/AboutUs"
      className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300"
      activeClassName="bg-green-700"
    >
      About us
    </NavLink>

        </li>
        <li>
      

<NavLink
      to= "/OurServices"
      className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300"
      activeClassName="bg-green-700"
    >
      Our services 
    </NavLink>
        </li>
        <li>


<NavLink
      to ="/Gallery"
      className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300"
      activeClassName="bg-green-700"
    >
      Gallery 
    </NavLink>
        </li>
        <li>

<NavLink
      to="/Blog"
      className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300"
      activeClassName="bg-green-700"
    >
      Blog 
    </NavLink>


        </li>
        <li>


<NavLink
      to= "/ContactUs"
      className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300"
      activeClassName="bg-green-700"
    >
      Contact us
    </NavLink>
        </li>
      </ul>
    </nav>
  );
}
