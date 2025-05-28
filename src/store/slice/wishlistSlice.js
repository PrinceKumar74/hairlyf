import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: JSON.parse(localStorage.getItem('wishlist')) || [],
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.find(item => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },      removeFromWishlist: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    clearWishlist: () => {
      return [];
    },
    toggleWishlistItem: (state, action) => {
      const exists = state.find(item => item.id === action.payload.id);
      if (exists) {
        return state.filter(item => item.id !== action.payload.id);
      } else {
        state.push(action.payload); 
      }
    }
  },
});

// Selectors
export const selectWishlistItems = (state) => state.wishlist;
export const selectWishlistCount = (state) => state.wishlist.length;
export const isInWishlist = (state, id) => 
  Boolean(state.wishlist.find(item => item.id === id));

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
  toggleWishlistItem
} = wishlistSlice.actions;

export default wishlistSlice.reducer;

