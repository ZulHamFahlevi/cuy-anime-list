import { authUserSession } from '@/lib/authLibs';
import Image from 'next/image';
import React from 'react';

const DashboardUserPage = async () => {
  const user = await authUserSession();

  return (
    <div className="text-color-light">
      <h1>DASHBOARD</h1>
      <p>Welcome {user?.name}</p>
      <Image
        src={user?.image || 'image'}
        alt={user?.name || 'image name'}
        width={100}
        height={100}
      />
    </div>
  );
};

export default DashboardUserPage;
