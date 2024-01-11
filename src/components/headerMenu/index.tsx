import React from 'react';

const HeaderMenu = ({ title }: { title: string }) => {
  return (
    <div className="mb-5 flex justify-center items-center">
      <h1 className="text-2xl text-color-light font-semibold">{title}</h1>
    </div>
  );
};

export default HeaderMenu;
