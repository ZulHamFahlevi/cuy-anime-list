import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import SearchBar from '../search-bar';

const Navbar = () => {
  return (
    <header className="flex flex-wrap justify-between items-center gap-2 p-5 bg-sky-500">
      <Link href="/" className="font-bold text-white text-2xl">
        CUY ANIME LIST
      </Link>
      <SearchBar />
    </header>
  );
};

export default Navbar;
