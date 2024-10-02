import { NavLink } from 'react-router-dom';
import styles from './header.module.css'
import { useCart } from '../../context/cartContext';

const Header = () => {

  // ! данные из контекста доступны из любого компонента
  const {cart} = useCart()

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total +item.price * item.quantity, 0)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'/'}>Lessons</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'fetch-dog'}>Dog API</NavLink>
        {/* <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'counter'}>Counter</NavLink> */}
        {/* <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'feedback'}>Feedback</NavLink> */}
        {/* <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'my-form'}>MyForm</NavLink> */}
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'force-users'}>Force users</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'gender-form'}>Gender form</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'shop'}>Shop</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'cart'}>Cart</NavLink>
      </nav>
      {/* отображаем данные из корзины в header */}
        <span>Cart:  €{calculateTotalPrice().toFixed(2)}</span>
      </header>
  );
};

export default Header;
