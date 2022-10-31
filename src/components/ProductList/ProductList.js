import styles from './ProductList.module.css';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartProduct, incrementQuantity, decrementQuantity } from './productListSlice';

export default function Product({ products }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.productList.cart);
  const { pathname } = useLocation();

  return (
    <div className={styles.productGrid}>
      {products.map(product => (
        <div className={styles.product} key={product.id}>
          <img className={styles.productImage} src={product.image} alt={product.title} />
          <div className={styles.productDetails}>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <div className={styles.productPrice}>Rs. {product.price}</div>
            {pathname === '/mycart' ? (
              <div className={styles.quantityButtons}>
                <button
                  className={styles.quantityButton}
                  onClick={() => dispatch(decrementQuantity(product))}
                >
                  -
                </button>
                {cart.find(v => v.product.id === product.id).quantity}
                <button
                  className={styles.quantityButton}
                  onClick={() => dispatch(incrementQuantity(product))}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className={styles.addToCartButton}
                onClick={() => dispatch(toggleCartProduct(product))}
              >
                {cart.findIndex(v => v.product.id === product.id) >= 0
                  ? 'Remove from cart'
                  : 'Add to cart'
                }
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}