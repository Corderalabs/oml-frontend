// components/CourseBenefitCard.tsx
import React from "react";

interface CourseBenefitCardProps {
  title: string;
  description: string;
  index: number;
}

const CourseBenefitCard: React.FC<CourseBenefitCardProps> = ({
  title,
  description,
  index,
}) => {
  const backgroundColor =
    index === 0
      ? "bg-[#FF8595]"
      : index === 1
      ? "bg-[#40C7CE]"
      : index === 2
      ? "bg-[#DBC710]"
      : "bg-[#B877FE]";
  return (
    <div className='bg-white rounded-md shadow-md p-4 border border-gray-200 flex flex-col'>
      <h3 className='text-lg font-medium text-[#26283A] mb-3 text-center p-2'>
        {title}
      </h3>
      <div className={`w-16 h-1 mx-auto mb-8 ${backgroundColor}`}></div>

      <p className='text-sm text-[#26283ACC]/80 text-center'>{description}</p>
    </div>
  );
};

export default CourseBenefitCard;
