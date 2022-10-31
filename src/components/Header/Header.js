import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useSelector, } from 'react-redux';

export default function Header() {
  const cart = useSelector(state => state.productList.cart);

  function toggleLinkMenu(event) {
    const element = event.currentTarget;
    const className = styles.userLinksActive;

    if (element.className.includes(className)) {
      element.classList.remove(className);
    }

    else {
      element.classList.add(className);
    }
  }

  return (
    <div className={styles.header}>
      <Link className={styles.logo} to='/'>Logo</Link>
      <div className={styles.headerLinks}>
        <Link className={styles.cartLink} to={{pathname: '/mycart'}}>
          <svg viewBox='0 0 576 512' fill='currentColor'>
            <path d='M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z'/>
          </svg>
          <div className={styles.cartTotalItems}>
            {cart.filter(product => product.quantity > 0).length}
          </div>
        </Link>
        <div className={styles.userLinks} onClick={toggleLinkMenu}>
          <span className={styles.userProfile}>
            <svg viewBox='0 0 448 512' fill='currentColor'>
              <path d='M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z' />
            </svg>
          </span>
          <ul className={styles.userLinksList}>
            <li className={styles.userLink}>Logout</li>
            <li className={styles.userLink}>Profile</li>
          </ul>
        </div>
      </div>
    </div>
  );
}