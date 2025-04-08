import Image from "next/image";
import Link from "next/link";
import React from "react";

export const About = () => {
  return (
    <div
      id="About"
      className="flex flex-col items-center justify-center relative w-full min-h-screen my-10 md:my-2"
    >
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200 opacity-50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 opacity-50 rounded-full blur-3xl"></div>
      <div className="flex flex-col md:flex-row items-center justify-center px-4 w-full relative z-50">
        <div className="w-full flex items-center justify-center gap-2 overflow-hidden p-1">
          <Image
            src="/assets/img/p.png"
            alt="Online Training Illustration"
            width={560}
            height={560}
            className="h-auto"
          />
        </div>

        <div className="w-full flex flex-col gap-5 md:gap-10 ">
          <h2 className="text-[#190C71] text-center md:text-start font-semibold text-xl md:text-5xl">
            The foundation of modern digital healthcare.
          </h2>
          <p className="text-center md:text-start text-slate-500 text-xl md:text-2xl">
            Hundreds of thousands of healthcare professionals. Millions of
            digital courses and programs. one goal:Equipping providers to
            enhance patient care.
          </p>

          <div className="flex items-center md:items-start justify-center md:justify-start gap-6">
            <Link
              href="https://vitalitylab.thinkific.com/users/sign_up"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="hidden md:flex items-center justify-center bg-[#360099] text-white text-lg px-5 py-2.5 rounded-xl 
                         transition-all duration-300 ease-in-out 
                         hover:bg-[#9785f2] hover:shadow-lg 
                         focus:outline-none focus:ring-2 focus:ring-[#9785f2] focus:ring-offset-2 
                         active:scale-95"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
