"use client";
import React from "react";
import Navbar from "../components/Navbar";

const sendEmail = () => {

  return (
    <div className="flex flex-col items-center justify-center gap-2 min-h-screen w-full">
      <Navbar />
      <div 
      className="max-w-6xl mx-auto px-3 py-1 bg-white border border-gray-200 rounded-lg shadow-md"
      style={{ minHeight: `calc(100vh - 72px)` }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Send us a message
        </h2>

        <p className="text-gray-600 mb-2">
          If you have any work from me or any types of queries related to my
          tutorial, you can send me message from here its my pleasure to help
          you.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Contact Info */}
          <div className="lg:w-1/2 space-y-6">
           

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Phone
              </h3>
              <p className="text-gray-600">+1068-8883 8547</p>
              <p className="text-gray-600">+1068-8883 8578</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Email
              </h3>
              <p className="text-gray-600">info@vitalityptclinic.com</p>
            </div>
          </div>

          {/* Vertical Divider - Hidden on mobile */}
          <div className="hidden lg:block border-l border-gray-300"></div>

          {/* Right Side - Form */}
          <div className="lg:w-1/2">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Enter your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Enter your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Enter your message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sendEmail;
