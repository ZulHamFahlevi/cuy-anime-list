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
          className="object-cover"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
    // <Link href={`/${id}`} className="cursor-pointer">
    //   <h3 className="font-bold text-md md:text-xl p-4">{title}</h3>
    // </Link>
  );
};

export default AnimListModule;
