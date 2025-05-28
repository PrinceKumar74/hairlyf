import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heart, ShoppingCart, Star, Check } from "lucide-react";
import { addToCart } from '../../../store/slice/cartSlice';
import { addToWishlist } from '../../../store/slice/wishlistSlice';

const WomenProducts = () => {
  const [products, setProducts] = useState();
  const [womenProducts, setWomenProducts] = useState([]);
  const [addedToCart, setAddedToCart] = useState(new Set());
  
  // Redux setup
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist?.items || []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedData = await fetch("https://hairlyf-backend-api.onrender.com/api/products");
        const data = await fetchedData.json();
        setProducts(data);
        const allItem = data.products;
        const women = allItem.filter((product) => product.category === "women");
        const womenWithUrls = women.map((item) => ({
          ...item,
          imageUrls: item.images.map((imageObj) => {
            const urlCharacters = Object.values(imageObj).slice(0, -1);
            return urlCharacters.join("");
          }),
        }));

        setWomenProducts(womenWithUrls);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  // Redux-based add to cart function with feedback
  const handleAddToCart = (product) => {
    const newItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      length: product.variants?.[0]?.size || 'Standard',
      color: 'Black', // Default color
      quantity: 1,
      image: product.imageUrls?.[0],
      stock: product.stock || 10,
      originalPrice: Math.round(product.price * 1.2),
      size: product.variants?.[0]?.size || 'Standard'
    };

    dispatch(addToCart(newItem));
    console.log('Adding to cart:', newItem);
    
    // Add visual feedback
    setAddedToCart(prev => new Set([...prev, product._id]));
    
    // Remove the feedback after 2 seconds
    setTimeout(() => {
      setAddedToCart(prev => {
        const newSet = new Set(prev);
        newSet.delete(product._id);
        return newSet;
      });
    }, 2000);
  };

  // Redux-based add to wishlist function
  const handleAddToWishlist = (product) => {
    const newItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      length: product.variants?.[0]?.size || 'Standard',
      color: 'Black', // Default color
      quantity: 1,
      image: product.imageUrls?.[0],
      stock: product.stock || 10,
      originalPrice: Math.round(product.price * 1.2),
      size: product.variants?.[0]?.size || 'Standard'
    };

    dispatch(addToWishlist(newItem));
    console.log('Adding to wishlist:', newItem);
  };

  // Check if item is in wishlist using Redux state
  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  // Check if item was recently added to cart
  const isAddedToCart = (productId) => {
    return addedToCart.has(productId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b-4 border-orange-400">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-orange-600 mb-2">Women's Collection</h1>
            <p className="text-gray-600 text-lg">Discover premium beauty products crafted for women</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {womenProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading amazing products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {womenProducts.map((item) => (
              <div key={item._id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Product Image */}
                <div className="relative">
                  <div 
                    onClick={() => window.open(`/product/${item._id}`, '_blank')}
                    className="cursor-pointer bg-gradient-to-br from-orange-100 to-orange-200 p-6 aspect-square flex items-center justify-center"
                  >
                    <img 
                      src={item.imageUrls?.[0]} 
                      alt={item.name || "Women's Product"} 
                      className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Wishlist Button with persistent color change */}
                  <button
                    onClick={() => handleAddToWishlist(item)}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 ${
                      isInWishlist(item._id)
                        ? 'bg-red-500 text-white shadow-lg scale-110'
                        : 'bg-white text-gray-400 hover:text-red-500 hover:bg-red-50 shadow-md'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isInWishlist(item._id) ? 'fill-current' : ''}`} />
                  </button>

                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    New
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {item.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">(4.8)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-orange-600">₹{item.price}</span>
                      <span className="text-gray-400 line-through text-sm">₹{Math.round(item.price * 1.2)}</span>
                    </div>
                    <div className="text-green-600 text-sm font-semibold bg-green-50 px-2 py-1 rounded">
                      Save 20%
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className={`flex-1 font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 ${
                        isAddedToCart(item._id)
                          ? 'bg-green-500 text-white'
                          : 'bg-orange-500 hover:bg-orange-600 text-white'
                      }`}
                    >
                      {isAddedToCart(item._id) ? (
                        <>
                          <Check className="w-4 h-4" />
                          Product Added
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default WomenProducts;