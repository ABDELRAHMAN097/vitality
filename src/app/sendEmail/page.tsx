"use client";
import React from "react";
import Navbar from "../components/Navbar";

const sendEmail = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      <Navbar />
      <div 
        className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full"
      >
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Send us a message
          </h2>

          <p className="text-gray-600 mb-6 md:mb-8">
            If you have any work from me or any types of queries related to my
            tutorial, you can send me message from here its my pleasure to help
            you.
          </p>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Contact Info */}
            <div className="lg:w-1/2 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Phone
                </h3>
                <p className="text-gray-600">+1068-8883 8547</p>
                <p className="text-gray-600">+1068-8883 8578</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Email
                </h3>
                <p className="text-gray-600">info@vitalityptclinic.com</p>
              </div>
             
            </div>

            {/* Vertical Divider - Hidden on mobile */}
            <div className="hidden lg:block border-l border-gray-200 mx-4"></div>

            {/* Right Side - Form */}
            <div className="lg:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1 text-sm font-medium">
                    Enter your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1 text-sm font-medium">
                    Enter your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1 text-sm font-medium">
                    Enter your message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Send Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sendEmail;