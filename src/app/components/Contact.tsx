"use client"
import React, { useState } from "react";
import EducationSection from "./EducationSection";
import Link from "next/link";

export const Contact = () => {
  // const statsData = [
  //   {
  //     value: "35+",
  //     title: "Elevate your business",
  //     subtitle: "our courses",
  //   },
  //   {
  //     value: "987+",
  //     title: "Elevate your business",
  //     subtitle: "our courses",
  //   },
  //   {
  //     value: "890+",
  //     title: "Elevate your business",
  //     subtitle: "our courses",
  //   },
  //   {
  //     value: "77+",
  //     title: "Elevate your business",
  //     subtitle: "our courses",
  //   },
  //   {
  //     value: "89+",
  //     title: "Elevate your business",
  //     subtitle: "our courses",
  //   },
  //   {
  //     value: "245+",
  //     title: "Elevate your business",
  //     subtitle: "our courses",
  //   },
  // ];

  const [activeTab, setActiveTab] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Can I interact with instructors and other students?",
      answer: ""
    },
    {
      question: "What if I need help during the course?",
      answer: ""
    },
    {
      question: "Are there any prerequisites for enrolling in a course?",
      answer: ""
    },
    {
      question: "Can I get a refund if I'm not satisfied with the course?",
      answer: ""
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer: "Yes, upon successful completion of a course, you will receive a certificate that you can download and share. The certificate verifies"
    }
  ];

  const toggleTab = (index: number) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div
      id="Contact"
      className="flex flex-col items-center justify-center relative w-full min-h-screen"
    >
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200 opacity-50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 opacity-50 rounded-full blur-3xl"></div>
      <div className="flex flex-col md:flex-row items-center justify-center px-10 w-full my-12 relative z-30">
        {/* <div className="w-full flex items-center justify-center my-10 md:my-2">
          <div className="grid grid-cols-2 gap-6">
            {statsData.map((item, index) => (
              <div
                key={index}
                className="p-7 bg-white shadow-md border border-[#360099] rounded-xl text-center"
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
        </div> */}

        <div className="w-full flex flex-col gap-5 md:gap-10 ">
          <div className="p-2 bg-[#D0DAF5] max-w-[280px] mx-auto md:mx-0 rounded-2xl">
            <p className="text-[#360099] text-center font-medium">
              Through Expert Online Training
            </p>
          </div>
          <h3 className="text-[#190C71] font-semibold text-center md:text-start text-xl md:text-5xl">
            Flexible Online Courses for Busy Professionals
          </h3>
          <p className="text-center md:text-start text-slate-500 text-xl md:text-xl">
            Balancing work life and education has never been easier with our
            flexible online courses designed for busy professionals. Access
            high-quality content and interactive lessons from any device anytime
            and anywhere. Our courses are tailored.
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

          <EducationSection />
          
        </div>

      </div>

      {/*  */}


        <div className="w-full flex flex-col items-center justify-center gap-5 py-8 md:py-10 my-5 md:my-10">
            <h3 className="text-[#190C71] font-semibold text-center md:text-start text-xl md:text-5xl">Frequently Asked Questions</h3>
            <p className="text-center text-slate-500 text-2x mx-1 md:mx-5">Pursue your problems with our diverse range of courses focused on lifestyle and holidays. From existing and gardening to photograph travel, our courses provide practical tips and inspiration for enjoying life to the future. Whether you re looking to develop a new hobby</p>
        </div>


        {/*  */}


        <div className="w-full mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-[#190C71] mb-8 text-center">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className="border border-[#D0DAF5] rounded-lg overflow-hidden"
          >
            <button
              className={`w-full flex justify-between items-center p-4 text-left ${activeTab === index ? 'bg-[#F5F8FF]' : 'bg-white'}`}
              onClick={() => toggleTab(index)}
            >
              <span className="text-lg font-semibold text-[#360099]">
                {item.question}
              </span>
              <span className="text-[#6f55f2] font-bold">
                {activeTab === index ? '−' : '+'}
              </span>
            </button>
            
            {activeTab === index && (
              <div className="p-4 bg-[#F5F8FF] text-gray-700 border-t border-[#D0DAF5]">
                {item.answer || (
                  <p className="text-gray-500">سيتم إضافة الإجابة قريباً</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
