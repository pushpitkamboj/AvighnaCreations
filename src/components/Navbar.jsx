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
          {/* <a className="text-white hover:text-gray-200" href="#">
            Home
          </a> */}
        {/* <NavLink
  to="/Home"
  className={(isActive) =>
    `block py-2 pr-4 pl-3 duration-200 ${
      isActive ? "text-white" : "text-black"
    } border-b border-gray-100 hover:bg-white-500 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
  }
>
   Home
</NavLink> */}

<NavLink
      to="/Home"
      className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300"
      activeClassName="bg-green-700"
    >
      Home
    </NavLink>

        </li>
        <li>
          {/* <a className="text-white hover:text-gray-200" href="#">
            About us
          </a> */}
        {/* <NavLink
  to="/AboutUs"
  className={(isActive) =>
    `block py-2 pr-4 pl-3 duration-200 ${
      isActive ? "text-white" : "text-white"
    } border-b border-gray-100 hover:bg-white-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
  }
>
  About us
</NavLink> */}

<NavLink
      to="/AboutUs"
      className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300"
      activeClassName="bg-green-700"
    >
      About us
    </NavLink>

        </li>
        <li>
          {/* <a className="text-white hover:text-gray-200" href="#">
            Our services
          </a> */} 
        {/* <NavLink
  to="/OurServices"
  className={(isActive) =>
    `block py-2 pr-4 pl-3 duration-200 ${
      isActive ? "text-white" : "text-white"
    } border-b border-gray-100 hover:bg-white-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
  }
>
Our services</NavLink> */}

<NavLink
      to= "/OurServices"
      className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300"
      activeClassName="bg-green-700"
    >
      Our services 
    </NavLink>
        </li>
        <li>
          {/* <a className="text-white hover:text-gray-200" href="#">
            Gallery
          </a> */}
          {/* <NavLink
  to="/Gallery"
  className={(isActive) =>
    `block py-2 pr-4 pl-3 duration-200 ${
      isActive ? "text-white" : "text-white"
    } border-b border-gray-100 hover:bg-white-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
  }
>
Gallery</NavLink> */}

<NavLink
      to ="/Gallery"
      className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300"
      activeClassName="bg-green-700"
    >
      Gallery 
    </NavLink>
        </li>
        <li>
          {/* <a className="text-white hover:text-gray-200" href="#">
            Blog
          </a> */}
          {/* <NavLink
  to="/Blog"
  className={(isActive) =>
    `block py-2 pr-4 pl-3 duration-200 ${
      isActive ? "text-white" : "text-white"
    } border-b border-gray-100 hover:bg-white-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
  }
>
Blog 
</NavLink> */}
<NavLink
      to="/Blog"
      className="px-4 py-2 rounded-md bg-green-500 text-white hover:text-black transition-colors duration-300"
      activeClassName="bg-green-700"
    >
      Blog 
    </NavLink>


        </li>
        <li>
          {/* <a className="text-white hover:text-gray-200" href="#">
            Contact Us
          </a> */}
         {/* <NavLink
  to="/ContactUs"
  className={(isActive) =>
    `block py-2 pr-4 pl-3 duration-200 ${
      isActive ? "text-white" : "text-white"
    } border-b border-gray-100 hover:bg-white-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
  }
>
Contact us</NavLink> */}

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