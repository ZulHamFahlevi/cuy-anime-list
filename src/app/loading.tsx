import React from 'react';

const Loading = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div
        className={`text-white inline-block h-[40px] w-[40px] animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        role="status"
      ></div>
    </div>
  );
};

export default Loading;
