import Link from 'next/link';
import SearchBar from '../search-bar';

const Navbar = () => {
  return (
    <header className="bg-color-primary">
      <div className="flex flex-wrap justify-between items-center gap-2 p-5 max-w-[1440px] mx-auto">
        <Link href="/" className="font-bold text-color-light text-2xl">
          CUY ANIME LIST
        </Link>
        <SearchBar />
      </div>
    </header>
  );
};

export default Navbar;
