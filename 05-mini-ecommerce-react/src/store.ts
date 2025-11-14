import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/redux/CartSlice';
// retrun empty store for now
export default configureStore({
  reducer: {
    cart: cartReducer
  },
})