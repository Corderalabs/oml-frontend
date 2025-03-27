// components/CourseCard.tsx
import React from "react";
import Image from "next/image";

interface CourseCardProps {
  title: string;
  description: string;
  icon: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className='flex flex-col bg-[#F0F0F066] p-5 rounded-lg shadow-sm border border-gray-200'>
      <div className='mb-3 relative'>
        <Image
          src={icon}
          alt={`${title} icon`}
          width={20}
          height={20}
          className='object-cover'
          quality={100}
        />
      </div>
      <h3 className='text-base font-semibold text-gray-900 h-[25%] mb-4 items-center flex '>
        {title}
      </h3>
      <p className='text-sm text-gray-600'>{description}</p>
    </div>
  );
};

export default CourseCard;
