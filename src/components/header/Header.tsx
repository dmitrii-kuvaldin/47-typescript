import { NavLink } from 'react-router-dom';
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'/'}>Lessons</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'fetch-dog'}>Dog API</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'counter'}>Counter</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'feedback'}>Feedback</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'my-form'}>MyForm</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'force-users'}>Force users</NavLink>
      </header>
  );
};

export default Header;
