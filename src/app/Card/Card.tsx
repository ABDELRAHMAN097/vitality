// components/Card/Card.tsx
import React from "react";
import Image from "next/image";

// تعريف نوع البروبس
interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  imageWidth?: number;
  imageHeight?: number;
}

const Card: React.FC<CardProps> = ({ 
  imageUrl, 
  title, 
  description, 
  imageWidth = 100, 
  imageHeight = 100 
}) => {
  return (
    <div className="w-full max-w-[380px] h-[350px] flex flex-col justify-center items-center mx-auto bg-white rounded-xl py-5 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative w-full h-[150px]">
        <Image
          src={imageUrl}
          alt={title}
          className="object-cover mx-auto"
          width={imageWidth}
          height={imageHeight}
        />
      </div>

      <div className="p-6 h-[200px] flex flex-col items-center justify-start">
        <h3 className="text-2xl md:text-[18px] lg:text-2xl font-semibold text-[#190C71] mb-3 text-center">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;