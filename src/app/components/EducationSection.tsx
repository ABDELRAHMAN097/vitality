import React from "react";
import { FaCheck } from "react-icons/fa";

const EducationSection = () => {
  return (
    <div className="w-full flex items-center justify-start gap-6 mx-auto my-10 md:my-2">
      {/*   */}
      <ul className="">
        <li className="flex items-center">
          <span className="flex items-center justify-center w-6 h-6 bg-[#360099] rounded-full mr-1 md:mr-3 ">
            <FaCheck className="text-white" />
          </span>
          <span className="text-[14px] md:text-lg text-gray-700">Clinical Procedures</span>
        </li>

        <li className="flex items-center">
          <span className="flex items-center justify-center w-6 h-6 bg-[#360099] rounded-full mr-1 md:mr-3">
            <FaCheck className="text-white" />
          </span>
          <span className="text-[14px] md:text-lg text-gray-700">Competency Management</span>
        </li>
      </ul>
      <ul className="">
        <li className="flex items-center">
          <span className="flex items-center justify-center w-6 h-6 bg-[#360099] rounded-full mr-1 md:mr-3">
            <FaCheck className="text-white" />
          </span>
          <span className="text-[14px] md:text-lg text-gray-700">Compliance Training</span>
        </li>

        <li className="flex items-center">
          <span className="flex items-center justify-center w-6 h-6 bg-[#360099] rounded-full mr-1 md:mr-3">
            <FaCheck className="text-white" />
          </span>
          <span className="text-[14px] md:text-lg text-gray-700">Compliance Training</span>
        </li>
      </ul>
    </div>
  );
};
export default EducationSection;
