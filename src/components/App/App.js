import styles from './App.module.css';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import CartPage from '../CartPage/CartPage';
import TermsConditions from '../TermsConditions/TermsConditions';

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <TermsConditions />
      <Switch>
      <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/mycart'>
          <CartPage />
        </Route>
        <Route path='*'>
          <h1 className={styles.notFound}>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}