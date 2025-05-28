import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity
} from '../../../store/slice/cartSlice';

import EmptyCartImg from '/womanWithCart/emptyCart.png';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalMRP = cartItems.reduce(
    (acc, item) => acc + (item.originalPrice || item.price || 0) * (item.quantity || 1),
    0
  );
  const currentTotal = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );
  const totalDiscount = totalMRP - currentTotal;
  const gstTax = currentTotal * 0.18;
  const shippingFee = currentTotal > 0 ? 20.00 : 0;
  const totalAmount = currentTotal + gstTax + shippingFee;

  const calculateDiscountPercent = (price, originalPrice) => {
    const currentPrice = Number(price) || 0;
    const mrp = Number(originalPrice) || 0;
    if (!mrp || mrp <= currentPrice) {
      return 0;
    }
    return Math.round(((mrp - currentPrice) / mrp) * 100);
  };

  return (
    <div className="container mx-auto py-6 sm:py-8 px-4">
      <div className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
        <Link to="/" className="hover:text-orange-500">Home</Link> &gt; Cart
      </div>

      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Your cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <img
            src={EmptyCartImg}
            alt="Empty cart"
            className="mx-auto mb-8 w-48 h-auto sm:w-64 object-contain"
            onError={(e) => e.target.src = 'https://placehold.co/256x256/f0f0f0/cccccc?text=Empty+Cart'}
          />
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-700">
            Your cart is empty.
          </h2>
          <button
            onClick={() => navigate('/products')}
            className="w-full sm:w-auto px-6 py-3 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 transition duration-200 ease-in-out text-sm font-medium"
          >
            Continue Shopping &gt;
          </button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex-grow lg:w-2/3">
            {cartItems.map(item => {
              const discountPercent = calculateDiscountPercent(item.price, item.originalPrice);
              const itemId = item.id || `item-${Math.random().toString(36).substr(2, 9)}`;
              const showStockMessage = item.stock && item.stock < 10;

              return (
                <div key={itemId} className="mb-4 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="flex flex-row items-start gap-3 p-3 sm:hidden">
                    <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden flex items-center justify-center border border-gray-100">
                       <img
                          src={item.image || 'https://placehold.co/80x80/f0f0f0/cccccc?text=No+Img'}
                          alt={item.name || 'Product Image'}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => e.target.src = 'https://placehold.co/80x80/f0f0f0/cccccc?text=Error'}
                       />
                    </div>
                    <div className="flex-grow flex flex-col relative min-w-0">
                        <button
                           onClick={() => dispatch(removeFromCart(itemId))}
                           className="absolute top-0 right-0 p-1 text-gray-400 hover:text-red-600 z-10"
                           aria-label="Remove item"
                        >
                           <FaTrash size={16} />
                        </button>

                        <h3 className="text-sm font-semibold text-gray-800 mb-0.5 line-clamp-1 mr-6">
                            {item.name || 'Product Title'}
                        </h3>

                        {item.size && <p className="text-xs text-gray-600">Size: {item.size}</p>}
                        {item.color && <p className="text-xs text-gray-600 mb-1">Color: {item.color}</p>}

                        <div className="flex items-baseline gap-2 flex-wrap my-1">
                           <p className="text-base font-bold text-black">
                              ₹{item.price ? Number(item.price).toFixed(0) : 'N/A'}
                           </p>
                           {item.originalPrice && Number(item.originalPrice) > Number(item.price) && (
                              <p className="text-xs text-gray-500 line-through">
                                 ₹{Number(item.originalPrice).toFixed(0)}
                              </p>
                           )}
                           {discountPercent > 0 && (
                              <p className="text-xs font-semibold text-red-500">
                                 ({discountPercent}% OFF)
                              </p>
                           )}
                        </div>

                        <div className="ml-auto mt-1">
                           <div className="flex items-center border border-gray-300 rounded h-7">
                              <button
                                 onClick={() => dispatch(decrementQuantity(itemId))}
                                 className="px-2 py-0.5 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-l"
                                 disabled={!item.quantity || item.quantity <= 1}
                              > - </button>
                              <span className="px-2.5 text-sm font-medium border-l border-r border-gray-300">
                                 {item.quantity || 1}
                              </span>
                              <button
                                 onClick={() => dispatch(incrementQuantity(itemId))}
                                 className="px-2 py-0.5 text-gray-600 hover:bg-gray-100 rounded-r"
                              > + </button>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="hidden sm:flex flex-row items-start gap-4 p-4">
                     <div className="w-28 h-28 sm:w-36 sm:h-36 flex-shrink-0 rounded overflow-hidden flex items-center justify-center self-center sm:self-start border border-gray-100">
                        <img
                           src={item.image || 'https://placehold.co/144x144/f0f0f0/cccccc?text=No+Image'}
                           alt={item.name || 'Product Image'}
                           className="max-w-full max-h-full object-contain"
                           onError={(e) => e.target.src = 'https://placehold.co/144x144/f0f0f0/cccccc?text=Error'}
                        />
                     </div>

                     <div className="flex flex-grow min-w-0 justify-between gap-4">
                        <div className="flex-grow flex flex-col">
                           <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                              {item.name || 'Product Title'}
                           </h3>
                           {item.size && <p className="text-sm text-gray-600 mt-1">Size: {item.size}</p>}
                           {item.color && <p className="text-sm text-gray-600">Color: {item.color}</p>}
                           <div className="flex items-baseline gap-2 mt-3">
                              <p className="text-xl font-bold text-black">
                                 ₹{item.price ? Number(item.price).toFixed(0) : 'N/A'}
                              </p>
                              {item.originalPrice && Number(item.originalPrice) > Number(item.price) && (
                                 <p className="text-sm text-gray-500 line-through">
                                    ₹{Number(item.originalPrice).toFixed(0)}
                                 </p>
                              )}
                              {discountPercent > 0 && (
                                 <p className="text-sm font-semibold text-red-500">
                                    ({discountPercent}% OFF)
                                 </p>
                              )}
                           </div>
                        </div>

                        <div className="flex flex-col items-end justify-start flex-shrink-0 ml-4 min-h-[100px]">
                           <div className="flex items-center mb-2">
                              <div className="flex items-center border border-gray-300 rounded h-8">
                                 <button
                                    onClick={() => dispatch(decrementQuantity(itemId))}
                                    className="px-2 py-1 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-l"
                                    disabled={!item.quantity || item.quantity <= 1}
                                 > - </button>
                                 <span className="px-3 text-sm font-medium border-l border-r border-gray-300">
                                    {item.quantity || 1}
                                 </span>
                                 <button
                                    onClick={() => dispatch(incrementQuantity(itemId))}
                                    className="px-2 py-1 text-gray-700 hover:bg-gray-100 rounded-r"
                                 > + </button>
                              </div>
                              {showStockMessage && (
                                 <p className="text-xs text-orange-600 border border-orange-300 px-2 py-1 rounded ml-2 whitespace-nowrap">
                                    limited to available stock
                                 </p>
                              )}
                           </div>
                           <button
                              onClick={() => dispatch(removeFromCart(itemId))}
                              className="text-gray-500 hover:text-red-600 p-1 mt-auto"
                              aria-label="Remove item"
                           >
                              <FaTrash size={18} />
                           </button>
                        </div>
                     </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:w-1/3">
            <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm mt-6 lg:mt-0 sm:sticky sm:top-20">
              <h2 className="text-lg font-semibold mb-4 border-b border-gray-200 pb-3 text-gray-800">
                PRICE DETAILS ({cartItems.length} Item{cartItems.length !== 1 ? 's' : ''})
              </h2>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <div className="flex justify-between">
                  <span>Total MRP</span>
                  <span>₹{totalMRP.toFixed(0)}</span>
                </div>
                {totalDiscount > 0 && (
                  <div className="flex justify-between">
                    <span>Discount on MRP</span>
                    <span className="text-red-500">- ₹{totalDiscount.toFixed(0)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>GST/Tax</span>
                  <span>₹{gstTax.toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Fee</span>
                  <span>{shippingFee === 0 ? <span className="text-green-600">FREE</span> : `₹${shippingFee.toFixed(0)}`}</span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-lg font-bold text-black mb-4">
                  <span>Total Amount</span>
                  <span>₹{totalAmount.toFixed(0)}</span>
                </div>
                <Link
                  to= '/checkout'
                  className="block w-full text-center bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition duration-200 ease-in-out font-semibold text-base mb-3"
                >
                  PLACE ORDER
                </Link>
                <button
                  onClick={() => navigate('/products')}
                  className="w-full px-6 py-3 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 transition duration-200 ease-in-out text-sm font-medium"
                >
                  Continue Shopping &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;