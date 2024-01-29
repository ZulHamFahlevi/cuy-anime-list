import { authUserSession } from '@/lib/authLibs';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const UserActionButton = async () => {
  const user = await authUserSession();

  return (
    <div className="w-full lg:w-auto flex justify-between items-center gap-4">
      {user ? (
        <Button
          asChild
          className="bg-color-light hover:bg-color-light/80 text-black"
        >
          <Link href="/user">Dashboard</Link>
        </Button>
      ) : null}
      <Button
        asChild
        className="bg-color-light hover:bg-color-light/80 text-red-500"
      >
        <Link href={user ? '/api/auth/signout' : '/api/auth/signin'}>
          {user ? 'Sign Out' : 'Sign In'}
        </Link>
      </Button>
    </div>
  );
};

export default UserActionButton;
