// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: JSON.parse(localStorage.getItem('cart')) || [],
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          return state.filter((i) => i.id !== action.payload);
        }
        item.quantity -= 1;
      }
    },
  },
});

// Selector to calculate the total number of items in the cart
export const selectTotalItems = (state) => {
  return state.cart.reduce((total, item) => total + item.quantity, 0);
};

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
/*
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state now managed by server-side data
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

// Async thunk to fetch cart items for a user
export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/shop/cart/get/${userId}`);
      // Assumes the response structure is { data: { data: [...] } }
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Error fetching cart items');
    }
  }
);

// Async thunk to add an item to the cart
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, productId, quantity = 1 }, thunkAPI) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/shop/cart/add`, {
        userId,
        productId,
        quantity,
      });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Error adding item to cart');
    }
  }
);

// Async thunk to remove an item from the cart
export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async ({ userId, productId }, thunkAPI) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/shop/cart/${userId}/${productId}`);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Error removing item from cart');
    }
  }
);

// Async thunk to update the quantity of an item in the cart
export const updateCartQuantity = createAsyncThunk(
  'cart/updateCartQuantity',
  async ({ userId, productId, quantity }, thunkAPI) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/shop/cart/update-cart`, {
        userId,
        productId,
        quantity,
      });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Error updating quantity');
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // If you need synchronous actions, they can remain here.
  },
  extraReducers: (builder) => {
    builder
      // Fetch Cart Items
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Add to Cart
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Remove from Cart
      .addCase(removeFromCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Update Cart Quantity
      .addCase(updateCartQuantity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer; */