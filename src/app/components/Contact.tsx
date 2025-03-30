import React from "react";
import EducationSection from "./EducationSection";

export const Contact = () => {
  const statsData = [
    {
      value: "35+",
      title: "Elevate your business",
      subtitle: "our courses",
    },
    {
      value: "987+",
      title: "Elevate your business",
      subtitle: "our courses",
    },
    {
      value: "890+",
      title: "Elevate your business",
      subtitle: "our courses",
    },
    {
      value: "77+",
      title: "Elevate your business",
      subtitle: "our courses",
    },
    {
      value: "89+",
      title: "Elevate your business",
      subtitle: "our courses",
    },
    {
      value: "245+",
      title: "Elevate your business",
      subtitle: "our courses",
    },
  ];

  return (
    <div
      id="Contact"
      className="flex flex-col items-center justify-center relative w-full min-h-screen"
    >
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200 opacity-50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 opacity-50 rounded-full blur-3xl"></div>
      <div className="flex flex-col md:flex-row items-center justify-center px-4 w-full relative z-30">
        <div className="w-full flex items-center justify-start my-10 md:my-2">
          <div className="grid grid-cols-2 gap-6">
            {statsData.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow-md rounded-xl text-center"
              >
                <h2 className="text-2xl font-bold text-[#360099]">
                  {item.value}
                </h2>
                <p className="text-lg font-semibold text-gray-700">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 md:gap-10 ">
          <div className="p-2 bg-[#D0DAF5] max-w-[280px] mx-auto md:mx-0 rounded-2xl">
            <p className="text-[#360099] text-center font-medium">
              Through Expert Online Training
            </p>
          </div>
          <h3 className="text-[#190C71] font-semibold text-center md:text-start text-xl md:text-5xl">
            Flexible Online Courses for Busy Professionals
          </h3>
          <p className="text-center md:text-start text-slate-500 text-2x">
            Balancing work life and education has never been easier with our
            flexible online courses designed for busy professionals. Access
            high-quality content and interactive lessons from any device anytime
            and anywhere. Our courses are tailored.
          </p>

          <div className="flex items-center md:items-start justify-center md:justify-start gap-6">
            <button className="md:block bg-[#360099] hover:bg-[#9785f2] text-white px-4 py-2 rounded-xl">
              Get Started
            </button>
          </div>

          <EducationSection />
        </div>
      </div>
    </div>
  );
};
