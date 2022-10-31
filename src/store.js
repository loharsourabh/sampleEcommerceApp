import { configureStore } from "@reduxjs/toolkit";
import productListReducer from './components/ProductList/productListSlice';

export default configureStore({
  reducer: {
    productList: productListReducer,
  }
});