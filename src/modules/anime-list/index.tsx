import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const AnimListModule = ({ title, images, id }: any) => {
  return (
    <Card>
      <CardHeader className="overflow-hidden p-0 rounded-t-md">
        <Image
          src={images}
          alt="gambar"
          width={350}
          height={350}
          className="object-cover w-full max-h-64"
        />
      </CardHeader>
      <CardContent className="pt-4 pl-2">
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
      </CardContent>
    </Card>
  );
};

export default AnimListModule;
