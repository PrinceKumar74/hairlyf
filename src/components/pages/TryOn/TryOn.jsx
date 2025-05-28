









// /* React-webcam/imageUploading/photo-retaking/try-again/sending to the backend */
// import  { useRef, useState } from "react";
// import Webcam from "react-webcam";
// import { Camera, Image as ImageIcon } from "lucide-react";
// import TryOnButton from "../ReusableComponents/TryOnButton";

// const imageUrl =
//   "https://hips.hearstapps.com/hmg-prod/images/absolute-collagen-hair-loss-growth-6765ac2e1fc15.jpg?crop=0.8328940432261466xw:1xh;center,top&resize=640:*";

// const TryOn = () => {
//   const webcamRef = useRef(null);
//   const [cameraOn, setCameraOn] = useState(false);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false); // State for modal visibility
//   const [selectedImage, setSelectedImage] = useState(null); // State for selected image

//   // Function to capture the image
//   const handleCapture = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);
//     setCameraOn(false); // Turn off webcam after capture
//   };

//   // Function to open modal and display the selected image
//   const openModal = (imageSrc) => {
//     setSelectedImage(imageSrc); // Set the selected image
//     setModalOpen(true); // Open the modal
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setSelectedImage(null); // Reset the selected image
//     setModalOpen(false); // Close the modal
//   };

//   // Function to download the image locally
//   const downloadImage = (imageSrc) => {
//     const link = document.createElement("a");
//     link.href = imageSrc;
//     link.download = "downloaded-image.jpg"; // File name for the downloaded image
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

    // // Function to send the captured image to the backend
    // const handleSubmit = async () => {
    //   if (!capturedImage) {
    //     alert("Please capture or upload an image first.");
    //     return;
    //   }
  
    //   try {
    //     const response = await fetch("https://your-backend-api-endpoint.com/upload", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ image: capturedImage }),
    //     });
  
    //     if (response.ok) {
    //       const result = await response.json();
    //       console.log("Backend Response:", result);
    //       alert("Image successfully sent to the backend!");
    //     } else {
    //       console.error("Failed to send image to backend.");
    //       alert("Failed to send image to backend.");
    //     }
    //   } catch (error) {
    //     console.error("Error sending image to backend:", error);
    //     alert("An error occurred while sending the image.");
    //   }
    // };
  

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-200 to-purple-400 flex flex-col items-center py-10 px-4">
//       {/* Header */}
//       <div className="text-center mb-10">
//         <h1 className="text-3xl font-semibold italic text-gray-800">
//           Virtual Hair <TryOnButton/><span> </span>Experience
//         </h1>
//         <p className="text-sm text-gray-600 mt-2">
//           Experience our advanced 3D hair visualization technology
//         </p>
        
//       </div>

//       {/* Main Section */}
//       <div className="flex flex-wrap justify-center items-center gap-10 w-full max-w-6xl">
//         {/* Left Side */}
//         <div className="flex flex-col items-center gap-6">
//           <img
//             src={imageUrl}
//             alt="Model"
//             className="w-60 h-60 object-cover rounded-xl shadow-md cursor-pointer"
//             onClick={() => openModal(imageUrl)} // Open modal on click
//           />
//           {/* suggestion was here */}
//           <div className="flex flex-col items-center">
//             {/* arrow was here */}
//             <img
//               src={imageUrl}
//               alt="Hair Suggestion"
//               className="w-60 h-60 object-cover rounded-xl shadow-md cursor-pointer"
//               onClick={() => openModal(imageUrl)} // Open modal on click
//             />
//           </div>
//         </div>

//         {/* 3D Image Center */}
//         <div className="flex flex-col items-center gap-4">
//           <div className="w-82 h-96 bg-gray-200 rounded-full border border-blue-300 flex items-center justify-center overflow-hidden shadow-inner">
//             {cameraOn ? (
//               <Webcam
//                 ref={webcamRef}
//                 screenshotFormat="image/jpeg"
//                 className="w-full h-full object-cover rounded-full"
//               />
//             ) : capturedImage ? (
//               <img
//                 src={capturedImage}
//                 alt="Captured"
//                 className="w-full h-full object-cover rounded-full cursor-pointer"
//                 onClick={() => openModal(capturedImage)} // Open modal on click
//               />
//             ) : (
//               <span className="text-xl text-gray-600">3D Image</span>
//             )}
//           </div>

//           {!cameraOn && (
//             <button
//               className="bg-gradient-to-br from-blue-400 via-blue-200 to-purple-400 hover:from-purple-400 hover:via-blue-200 hover:to-blue-400 transition-tranform duration-1000 cursor-pointer text-white px-4 py-1 rounded-full  shadow h-12"
//               onClick={() => {
//                 setCameraOn(true);
//                 setCapturedImage(null);
//               }}
//             >
//               Camera On
//             </button>
//           )}

//           {cameraOn && (
//             <button
//               className="bg-gradient-to-br from-blue-300 via-blue-200 to-purple-400 text-white px-4 py-1 rounded-full  shadow h-12 cursor-pointer"
//               onClick={handleCapture}
//             >
//               Capture Photo
//             </button>
//           )}
//         </div>

//         {/* Right Side */}
//         <div className="flex flex-col items-center gap-6">
//           <img
//             src={imageUrl}
//             alt="Model"
//             className="w-60 h-60 object-cover rounded-xl shadow-md cursor-pointer"
//             onClick={() => openModal(imageUrl)} // Open modal on click
//           />
//          {/* suggestion was here */}
//           <div className="flex flex-col items-center">
            
              
//             <img
//               src={imageUrl}
//               alt="Hair Suggestion"
//               className="w-60 h-60 object-cover rounded-xl shadow-md cursor-pointer"
//               onClick={() => openModal(imageUrl)} // Open modal on click
//             />
//           </div>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="mt-10 flex items-center gap-10">
//         {/* Camera Icon */}
//         <Camera
//           className="w-10 h-10 text-gray-800 cursor-pointer hover:text-sky-400"
//           onClick={() => {
//             setCameraOn(true);
//             setCapturedImage(null);
//           }}
//         />
//         {/* Try Again */}
//         <button
//           className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full shadow text-sm italic"
//           onClick={() => {
//             setCapturedImage(null);
//             setCameraOn(false);
//           }}
//         >
//           Try Again
//         </button>
//         {/* Submit */}
//         <button
//           className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-2 rounded-full shadow text-sm"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>

//         {/* Image Upload Icon */}
//         <ImageIcon
//           className="w-10 h-10 text-gray-800 cursor-pointer hover:text-sky-400"
//           onClick={() => {
//             document.getElementById("fileInput").click();
//           }}
//         />
//         <input
//           type="file"
//           accept="image/*"
//           id="fileInput"
//           className="hidden"
//           onChange={(e) => {
//             const file = e.target.files[0];
//             if (file) {
//               const reader = new FileReader();
//               reader.onloadend = () => {
//                 setCapturedImage(reader.result);
//                 setCameraOn(false);
//               };
//               reader.readAsDataURL(file);
//             }
//           }}
//         />
//       </div>

//       {/* Modal for Large Image View */}
//       {modalOpen && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
//           onClick={closeModal} // Close modal on outside click
//         >
//           <div
//             className="relative bg-white p-6 rounded-lg shadow-lg max-w-3xl"
//             onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
//           >
//             <button
//               className="absolute top-2 right-2 text-white bg-red-300 hover:bg-red-400 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full"
//               onClick={closeModal}
//             >
//               &times;
//             </button>
//             <img
//               src={selectedImage}
//               alt="Large View"
//               className="w-full h-auto max-h-[80vh] object-contain"
//             />
//             <button
//               className="mt-4 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-full shadow"
//               onClick={() => downloadImage(selectedImage)}
//             >
//               Download Image
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TryOn;














// import { useState, useEffect, useRef } from "react";
// import Webcam from "react-webcam";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Camera, Image as ImageIcon } from "lucide-react";
// import TryOnButton from "../ReusableComponents/TryOnButton";

// const products = [
//   { 
//     id: 1,
//     name: "Curly Wave",
//     image: "https://hips.hearstapps.com/hmg-prod/images/absolute-collagen-hair-loss-growth-6765ac2e1fc15.jpg",
//     link: "/products/curly-wave"
//   },
//   { 
//     id: 2,
//     name: "Straight Cut",
//     image: "https://hips.hearstapps.com/hmg-prod/images/absolute-collagen-hair-loss-growth-6765ac2e1fc15.jpg",
//     link: "/products/straight-cut"
//   },
//   { 
//     id: 3,
//     name: "Bob Style",
//     image: "https://hips.hearstapps.com/hmg-prod/images/absolute-collagen-hair-loss-growth-6765ac2e1fc15.jpg",
//     link: "/products/bob-style"
//   },
//   { 
//     id: 4,
//     name: "Layered Cut",
//     image: "https://hips.hearstapps.com/hmg-prod/images/absolute-collagen-hair-loss-growth-6765ac2e1fc15.jpg",
//     link: "/products/layered-cut"
//   },
// ];

// const TryOn = () => {
//   const webcamRef = useRef(null);
//   const [isCameraOn, setIsCameraOn] = useState(false);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [activeProductIndex, setActiveProductIndex] = useState(0);
//   const [isMobileView, setIsMobileView] = useState(false);

//   // Responsive view detection
//   useEffect(() => {
//     const handleResize = () => setIsMobileView(window.innerWidth <= 768);
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Load saved image from local storage
//   useEffect(() => {
//     const savedImage = localStorage.getItem('virtualHairPhoto');
//     if (savedImage) setCapturedImage(savedImage);
//   }, []);

//   const capturePhoto = () => {
//     const imageSrc = webcamRef.current?.getScreenshot();
//     if (imageSrc) {
//       setCapturedImage(imageSrc);
//       setIsCameraOn(false);
//       localStorage.setItem('virtualHairPhoto', imageSrc);
//     }
//   };

//   const handleTryAgain = () => {
//     setCapturedImage(null);
//     setIsCameraOn(false);
//     localStorage.removeItem('virtualHairPhoto');
//   };

//     // Function to send the captured image to the backend
//     const handleSubmit = async () => {
//       if (!capturedImage) {
//         alert("Please capture or upload an image first.");
//         return;
//       }
  
//       try {
//         const response = await fetch("https://your-backend-api-endpoint.com/upload", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ image: capturedImage }),
//         });
  
//         if (response.ok) {
//           const result = await response.json();
//           console.log("Backend Response:", result);
//           alert("Image successfully sent to the backend!");
//         } else {
//           console.error("Failed to send image to backend.");
//           alert("Failed to send image to backend.");
//         }
//       } catch (error) {
//         console.error("Error sending image to backend:", error);
//         alert("An error occurred while sending the image.");
//       }
//     };
  

//   const WebcamSection = () => (
//     <div className="flex flex-col items-center gap-4">
//       <div className="lg:w-82 lg:h-96 w-96 h-96 bg-gray-200 rounded-full border border-blue-300 flex items-center justify-center overflow-hidden shadow-inner">
//         {isCameraOn ? (
//           <Webcam
//             ref={webcamRef}
//             mirrored
//             screenshotFormat="image/jpeg"
//             videoConstraints={{ facingMode: 'user' }}
//             className="w-full h-full object-cover"
//           />
//         ) : capturedImage ? (
//           <img
//             src={capturedImage}
//             alt="Captured"
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <span className="text-xl text-gray-600">3D Image</span>
//         )}
//       </div>

//       {!isCameraOn ? (
//         <button
//           className="bg-gradient-to-br from-blue-400 via-blue-200 to-purple-400 hover:from-purple-400 hover:via-blue-200 hover:to-blue-400 transition-all duration-300 cursor-pointer text-white px-4 py-1 rounded-full shadow h-12"
//           onClick={() => {
//             setIsCameraOn(true);
//             setCapturedImage(null);
//           }}
//         >
//           Camera On
//         </button>
//       ) : (
//         <button
//           className="bg-gradient-to-br from-blue-300 via-blue-200 to-purple-400 text-white px-4 py-1 rounded-full shadow h-12 cursor-pointer transition-all duration-300"
//           onClick={capturePhoto}
//         >
//           Capture Photo
//         </button>
//       )}
//     </div>
//   );

//   const ProductCard = ({ product }) => (
//     <div className="relative group">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-62 h-56  object-cover rounded-xl shadow-md"
//       />
//       <button
//         onClick={() => (window.location.href = product.link)}
//         className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-sky-400 hover:bg-sky-500 text-white px-4 py-2 rounded-full shadow-md text-sm opacity-90 hover:opacity-100 transition-opacity duration-300"
//       >
//         Buy {product.name}
//       </button>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-200 to-purple-400 flex flex-col items-center py-10 px-4">
//       {/* Header Section */}
//       <div className="text-center mb-10">
//         <h1 className="text-3xl font-semibold italic text-gray-800">
//           Virtual Hair <TryOnButton /> Experience
//         </h1>
//         <p className="text-sm text-gray-600 mt-2">
//           Experience our advanced 3D hair visualization technology
//         </p>
//       </div>

//       {/* Desktop Layout */}
//       {!isMobileView && (
//         <div className="hidden md:flex flex-wrap justify-center items-center gap-10 w-full max-w-7xl">
//           <div className="flex flex-col items-center gap-6 mr-10">
//             {products.slice(0, 2).map((product) => (
//               <div key={product.id} className="lg:w-60 lg:h-60 w-40 h-40">
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>

//           <WebcamSection />

//           <div className="flex flex-col items-center gap-6 ml-10">
//             {products.slice(2, 4).map((product) => (
//               <div key={product.id} className="lg:w-60 lg:h-60 w-40 h-40">
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Mobile Layout */}
//       {isMobileView && (
//         <div className="md:hidden flex flex-col items-center gap-8 w-full">
//           <WebcamSection />
          
//           <div className="w-full max-w-lg">
//             <Carousel 
//               showArrows={true} 
//               showThumbs={false} 
//               showStatus={false}
//               onChange={(index) => setActiveProductIndex(index)}
//             >
//               {products.map((product) => (
//                 <div key={product.id} className="p-2 h-96">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-cover rounded-xl"
//                   />
//                 </div>
//               ))}
//             </Carousel>
//             <button
//               onClick={() => (window.location.href = products[activeProductIndex]?.link)}
//               className="mt-4 bg-sky-400 hover:bg-sky-500 text-white px-6 py-2 rounded-full shadow-md text-sm w-full transition-all duration-300"
//             >
//               Buy {products[activeProductIndex]?.name}
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Action Buttons */}
//       <div className="mt-10 flex items-center gap-10">
//         <Camera
//           className="w-10 h-10 text-gray-800 cursor-pointer hover:text-sky-400 transition-colors"
//           onClick={() => {
//             setIsCameraOn(true);
//             setCapturedImage(null);
//           }}
//         />
//         <button
//           className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full shadow text-sm italic transition-colors"
//           onClick={handleTryAgain}
//         >
//           Try Again
//         </button>
//         <button
//           className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-2 rounded-full shadow text-sm transition-colors"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//         <ImageIcon
//           className="w-10 h-10 text-gray-800 cursor-pointer hover:text-sky-400 transition-colors"
//           onClick={() => document.getElementById("fileInput").click()}
//         />
//         <input
//           type="file"
//           accept="image/*"
//           id="fileInput"
//           className="hidden"
//           onChange={(e) => {
//             const file = e.target.files[0];
//             if (file) {
//               const reader = new FileReader();
//               reader.onloadend = () => {
//                 setCapturedImage(reader.result);
//                 setIsCameraOn(false);
//                 localStorage.setItem('virtualHairPhoto', reader.result);
//               };
//               reader.readAsDataURL(file);
//             }
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default TryOn;


import { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import {Link} from 'react-router-dom';
import { Camera, Image as ImageIcon, Upload, ChevronLeft } from "lucide-react";

// products array and ProductCard component are removed as per new UI.
// Carousel and its CSS import are also removed.

const TryOn = () => {
  const webcamRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  // activeProductIndex is removed as product carousel is removed.
  const [isMobileView, setIsMobileView] = useState(false);

  // Responsive view detection
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 768); // Changed to < 768 for a common breakpoint
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load saved image from local storage
  useEffect(() => {
    const savedImage = localStorage.getItem('virtualHairPhoto');
    if (savedImage) {
      setCapturedImage(savedImage);
      setIsCameraOn(false); // Ensure camera is off if loading a saved image
    }
  }, []);

  const capturePhoto = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setCapturedImage(imageSrc);
      setIsCameraOn(false);
      localStorage.setItem('virtualHairPhoto', imageSrc);
    }
  };

  const handleTryAgain = () => {
    setCapturedImage(null);
    setIsCameraOn(false);
    localStorage.removeItem('virtualHairPhoto');
  };

  const handleSubmit = async () => {
    if (!capturedImage) {
      alert("Please capture or upload an image first.");
      return;
    }

    try {
      const response = await fetch("https://your-backend-api-endpoint.com/upload", { // Placeholder
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: capturedImage }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Backend Response:", result);
        alert("Image successfully sent to the backend!");
      }
        
      
    } catch (error) {
      console.error("Error submitting image:", error);
      
    }
  };

  const handleCaptureButtonClick = () => {
    if (isCameraOn) {
      capturePhoto();
    } else {
      setCapturedImage(null); // Clear previous image
      localStorage.removeItem('virtualHairPhoto');
      setIsCameraOn(true);
    }
  };

  const handleGalleryButtonClick = () => {
    document.getElementById("fileInput")?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setCapturedImage(reader.result);
          setIsCameraOn(false);
          localStorage.setItem('virtualHairPhoto', reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // WebcamSection is now integrated into the main return for clarity with new UI
  // ProductCard and Carousel related code is removed.

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-6 sm:py-10 px-4">
      {/* Header Section */}
      {isMobileView ? (
        <div className="w-full flex items-center mb-6 sm:mb-8 relative px-2">
          <button 
            onClick={() => window.history.back()} 
            className="absolute left-0 text-gray-700 hover:text-gray-900 transition-colors p-2"
            aria-label="Go back"
          >
            <ChevronLeft size={28} />
          </button>
          <h1 className="text-xl font-semibold text-gray-800 mx-auto">
            2D Try-on
          </h1>
        </div>
      ) : (
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">
            Virtual Hair 2D Try-On Experience
          </h1>
          <p className="text-md text-gray-600 mt-2">
            Experience our advanced 2D hair visualization technology
          </p>
        </div>
      )}

      {/* Image Display Area */}
      <div 
        className={`bg-[#DDCDBF] rounded-xl flex items-center justify-center shadow-lg 
                   ${isMobileView ? 'w-[90vw] max-w-[380px] h-auto aspect-[6/5] p-3' : 'w-full max-w-[500px] h-[320px] p-4'}
                  `}
      >
        <div className={`relative w-2/3 h-full max-w-2/3 max-h-full 
                         ${isMobileView ? 'max-w-[260px] max-h-[260px]' : 'max-w-[260px] max-h-[260px]'}
                         bg-white rounded-full border-2 border-dashed border-gray-500 
                         flex items-center justify-center overflow-hidden aspect-square mx-auto`}
        >
          {isCameraOn ? (
            <Webcam
              ref={webcamRef}
              mirrored
              screenshotFormat="image/jpeg"
              videoConstraints={{ facingMode: 'user', width: 1280, height: 720 }}
              className="w-full h-full object-cover"
            />
          ) : capturedImage ? (
            <img
              src={capturedImage}
              alt="Captured"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-lg text-gray-500 text-center p-2">2D Image</span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className={`mt-8 flex ${isMobileView ? 'flex-col space-y-3 w-[90vw] max-w-[380px]' : 'flex-row space-x-4 items-center'} justify-center`}>
        <button 
          onClick={handleCaptureButtonClick} 
          className={`text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-medium
                     ${isMobileView ? 'w-full' : 'min-w-[160px]'} bg-[#A57E6E]`}
        >
          <Camera size={20} /> {isCameraOn ? 'Take Picture' : 'Capture'}
        </button>
        <button 
          onClick={handleGalleryButtonClick} 
          className={`border px-6 py-3 rounded-full shadow-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 font-medium
                     ${isMobileView ? 'w-full' : 'min-w-[160px]'} bg-white text-[#A57E6E] border-[#A57E6E]`}
        >
          {isMobileView ? <Upload size={20} /> : <ImageIcon size={20} />}
          {isMobileView ? 'Upload From Gallery' : 'Gallery'}
        </button>
      </div>

      {/* Secondary Actions: Try Again and Submit */}
      {(capturedImage || isCameraOn) && (
        <div className={`mt-6 flex ${isMobileView ? 'flex-col space-y-3 w-[90vw] max-w-[380px]' : 'flex-row space-x-4 items-center'} justify-center`}>
          <button
            onClick={handleTryAgain}
            className={`px-6 py-3 rounded-full shadow-md transition-colors font-medium
                       ${isMobileView ? 'w-full' : 'min-w-[160px]'} bg-gray-200 hover:bg-gray-300 text-gray-700`}
          >
            Clear & Start Over
          </button>
          {capturedImage && !isCameraOn && (
          <Link to="/swap">  <button
              onClick={handleSubmit}
              className={`text-white px-6 py-3 rounded-full shadow-md transition-colors font-medium
                         ${isMobileView ? 'w-full' : 'min-w-[160px]'} bg-sky-500 hover:bg-sky-600`}
            >
             Submit Image
            </button></Link>
          )}
        </div>
      )}
      
      <input
        type="file"
        accept="image/*"
        id="fileInput"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default TryOn;