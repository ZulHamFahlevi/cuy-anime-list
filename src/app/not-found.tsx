import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PageNotFound = () => {
  return (
    <div className="text-color-light flex flex-col justify-center items-center gap-5 w-full min-h-[80vh]">
      <Image
        src="/404.svg"
        alt="404 page"
        width={350}
        height={350}
        className="hover:normal-case"
      />
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
};

export default PageNotFound;
