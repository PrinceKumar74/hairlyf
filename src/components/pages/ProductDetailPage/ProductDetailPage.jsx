// src/components/ProductDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/slice/cartSlice';
import { addToWishlist } from '../../../store/slice/wishlistSlice';
import { Images } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';


const ProductDetailPage = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMainImage, setSelectedMainImage] = useState('');
  const [selectedLength, setSelectedLength] = useState('');
  const [selectedColor, setSelectedColor] = useState({});
  const [productImages, setProductImages] = useState([]);
  const dispatch = useDispatch();

  // Default placeholder images
  const placeholderImages = [
    '/tempProductimg/pic1.png',
    '/tempProductimg/pic2.png',
    '/tempProductimg/pic3.png',
    '/tempProductimg/pic4.png',
  ];

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://hairlyf-backend-api.onrender.com/api/products");
        const data = await response.json();
        const item = data.products.find((item) => item._id === id);

        if (item) {
          // Transform image data to include URLs only
          const itemWithUrls = { 
            ...item, 
            imageUrls: item.images?.map((imageobj) =>{ 
            const Url=Object.values(imageobj).slice(0,-1).join("");
            return Url
            }).filter(Boolean) || [] ,
            
          };
          console.log("itemWithUrls: ", itemWithUrls);
          setProductDetail(itemWithUrls);
          
          // Use actual images if available, otherwise use placeholders
          const images = itemWithUrls.imageUrls?.length > 0 
            ? itemWithUrls.imageUrls 
            : placeholderImages;
            
          
          setProductImages(images);
          
          // Set the first image as the main image
          if (images.length > 0) {
            setSelectedMainImage(images[0]);
          }
          
          // Initialize other selections based on product data
          if (itemWithUrls.variants?.length > 0) {
            setSelectedLength(itemWithUrls.variants[0].size);
          }
          
          // Set default color (placeholder as it seems color data isn't in the API)
          const placeholderColors = [
            { name: 'Black', hex: '#000000', stock: 5 },
            { name: 'Brown', hex: '#ab8e5b', stock: 5 },
          ];
          setSelectedColor(placeholderColors[0]);
        } else {
          setProductDetail(null);
          // Use placeholder images if product not found
          setProductImages(placeholderImages);
          if (placeholderImages.length > 0) {
            setSelectedMainImage(placeholderImages[0]);
          }
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProductDetail(null);
        // Use placeholder images on error
        setProductImages(placeholderImages);
        if (placeholderImages.length > 0) {
          setSelectedMainImage(placeholderImages[0]);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Handle loading and error states
  if (isLoading) {
    return <div className="max-w-7xl mx-auto p-4 md:p-8 text-center">Loading product details...</div>;
  }

  if (productDetail === null) {
    return <div className="max-w-7xl mx-auto p-4 md:p-8 text-center">Error loading product details or product not found.</div>;
  }

  // Prepare display data
  const tempPrice = productDetail.price || 0;
  const tempOriginalPrice = tempPrice ? tempPrice * (1 + Math.random() * 0.5 + 0.1) : 0;
  const discount = tempOriginalPrice > tempPrice ? Math.round((tempOriginalPrice - tempPrice) / tempOriginalPrice * 100) : 0;

  const product = {
    category: productDetail.category || 'N/A',
    name: productDetail.name || 'Product Not Found',
    description: productDetail.description || 'Description not available.',
    price: tempPrice || '...',
    originalPrice: tempOriginalPrice > tempPrice ? tempOriginalPrice.toFixed(2) : '...',
    discount: discount,
    lengths: productDetail.variants?.map(item => item.size) || [],
    colors: [
      { name: 'Black', hex: '#000000', stock: 5 },
      { name: 'Brown', hex: '#ab8e5b', stock: 5 },
    ],
    images: productImages,
    mainImage: selectedMainImage,
    stock: productDetail.stock || 0,

    
  };

  const handleAddToCart = () => {
    // Implement add to cart functionality
    const newItem = {
     id: id,
      name: product.name,
      price: product.price,
      length: selectedLength,
      color: selectedColor.name,
      quantity: 1,
      image: selectedMainImage,
      stock: product.stock,
      originalPrice:product.originalPrice,
      size: selectedLength
    };
    dispatch(addToCart(newItem));
    console.log('Adding to cart:', newItem);
   
  };

  const handleAddToWishlist = () => {
    // Implement add to wishlist functionality
    const newItem = {
     id: id,
      name: product.name,
      price: product.price,
      length: selectedLength,
      color: selectedColor.name,
      quantity: 1,
      image: selectedMainImage,
      stock: product.stock,
      originalPrice:product.originalPrice,
      size: selectedLength
    };
    dispatch(addToWishlist(newItem));
    console.log('Adding to wishlist:', newItem);
    // You could add notification here
  };

  // Image with fallback
  const ImageWithFallback = ({ src, alt, className, fallbackSrc = '/tempProductimg/pic1.png' }) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);
    
    const handleError = () => {
      if (!hasError) {
        setImgSrc(fallbackSrc);
        setHasError(true);
      }
    };
    
    return (
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        onError={handleError}
      />
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <ol className="list-none p-0 inline-flex space-x-2">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li><span>&gt;</span></li>
          <li>
            <Link to="/shop" className="hover:underline">Shop</Link>
          </li>
          <li><span>&gt;</span></li>
          <li>
            <Link to={`/shop?category=${product.category}`} className="hover:underline">
              {product.category}
            </Link>
          </li>
          <li><span>&gt;</span></li>
          <li className="text-gray-700" aria-current="page">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          {product.images.length > 0 && (
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
              {product.images.map((thumb, index) => (
                <button
                  key={`thumb-${index}`}
                  className={`flex-shrink-0 w-16 h-16 border rounded overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    selectedMainImage === thumb ? 'border-gray-900' : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedMainImage(thumb)}
                >
                  <ImageWithFallback
                    src={thumb}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover bg-gray-200"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Main Image */}
          <div className="flex-1 relative aspect-square rounded overflow-hidden">
            <>
            <button
        aria-label="Add to wishlist"
        onClick={handleAddToWishlist}
        className="md:hidden absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
      >
        <HeartIcon className="w-5 h-5 text-red-500" />
        </button>
            {selectedMainImage ? (
              <ImageWithFallback
                src={selectedMainImage}
                alt={product.name}
                className="w-full h-full object-contain object-center"
              />
            ) : (
              <div className="flex items-center justify-center h-full w-full bg-gray-100">
                <svg className="w-12 h-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}</>
          </div>
        </div>

        {/* Product Information */}
        <div className="flex flex-col gap-4">
          {/* Category Tag */}
          <div>
            <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded border border-gray-300">
              {product.category}
            </span>
          </div>

          {/* Product Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h1>

          {/* Product Description */}
          <p className="text-gray-600">{product.description}</p>

          {/* Pricing (Main Block) */}
          <div className="flex items-baseline gap-2">
            {product.price !== '...' && <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>}
            {product.originalPrice !== '...' && parseFloat(product.originalPrice) > parseFloat(product.price) && (
              <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
            )}
            {product.discount > 0 && (
              <span className="text-lg font-semibold text-red-600">({product.discount}% OFF)</span>
            )}
          </div>

          {/* Length Selection */}
          {product.lengths.length > 0 && (
            <div className="mt-2">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Select Length</h3>
              <div className="flex flex-wrap gap-2">
                {product.lengths.map((length, index) => (
                  <button
                    key={`length-${index}`}
                    onClick={() => setSelectedLength(length)}
                    className={`px-4 py-2 border rounded text-sm font-medium focus:outline-none ${
                      selectedLength === length
                        ? 'border-gray-900 bg-gray-100 text-gray-900'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {length}"
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {product.colors.length > 0 && (
            <div className="mt-2">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Select Color</h3>
              <div className="flex items-center gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    title={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border border-gray-300 focus:outline-none ${
                      selectedColor.name === color.name ? 'ring-2 ring-offset-2 ring-black' : ''
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    <span className="sr-only">{color.name}</span>
                  </button>
                ))}
                {/* Stock Info */}
                {selectedColor.stock !== undefined && (
                  <span className="text-sm text-gray-500">{selectedColor.stock} in stock</span>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons (Web View) - Hidden on Mobile */}
          <div className="mt-6 hidden md:flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Add to Cart
            </button>
            <button
              type="button"
              onClick={handleAddToWishlist}
              className="flex-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 font-bold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Mobile only fixed bottom Price and Add to Cart - Styled to match the image */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-sm text-gray-600">Price</span>
          <span className="text-xl font-bold text-gray-900">₹{product.price !== '...' ? product.price : ''}</span>
        </div>
        <button
          type="button"
          onClick={handleAddToCart}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Add to Cart
        </button>
      </div>
      
      {/* Add padding at the bottom to prevent content from being hidden behind the fixed mobile cart bar */}
      <div className="h-20 md:h-0 mt-6"></div>
    </div>
  );
};

export default ProductDetailPage;