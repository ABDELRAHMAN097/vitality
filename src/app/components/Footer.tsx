import React from "react";
import Link from "next/link";
import { SlEnvolope } from "react-icons/sl";
import { HiOutlinePhone } from "react-icons/hi2";
import { ImLocation2 } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full text-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 items-start">
          {/* Column 1 */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link href="https://vitalitylab.thinkific.com/users/sign_up" className="hover:text-[#6f55f2] font-semibold py-2 md:py-0 block md:inline">
                  Sign up
                </Link>
              </li>
              <li>
                <Link href="https://vitalitylab.thinkific.com/pages/instructors" className="hover:text-[#6f55f2] font-semibold py-2 md:py-0 block md:inline">
                  Instructors
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#6f55f2] font-semibold py-2 md:py-0 block md:inline">
                  Latest Researches
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#6f55f2] font-semibold py-2 md:py-0 block md:inline">
                  Upcoming Researches
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#6f55f2] font-semibold py-2 md:py-0 block md:inline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#6f55f2] font-semibold py-2 md:py-0 block md:inline">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#6f55f2] font-semibold py-2 md:py-0 block md:inline">
                  Papers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#6f55f2] font-semibold py-2 md:py-0 block md:inline">
                  Press Conferences
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Empty for spacing */}
          <div className="hidden md:block"></div>

          {/* Column 4 - Contact Info */}
          <div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 mt-1"><SlEnvolope className="text-[#6f55f2] font-bold text-xl"/></span>
                <span className="font-semibold">Email: info@vitalityptclinic.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1"><HiOutlinePhone className="text-[#6f55f2] font-bold text-xl"/></span>
                <span className="font-semibold">Phone: +1 708-789-7774</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1"><ImLocation2 className="text-[#6f55f2] font-bold text-xl"/></span>
                <span className="font-semibold">
                  Address: 123 Learning Street, Knowledge City, EduCountry
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center">
              © {new Date().getFullYear()} Vitality All Rights Reserved.
            </div>

            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#6f55f2] font-semibold py-2 md:py-0 block md:inline">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-[#6f55f2] font-semibold py-2 md:py-0 block md:inline">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#6f55f2] font-semibold py-2 md:py-0 block md:inline">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;