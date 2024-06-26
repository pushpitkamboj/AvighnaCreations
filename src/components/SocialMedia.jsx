// import {Link} from 'react-router-dom'
// export default function SocialMedia() {
//     return (
//       <footer className="fixed inset-x-0 bottom-0 flex flex-col h-12 p-4 items-center justify-center gap-2 bg-white-950/90 backdrop-blur-md dark:bg-gray-50/90 dark:backdrop-blur-md/90">
//         <div className="flex items-center justify-center gap-4">
//           <a
//             className="rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center dark:bg-gray-800"
//             href="#"
//           >
//             <FacebookIcon className="h-4 w-4 fill-[#1877f2]" />
//             <span className="sr-only">Facebook</span>
//           </a>
//           <Link
//             className="rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center dark:bg-gray-800"
//             // href="#"
//             to = "https://www.instagram.com/the_avighna_creations?igsh=MWIxdng1ZHgyMnV5MQ=="
//           >
//             <TwitterIcon className="h-4 w-4 fill-[#1da1f2]" />
//             <span className="sr-only">Twitter</span>
//           </Link> 
//           <Link 
//             className="rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center dark:bg-gray-800"
//             to = "https://www.instagram.com/the_avighna_creations?igsh=MWIxdng1ZHgyMnV5MQ=="
//           >
//             <InstagramIcon className="h-4 w-4 fill-[#c13584]" />
//             <span className="sr-only">Instagram</span>
//           </Link>
//           <a
//             className="rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center dark:bg-gray-800"
//             href="https://www.instagram.com/the_avighna_creations?igsh=MWIxdng1ZHgyMnV5MQ=="
//           >
//             <LinkedinIcon className="h-4 w-4 fill-[#0077b5]" />
//             <span className="sr-only">LinkedIn</span>
//           </a>
//           <div className="flex justify-center">
//   <p className="text-white">923423423</p>
//           </div>
//           </div>
//       </footer>
//     );
//   }
  
//   function FacebookIcon(props) {
//     return (
//       <svg
//         {...props}
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//       </svg>
//     );
//   }
  
//   function InstagramIcon(props) {
//     return (
//       <svg
//         {...props}
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//         <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//       </svg>
//     );
//   }
  
//   function LinkedinIcon(props) {
//     return (
//       <svg
//         {...props}
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//         <rect width="4" height="12" x="2" y="9" />
//         <circle cx="4" cy="4" r="2" />
//       </svg>
//     );
//   }
  
//   function TwitterIcon(props) {
//     return (
//       <svg
//         {...props}
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//       </svg>
//     );
//   }


import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const SocialBar = () => {
  return (
    <div className="flex justify-center space-x-4 bg-blue-600">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center dark:bg-gray-800 text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300"
      >
        <FaFacebook className="h-4 w-4" />
        <span className="sr-only">Facebook</span>
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center dark:bg-gray-800 text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300"
      >
        <FaLinkedin className="h-4 w-4" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a
        href="https://www.instagram.com/the_avighna_creations?igsh=MWIxdng1ZHgyMnV5MQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center dark:bg-gray-800 text-red-600 hover:text-red-800 dark:hover:text-blue-400 transition-colors duration-300"
      >
        <FaInstagram className="h-4 w-4" />
        <span className="sr-only">Instagram</span>
      </a>
      <a
        href="https://www.youtube.com/results?search_query=avighna+creations"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center dark:bg-gray-800 text-red-600 hover:text-red-800 dark:hover:text-red-400 transition-colors duration-300"
      >
        <FaYoutube className="h-4 w-4" />
        <span className="sr-only">YouTube</span>
      </a>
      <a
        href="mailto:avighnacreations23@gmail.com"
        className="rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center dark:bg-gray-800 text-green-600 hover:text-green-800 dark:hover:text-green-400 transition-colors duration-300"
      >
        <MdEmail className="h-4 w-4" />
        <span className="sr-only">Email</span>
      </a>
    </div>
  );
};

export default SocialBar;