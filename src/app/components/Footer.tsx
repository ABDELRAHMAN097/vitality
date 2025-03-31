import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full text-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pions & Pricing</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  News & Blogs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Empty for spacing */}
          <div>
            <h3 className="text-xl font-bold mb-4 invisible">Placeholder</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Papers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">
                  Press Conferences
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Empty for spacing */}
          <div className="hidden md:block"></div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 invisible">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <span>Email: support@vitalitylab.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <span>Phone: +123-456-7880</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>
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
              © {new Date().getFullYear()} Vitality All Rights Reserved. |
              Developed by{" "}
              <a
                href="https://wa.me/201023671214"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#360099] font-semibold hover:underline"
              >
                Abdelrahman Magdy
              </a>
            </div>

            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-600">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-blue-600">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-blue-600">
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
