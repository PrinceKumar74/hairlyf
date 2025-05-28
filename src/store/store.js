// store.js
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slice/cartSlice'
import authReducer from './slice/authSlice'
import wishlistReducer from './slice/wishlistSlice'    // ← import your slice!

// Middleware to persist cart state to localStorage
const persistCartMiddleware = store => next => action => {
  const result = next(action)

  if (
    action.type.endsWith('/addToCart') ||
    action.type.endsWith('/removeFromCart') ||
    action.type.endsWith('/incrementQuantity') ||
    action.type.endsWith('/decrementQuantity')
  ) {
    const cartState = store.getState().cart
    localStorage.setItem('cart', JSON.stringify(cartState))
  }

  return result
}

// Middleware to persist wishlist state to localStorage
const persistWishlistMiddleware = store => next => action => {
  const result = next(action)

  if (
    action.type.endsWith('/addToWishlist') ||
    action.type.endsWith('/removeFromWishlist') ||
    action.type.endsWith('/clearWishlist')
  ) {
    const wishlistState = store.getState().wishlist
    localStorage.setItem('wishlist', JSON.stringify(wishlistState))
  }

  return result
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    wishlist: wishlistReducer,    // ← add it here!
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(persistCartMiddleware, persistWishlistMiddleware),
})
