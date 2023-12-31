import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const Navbar = () => {
  return (
    <header className="flex flex-wrap justify-between items-center gap-2 p-5 bg-sky-500">
      <Link href="/" className="font-bold text-white text-2xl">
        CUY ANIME LIST
      </Link>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Search</Button>
      </div>
    </header>
  );
};

export default Navbar;
