import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg p-6 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="bg-yellow-500 max-w-7xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-3xl font-extrabold text-black-900 mb-6">Get in touch with us</h2>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="fullName" className="sr-only">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Full Name"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="contactNumber" className="sr-only">
                Contact Number
              </label>
              <input
                id="contactNumber"
                name="contactNumber"
                type="text"
                placeholder="Contact Number"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Submit
</button>
          </form>
        </div>
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <div className="text-sm font-medium text-gray-700">Contact</div>
          <div className="mt-2 text-gray-500">
            <p>+91-819 100 4846</p>
            <p>+91-735 152 3841</p>
            <p>+91-991 772 4737</p>
            <p>info@Avighna.com</p>
          </div>
          <div className="mt-4 text-gray-500">
            <p>10:00 hrs to 18:00 hrs Monday - Saturday GMT +5:30</p>
            <p>Sunday Closed</p>
          </div>
          <div className="mt-2 text-gray-500">
            <p>+91-945 636 2345</p>
            <p>sales@AvighnaCreations.com</p>
          </div>
          <div className="mt-4 text-gray-500">
            <p>Avighna Creations</p>
            <p>Kaintura Plaza, Badrinath Road</p>
            <p>lal bagh - 249201 New Delhi</p>
            <p>Avighna Creations</p>
            <p>16 D, Cross road, Opposite Doon MRI</p>
            <p>moti nagar-247002</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center space-x-4">
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <span className="sr-only">Facebook</span>
          <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            {/* Facebook icon SVG path */}
          </svg>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <span className="sr-only">Twitter</span>
          <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            {/* Twitter icon SVG path */}
          </svg>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <span className="sr-only">Instagram</span>
          <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            {/* Instagram icon SVG path */}
          </svg>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <span className="sr-only">YouTube</span>
          <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            {/* YouTube icon SVG path */}
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ContactUsPage;