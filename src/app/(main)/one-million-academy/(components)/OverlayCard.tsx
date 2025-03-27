// components/OverlayCard.tsx
import Image from "next/image";
import React from "react";

interface OverlayCardProps {
  title: string;
  value: string;
  className?: string; // Optional: position or additional styles
  icon: string;
  sub: string;
}

const OverlayCard: React.FC<OverlayCardProps> = ({
  title,
  value,
  className,
  icon,
  sub
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-2 border border-gray-100`}>
      <div className='flex items-center gap-3'>
        <div className='flex flex-col'>
          <h4 className={`font-semibold text-xs text-gray-500 ${className} w-40`}>{title}</h4>
          <p className='text-sm font-semibold text-gray-800'>{value}</p>
          <p className='text-[10px] font-semibold text-gray-800'>{sub}</p>
        </div>

        <div className={`${className} h-10`}>
          <Image
            className={`w-full h-full object-cover ${className}`}
            src={icon}
            alt=''
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default OverlayCard;
