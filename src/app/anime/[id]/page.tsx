import Container from '@/components/container';
import React from 'react';

type TParams = {
  params: {
    id: string;
  };
};

const DetailAnimePage = async ({ params }: TParams) => {
  const { id } = params;
  return (
    <Container>
      <div className="flex justify-center items-center py-5">
        <h1 className="text-2xl font-semibold text-color-light">
          DEATIL ANIME : {id}
        </h1>
      </div>
    </Container>
  );
};

export default DetailAnimePage;
