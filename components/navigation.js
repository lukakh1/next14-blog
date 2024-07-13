import Link from 'next/link';
import styles from './navigation.module.css';

export default function Navigation(params) {
  return (
    <nav className='font-mono'>
      <ul className='flex md:space-x-4 flex-col md:flex-row'>
        <li>
          <Link className={`${styles.link} inline md:hidden`} href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} href='/about'>
            about
          </Link>
        </li>
        <li>
          <Link className={styles.link} href='/about/projects'>
            projects
          </Link>
        </li>
        <li>
          <Link className={styles.link} href='/photos'>
            photos
          </Link>
        </li>
        <li>
          <Link className={styles.link} href='/blog'>
            blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
