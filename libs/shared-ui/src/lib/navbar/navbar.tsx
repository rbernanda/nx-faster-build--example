import { Link } from 'react-router-dom'

import styles from './navbar.module.scss';
import { Button } from '@nx-faster-build--example/components';

/* eslint-disable-next-line */
export interface NavbarProps { }

export const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <div className={styles['container']}>
      <div>
        <Link to='/'>NX APP</Link>
      </div>
      <ul className={styles['navbar']}>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
          <Button><Link to='/auth'>Login</Link></Button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
