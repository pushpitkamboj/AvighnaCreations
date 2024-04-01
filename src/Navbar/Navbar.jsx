import React from 'react';
import {Link, NavLink} from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="bg-red-600 flex justify-between items-center h-16 px-4">
      <a className="text-xl font-bold text-white" href="#">
         Avighna Creations 
     </a>
      
      <img
        className="h-8 w-auto mr-4"
        src="./vite.svg"
        alt="company Logo"
      />
      <ul className="flex space-x-4">
        <li>
          {/* <a className="text-white hover:text-gray-200" href="#">
            Home
          </a> */}
        {/* <NavLink
  to="ContactUs"
  className={(isActive) =>
    `block py-2 pr-4 pl-3 duration-200 ${
      isActive ? "text-white" : "text-white"
    } border-b border-gray-100 hover:bg-white-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
  }
>
    Home
</NavLink> */}
<NavLink
                            to="/Aboutus"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Home
                        </NavLink>
        </li>
        <li>
          {/* <a className="text-white hover:text-gray-200" href="#">
            About us
          </a> */}
        <NavLink
  to="ContactUs"
  className={(isActive) =>
    `block py-2 pr-4 pl-3 duration-200 ${
      isActive ? "text-white" : "text-white"
    } border-b border-gray-100 hover:bg-white-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
  }
>
  About us
</NavLink>
        </li>
        <li>
          {/* <a className="text-white hover:text-gray-200" href="#">
            Our services
          </a> */} 
        <NavLink
  to="OurServices"
  className={(isActive) =>
    `block py-2 pr-4 pl-3 duration-200 ${
      isActive ? "text-white" : "text-white"
    } border-b border-gray-100 hover:bg-white-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
  }
>
Our services</NavLink>
        </li>
        <li>
          {/* <a className="text-white hover:text-gray-200" href="#">
            Gallery
          </a> */}
          <NavLink
  to="ContactUs"
  className={(isActive) =>
    `block py-2 pr-4 pl-3 duration-200 ${
      isActive ? "text-white" : "text-white"
    } border-b border-gray-100 hover:bg-white-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
  }
>
Gallery</NavLink>
        </li>
        <li>
          {/* <a className="text-white hover:text-gray-200" href="#">
            Blog
          </a> */}
          <NavLink
  to="ContactUs"
  className={(isActive) =>
    `block py-2 pr-4 pl-3 duration-200 ${
      isActive ? "text-white" : "text-white"
    } border-b border-gray-100 hover:bg-white-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
  }
>
Blog 
</NavLink>
        </li>
        <li>
          {/* <a className="text-white hover:text-gray-200" href="#">
            Contact Us
          </a> */}
         <NavLink
  to="ContactUs"
  className={(isActive) =>
    `block py-2 pr-4 pl-3 duration-200 ${
      isActive ? "text-white" : "text-white"
    } border-b border-gray-100 hover:bg-white-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
  }
>
Contact us</NavLink>
        </li>
      </ul>
    </nav>
  );
}