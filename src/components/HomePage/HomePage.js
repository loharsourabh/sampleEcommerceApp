import styles from './HomePage.module.css';
import ProductList from '../ProductList/ProductList';
import { useFetch } from '../../hooks/useFetch';
import { getProducts } from '../../endpoints';

export default function HomePage() {
  const [products, isFetched] = useFetch(getProducts());

  return (
    <div className={styles.homePage}>
      <h1 className={styles.heading}>Products</h1>
      {isFetched && <ProductList products={products} />}
    </div>
  );
}