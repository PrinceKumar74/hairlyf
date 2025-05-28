// src/components/Wishlist.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../../store/slice/wishlistSlice'; // Adjust path as needed
import { addToCart } from '../../../store/slice/cartSlice'; // Adjust path as needed
import { useNavigate } from 'react-router-dom';

import EmptyWishlistImg from '/womanWithCart/emptyCart.png'; // Adjust path as needed

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMoveToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(removeFromWishlist(item.id));
  };

  const calculateDiscount = (price, originalPrice) => {
    // Ensure prices are numbers
    const currentPrice = Number(price);
    const mrp = Number(originalPrice);

    if (!mrp || isNaN(mrp) || !currentPrice || isNaN(currentPrice) || mrp <= currentPrice) {
      return 0; // No valid discount scenario
    }
    return Math.round(((mrp - currentPrice) / mrp) * 100);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-semibold mb-6">
        My Wishlist <span className="text-gray-500">({wishlistItems.length} items)</span>
      </h1>

      {wishlistItems.length === 0 ? (
        // Empty Wishlist View - Styles adjusted previously
        <div className="text-center py-10">
          <img
            src={EmptyWishlistImg}
            alt="Empty wishlist"
            className="mx-auto mb-8 w-48 h-auto sm:w-64 object-contain"
            onError={(e) => e.target.src = 'https://placehold.co/256x256/f0f0f0/cccccc?text=Empty+Cart'}
          />
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-700">
            No items yet, your dream closet is empty.
          </h2>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-3 border border-orange-400 text-orange-500 rounded-lg hover:bg-orange-400 hover:text-white transition duration-200 ease-in-out text-base font-medium"
          >
            Explore trending Products &gt;
          </button>
        </div>
      ) : (
        // Wishlist Items Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => {
            // *** Check your data: Ensure item.price and item.originalPrice exist and are numbers ***
             // console.log("Item Data:", item); // Uncomment to debug item data
            const discountPercent = calculateDiscount(item.price, item.originalPrice);
             // console.log("Discount %:", discountPercent); // Uncomment to debug discount calculation

            return (
              // Individual Wishlist Item Card
              <div
                key={item.id}
                // Reduced padding slightly
                className="border border-gray-200 rounded-lg p-3 flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Product Image Container */}
                {/* Increased height, removed gray background */}
                <div className="relative w-full h-64 mb-3 rounded-md flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image || 'https://placehold.co/300x400/f0f0f0/cccccc?text=No+Image'} // Adjusted placeholder size
                    alt={item.name || 'Product Image'}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => e.target.src = 'https://placehold.co/300x400/f0f0f0/cccccc?text=Image+Error'} // Adjusted placeholder size
                  />
                  {/* Remove Button: Smaller icon/padding, adjusted position */}
                  <button
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                    // Adjusted padding and position
                    className="absolute top-2 right-2 p-1 bg-white rounded-full text-gray-400 hover:text-red-500 hover:bg-gray-100 transition duration-150 shadow"
                    aria-label="Remove from wishlist"
                  >
                    {/* Smaller SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Product Name */}
                <h3 className="text-2xl font-medium text-gray-800 mb-2 truncate" title={item.name}>
                  {item.name || 'Product Title'}
                </h3>

                {/* Price Section - Combined into one line */}
                {/* mt-auto pushes this section and the button towards the bottom */}
                <div className="mt-auto mb-3">
                  {/* Single line for price details */}
                  <div className="text-xl text-gray-800"> {/* Base size for the line */}
                     <span className="font-semibold text-xl mr-3"> {/* Current price slightly larger/bold */}
                        Rs.{item.price ? Number(item.price).toFixed(0) : 'N/A'}
                     </span>
                    {/* Original price: check if it exists and is greater */}
                    {item.originalPrice && Number(item.originalPrice) > Number(item.price) && (
                       <span className="text-gray-500 line-through mr-4">
                         Rs.{Number(item.originalPrice).toFixed(0)}
                       </span>
                     )}
                     {/* Discount percentage: check if calculated > 0 */}
                     {discountPercent > 0 && (
                        // Gray color for discount %
                       <span className="font-semibold text-[#9A614D]">
                          ({discountPercent}% OFF)
                       </span>
                     )}
                   </div>
                </div>

                {/* Move to Cart Button */}
                <button
                  onClick={() => handleMoveToCart(item)}
                  // Light gray outline style to match image
                  className="w-full px-4 py-2 border border-gray-300  text-[#D0764F] rounded-md hover:bg-gray-100 transition duration-200 ease-in-out text-2xl font-semibold"
                >
                  Move to Cart
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Wishlist;