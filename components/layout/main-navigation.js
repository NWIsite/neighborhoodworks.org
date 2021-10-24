import Link from 'next/link';

import Logo from './logo';
import classes from './main-navigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>About Us</Link>
          </li>
          <li>
            <Link href="https://gagives.org/organization/Neighborhood-Works">Donate</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
