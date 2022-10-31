import styles from './CartPage.module.css';
import { useSelector } from 'react-redux';
import ProductList from '../ProductList/ProductList';

export default function CartPage() {
  const cart = useSelector(state => state.productList.cart);

  return (
    <div className={styles.cartPage}>
      <h1>My Cart</h1>
      {cart.length > 0 ? (
        <>
          <ProductList products={cart.map(v => v.product)}/>
          <button className={styles.checkoutButton}>Checkout</button>
        </>
      ) : (
        <p className={styles.emptyCartMessage}>Your cart is empty.</p>
      )}
    </div>
  );
}