import React from 'react';
import { Skeleton } from '../ui/skeleton';

const SkelotonCard = () => {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-5 pb-5">
      {Array.from({ length: 25 }).map((_, index) => (
        <div key={index} className="bg-color-light rounded-md overflow-hidden">
          <Skeleton className="bg-gray-300 h-64 w-full" />
          <div className="py-2 md:py-4 px-2 sm:px-4">
            <Skeleton className="bg-gray-300 h-6 w-full rounded-md" />
          </div>
          <div className="pb-4 px-2 sm:px-4">
            <Skeleton className="bg-gray-300 h-10 w-1/2 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkelotonCard;
