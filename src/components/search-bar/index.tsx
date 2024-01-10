'use client';

import { BsSearch } from 'react-icons/bs';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { FormEvent, KeyboardEvent, useRef } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  console.log(searchRef);

  const handleSearch = (event: FormEvent) => {
    if (searchRef.current?.value) {
      event.preventDefault();
      const keyword = searchRef.current?.value;
      router.push(`/search/${keyword}`);
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  };

  return (
    <div className="flex w-full md:max-w-sm items-center space-x-2 relative">
      <Input
        type="text"
        placeholder="Cari anime..."
        className="w-full"
        ref={searchRef}
        onKeyDown={handleKeyPress}
      />
      <Button
        type="submit"
        className="absolute top-0 end-2 p-0 bg-transparent hover:bg-transparent"
        onClick={handleSearch}
      >
        <BsSearch size={20} className="text-black" />
      </Button>
    </div>
  );
};

export default SearchBar;
