import React, { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <main className="max-w-[1440px] mx-auto">{children}</main>;
};

export default Container;
