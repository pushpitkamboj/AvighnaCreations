/**
 * v0 by Vercel.
 * @see https://v0.dev/t/c1Wx6JClOkU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import Link from "next/link"
import React from "react"
import Link from "react-router-dom"

function SocialHandles() {
  return (
    <div className="flex h-12 items-center px-4 space-x-2 border-t-2 border-gray-100 dark:border-gray-800">
      <Link
        className="rounded-full flex h-8 w-8 items-center justify-center bg-[#4267B2] text-white transition-colors hover:opacity-90 dark:bg-[#4267B2] dark:hover:opacity-110"
        href="#"
      >
        <span className="sr-only">Facebook</span>
        <FacebookIcon className="h-4 w-4 sh-rotate-15" />
      </Link>
      <Link
        className="rounded-full flex h-8 w-8 items-center justify-center bg-[#0A66C2] text-white transition-colors hover:opacity-90 dark:bg-[#0A66C2] dark:hover:opacity-110"
        href="#"
      >
        <span className="sr-only">LinkedIn</span>
        <LinkedinIcon className="h-4 w-4 sh-pulse-rotate" />
      </Link>
      <Link
        className="rounded-full flex h-8 w-8 items-center justify-center bg-[#E1306C] text-white transition-colors hover:opacity-90 dark:bg-[#E1306C] dark:hover:opacity-110"
        href="#"
      >
        <span className="sr-only">Instagram</span>
        <InstagramIcon className="h-4 w-4 sh-ping" />
      </Link>
      <Link
        className="rounded-full flex h-8 w-8 items-center justify-center bg-[#1DA1F2] text-white transition-colors hover:opacity-90 dark:bg-[#1DA1F2] dark:hover:opacity-110"
        href="#"
      >
        <span className="sr-only">Twitter</span>
        <TwitterIcon className="h-4 w-4 sh-bounce" />
      </Link>
      <Link
        className="rounded-full flex h-8 w-8 items-center justify-center bg-[#25D366] text-white transition-colors hover:opacity-90 dark:bg-[#25D366] dark:hover:opacity-110"
        href="#"
      >
        <span className="sr-only">WhatsApp</span>
        <SmartphoneIcon className="h-4 w-4 sh-spin" />
      </Link>
    </div>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function SmartphoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

export default SocialHandles;