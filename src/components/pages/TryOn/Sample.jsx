import { useState, useEffect } from 'react';
import { Image as ImageIcon, RefreshCw, ChevronLeft } from 'lucide-react'; // Removed unused icons, kept necessary

// Mock product data
const mockWigProducts = [
  {
    id: 1,
    name: 'Curly Wave',
    rating: 4.8,
    reviews: 120, // Just the number
    price: 1280,
    originalPrice: 2290,
    discount: 58,
    imageUrl: 'https://via.placeholder.com/300x350/F0EFEB/333333?text=Curly+Wave+Style', // Aspect ratio closer to visual
  },
  {
    id: 2,
    name: 'Silky Straight',
    rating: 4.7,
    reviews: 95,
    price: 1350,
    originalPrice: 2500,
    discount: 46,
    imageUrl: 'https://via.placeholder.com/300x350/F0EFEB/333333?text=Silky+Straight',
  },
  {
    id: 3,
    name: 'Boho Locs',
    rating: 4.9,
    reviews: 150,
    price: 1420,
    originalPrice: 2800,
    discount: 49,
    imageUrl: 'https://via.placeholder.com/300x350/F0EFEB/333333?text=Boho+Locs+Style',
  },
  {
    id: 4,
    name: 'Chic Bob',
    rating: 4.6,
    reviews: 88,
    price: 1190,
    originalPrice: 2100,
    discount: 43,
    imageUrl: 'https://via.placeholder.com/300x350/F0EFEB/333333?text=Chic+Bob+Style',
  },
];

const WigProductCard = ({ product, onPreview, onBuyNow }) => {
  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col border border-gray-200 overflow-hidden">
      <div className="w-full h-40 sm:h-44 md:h-48 lg:h-56 relative"> {/* Adjusted height for better look */}
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="p-2 md:p-3 flex flex-col flex-grow items-center text-center">
        <div className="text-xs text-gray-500 mt-1">
          {product.rating}★ <span className="ml-0.5">{product.reviews}</span>
        </div>

        <h3 className="text-sm font-medium text-gray-800 my-1 md:my-1.5 px-1">{product.name}</h3>
        
        <div className="text-xs mb-2 md:mb-3 px-1">
          <span className="text-sm md:text-md font-bold text-gray-900">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through ml-1.5">₹{product.originalPrice}</span>
          )}
          {product.discount > 0 && (
            <span className="text-red-500 ml-1.5">({product.discount}% OFF)</span>
          )}
        </div>

        <div className="w-full space-y-1.5 md:space-y-2 mt-auto px-1 pb-1">
          <button
            onClick={() => onPreview(product)}
            className="w-full text-xs py-2 rounded-md transition-colors
                       bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
          >
            Preview
          </button>
          <button
            onClick={() => onBuyNow(product)}
            className="w-full text-xs py-2 rounded-md transition-colors
                       bg-[#DA8267] hover:bg-[#C97257] text-white" // Updated salmon color
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

const Sample = () => {
  const [userImage, setUserImage] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [wigProducts, setWigProducts] = useState(mockWigProducts);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const savedImage = localStorage.getItem('virtualHairPhoto');
    if (savedImage) {
      setUserImage(savedImage);
    }
  }, []);

  const handleTryAgain = () => {
    setUserImage(null);
    localStorage.removeItem('virtualHairPhoto');
    alert("Image cleared. Please upload a new photo using the Gallery option.");
  };

  const handleGalleryButtonClick = () => {
    document.getElementById('sampleFileInput')?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setUserImage(reader.result);
          localStorage.setItem('virtualHairPhoto', reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePreviewWig = (wig) => {
    console.log("Previewing wig:", wig.name, "on user image:", userImage ? "Exists" : "Does not exist");
   
    // Conceptual backend call would go here
  };

  const handleBuyNowWig = (wig) => {
    console.log("Buying wig:", wig.name);
    alert(`Redirecting to buy ${wig.name}. (This is a placeholder)`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6 sm:py-10 px-4">
      {isMobileView ? (
        <div className="w-full flex items-center mb-4 sm:mb-6 relative px-2">
          <button
            onClick={() => window.history.back()}
            className="absolute left-0 text-gray-700 hover:text-gray-900 transition-colors p-2"
            aria-label="Go back"
          >
            <ChevronLeft size={28} />
          </button>
          <h1 className="text-xl font-semibold text-gray-800 mx-auto">2D Try-on</h1>
        </div>
      ) : (
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Virtual Hair 2D Try-On Experience
          </h1>
          <p className="text-sm md:text-md text-gray-600 mt-1 md:mt-2">
            Experience our advanced 2D hair visualization technology
          </p>
        </div>
      )}

      <div className={`w-full flex ${isMobileView ? 'flex-col items-center' : 'flex-row justify-center items-start gap-6 md:gap-8'}`}>
        {/* Left Side: User Image Viewer (Desktop) / Top Section (Mobile) */}
        <div className={`flex flex-col items-center ${isMobileView ? 'w-full mb-6' : 'flex-shrink-0'}`}>
          <div 
            className={`relative bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200
                        ${isMobileView ? 'w-[90vw] max-w-[340px] aspect-[3/4]' : 'w-[300px] h-[400px] md:w-[320px] md:h-[426px]'}`}
          >
            {userImage ? (
              <>
                <img src={userImage} alt="User's face for try-on" className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded shadow">
                  2D Try-on
                </span>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-50">
                <span className="text-gray-500 p-4 text-center text-sm">Your Photo Here</span>
              </div>
            )}
          </div>
          <div className={`mt-4 md:mt-5 flex ${isMobileView ? 'flex-row space-x-3 w-[90vw] max-w-[340px]' : 'flex-row space-x-3 w-full'} justify-center`}>
            <button
              onClick={handleGalleryButtonClick}
              className={`text-xs sm:text-sm border border-gray-300 px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5 font-medium
                           ${isMobileView ? 'flex-1' : ''} bg-white text-gray-600 hover:text-gray-800`}
            >
              <ImageIcon size={isMobileView ? 16 : 18} /> Gallery
            </button>
            <button
              onClick={handleTryAgain}
              className={`text-xs sm:text-sm px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-sm transition-colors font-medium flex items-center justify-center gap-1.5
                           ${isMobileView ? 'flex-1' : ''} bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 hover:text-blue-700`}
            >
              <RefreshCw size={isMobileView ? 16 : 18} /> Try Again
            </button>
          </div>
        </div>

        {/* Right Side: Wig Products (Desktop) / Bottom Section (Mobile) */}
        <div className={`flex-grow ${isMobileView ? 'w-[90vw] max-w-[380px] mt-4' : 'w-auto'} max-w-full md:max-w-[520px] lg:max-w-[600px]`}>
          {(!userImage && !isMobileView) && (
            <p className="text-center text-gray-600 mb-4 text-sm">Upload your photo via Gallery to see virtual try-ons!</p>
          )}
           <div className={`grid ${isMobileView ? 'grid-cols-2 gap-2.5 sm:gap-3' : 'grid-cols-2 gap-3 md:gap-4'} `}>
            {wigProducts.map((product) => (
              <WigProductCard
                key={product.id}
                product={product}
                onPreview={handlePreviewWig}
                onBuyNow={handleBuyNowWig}
              />
            ))}
          </div>
        </div>
      </div>

      <input
        type="file"
        accept="image/*"
        id="sampleFileInput"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default Sample;