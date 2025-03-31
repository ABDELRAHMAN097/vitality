import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      id="Hero"
      className="flex flex-col items-center justify-center relative w-full"
      style={{ minHeight: `calc(100vh - 72px)` }}
    >
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200 opacity-50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 opacity-50 rounded-full blur-3xl"></div>
      <div className="flex flex-col md:flex-row items-center justify-center px-4 w-full relative z-30">
        <div className="w-full flex flex-col gap-5 md:gap-10 py-10 md:py-2">
          <div className="p-2 bg-[#D0DAF5] max-w-[310px] mx-auto md:mx-0 rounded-2xl">
            <p className="text-[#360099] text-xl text-center font-medium">
              Through Expert Online Training
            </p>
          </div>
          <h1 className="text-[#190C71] font-semibold text-center md:text-start text-xl md:text-5xl">
            Comprehensive learning solutions designed to enhance
            patient-centered care.
          </h1>
          <p className="text-center md:text-start text-slate-500 text-xl md:text-2xl">
            Empowering healthcare professionals with advanced education and a
            hybird care platform, enabling them to serve more patients and
            maximize their expertise.
          </p>

          <div className="flex items-center md:items-start justify-center md:justify-start gap-6">
            <button
              className="hidden md:flex items-center justify-center bg-[#360099] text-white text-lg px-5 py-2.5 rounded-xl 
             transition-all duration-300 ease-in-out 
             hover:bg-[#9785f2] hover:shadow-lg 
             focus:outline-none focus:ring-2 focus:ring-[#9785f2] focus:ring-offset-2 
             active:scale-95"
            >
              Get Started
            </button>

            <button
              className="flex items-center justify-center gap-2 bg-white text-[#190C71] border px-5 py-2.5 rounded-xl 
             transition-colors duration-300 ease-in-out hover:bg-[#9785f2] hover:text-white focus:outline-none 
             focus:ring-2 focus:ring-[#9785f2] focus:ring-offset-2 text-lg"
            >
              Join for free
            </button>
          </div>
        </div>

        <div className="w-full flex items-center justify-center gap-2 overflow-hidden">
          <Image
            src="/assets/img/Right Photo.png"
            alt="Online Training Illustration"
            width={800}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
