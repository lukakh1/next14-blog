import useServerDarkMode from '@/hooks/use-server-dark-mode';
import Counter from './Counter';
import DarkMode from './dark-mode';
import Navigation from './navigation';
import Link from 'next/link';
export default function Header() {
  const theme = useServerDarkMode();
  return (
    <header className='flex justify-between md:items-center'>
      <div className='flex items-center md:space-x-12'>
        <div className='hidden md:block'>
          <Link href='/' className='text-xl font-mono'>
            Luka Khimshiashvili
          </Link>
        </div>
        <Navigation />
      </div>
      <DarkMode defaultTheme={theme} />
    </header>
  );
}
