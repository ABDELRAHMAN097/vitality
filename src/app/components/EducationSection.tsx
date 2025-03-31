import React from "react";
import { FaCheck } from "react-icons/fa";

const EducationSection = () => {
  return (
    <div className="w-full flex items-center justify-start gap-1 md:gap-14 mx-auto my-10 md:my-2">
      {/*   */}
      <ul className="flex flex-col items-center justify-center gap-3">
        <li className="flex items-center w-full">
          <span className="flex items-center justify-center w-6 h-6 bg-[#360099] rounded-full mr-1 md:mr-5 ">
            <FaCheck className="text-white" />
          </span>
          <span className="text-[14px] md:text-xl text-gray-700 font-semibold">Continuing Education</span>
        </li>

        <li className="flex items-center w-full">
          <span className="flex items-center justify-center w-6 h-6 bg-[#360099] rounded-full mr-1 md:mr-5">
            <FaCheck className="text-white" />
          </span>
          <span className="text-[14px] md:text-xl text-gray-700 font-semibold">Competency Management</span>
        </li>
      </ul>
      <ul className="flex flex-col items-center justify-center gap-3">
        <li className="flex items-center w-full">
          <span className="flex items-center justify-center w-6 h-6 bg-[#360099] rounded-full mr-1 md:mr-5">
            <FaCheck className="text-white" />
          </span>
          <span className="text-[14px] md:text-xl text-gray-700 font-semibold">Clinical Procedures</span>
        </li>

        <li className="flex items-center w-full">
          <span className="flex items-center justify-center w-6 h-6 bg-[#360099] rounded-full mr-1 md:mr-5">
            <FaCheck className="text-white" />
          </span>
          <span className="text-[14px] md:text-xl text-gray-700 font-semibold">Compliance Training</span>
        </li>
      </ul>
    </div>
  );
};
export default EducationSection;
