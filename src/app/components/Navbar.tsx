"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { useAuth } from "../context/AuthProvider "; // تأكد من المسار الصحيح

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading, logout } = useAuth();

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  if (loading) return null; // أو عرض شاحن مؤقت إذا أردت

  return (
    <nav className="flex justify-between items-center p-4 shadow-md w-full bg-white relative z-50">
      {/* Logo */}
      <div className="z-50">
        <Image
          src="/assets/img/logo.png"
          alt="logo"
          height={200}
          width={200}
          priority
        />
      </div>

      {/* Menu Button */}
      <button
        className="md:hidden text-2xl z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <RiCloseLargeFill /> : <HiMiniBars3CenterLeft />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`md:flex justify-center items-center gap-6 absolute md:static left-0 top-full w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 transition-all duration-300 z-40 shadow-lg md:shadow-none ${
          isOpen ? "block" : "hidden"
        }`}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(10px)",
        }}
      >
        <li>
          <a
            href="#Hero"
            className="hover:text-[#6f55f2] font-semibold py-2 md:py-0 block md:inline"
            onClick={handleNavLinkClick}
          >
            Home
          </a>
        </li>

        <Link
          href="https://vitalitylab.thinkific.com/collections"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="hover:text-[#6f55f2] font-semibold py-2 md:py-0 block md:inline">
            Courses
          </li>
        </Link>

        <li>
          <a
            href="#Services"
            className="hover:text-[#6f55f2] font-semibold py-2 md:py-0 block md:inline"
            onClick={handleNavLinkClick}
          >
            States Approved
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            className="hover:text-[#6f55f2] font-semibold py-2 md:py-0 block md:inline"
            onClick={handleNavLinkClick}
          >
            Support
          </a>
        </li>

        {/* <li>
        <a 
          href="../Dashboard" 
          className="hover:text-[#6f55f2] font-semibold py-2 md:py-0 block md:inline" 
          onClick={handleNavLinkClick}
        >
          Dashboard
        </a>
      </li> */}

        <li className="mt-2 md:mt-0 md:ml-4">
          {user ? (
            <button
              onClick={logout}
              className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-md inline-flex items-center justify-center"
            >
              Logout <FaSignOutAlt className="ml-2" />
            </button>
          ) : (
            <Link
              href="https://vitalitylab.thinkific.com/users/sign_up"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#6f55f2] hover:bg-[#9785f2] text-white px-4 py-2 rounded-md inline-flex items-center justify-center">
                Join for free <FaUserPlus className="ml-2" />
              </button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
