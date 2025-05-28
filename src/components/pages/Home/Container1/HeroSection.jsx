
// import React from "react";
// import girl from "../../../../public/hair/heroSectionImage.png";
// // import boy from "../../../../public/hair/boy.png";

// const HeroSection = () => {
//   return (
//     <div className="bg-[#FFF8F8] px-12 pt-16 flex flex-col lg:flex-row items-center justify-between">
//       {/* Left Text Section */}
//       <div className="max-w-xl text-center lg:text-left md:ml-12 lg:ml-20">
//         <div className="bg-[#AA5BAE] text-white font-bold inline-block px-7 py-4 rounded-md text-base md:text-3xl lg:text-4xl xl:text-5xl mb-6">
//           PREMIUM HAIR WIGS
//         </div>
//         <h1 className="text-5xl lg:text-6xl font-serif text-gray-900 mb-10 leading-snug">
//           Unlock Your True <br /> Beauty With Our <br /> Exquisite Wigs
//         </h1>
//         <button className="mt-4 px-7 py-3 border-2 border-[#AA5BAE] text-lg font-semibold rounded-md hover:bg-purple-50 transition">
//           Shop Now
//         </button>
//       </div>

//       {/* Right Girl Image Only */}
//       <div className="mt-12 lg:mt-0 relative flex justify-center">
      
          
//         <img
//           src={girl}
//           alt="Girl"
//           className="w-[300px] lg:w-[400px] -ml-8 lg:-ml-16 z-20 relative"
//         />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;































import React from "react";
import bigImg from '../../../../../public/assets/heroSection/bigImg.png';
import bottomRightImg from '../../../../../public/assets/heroSection/bottomRightImg.png';
import topLeftImg from '../../../../../public/assets/heroSection/topLeftImg.png';

export default function WigPromo() {
  return (
    <div className="bg-red-100">
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl px-10 md:px-20 sm:px-6 lg:px-8 py-12 lg:py-24  mx-auto w-full">
      {/* Left Section */}
      <div className="text-center lg:text-left max-w-xl space-y-6 mb-10 lg:mb-0 md:mr-5">
        <div className="inline-block bg-[#F72C5B] text-white px-6 py-4 md:py-5 rounded-md tracking-widest">
          <p className=" text-3xl sm:text-4xl xl:text-5xl" style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500 }}>
          PREMIUM HAIR WIGS
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-snug" style={{ fontFamily: '"Cormorant Garamond", serif'}}>
          Unlock Your True Beauty With Our Exquisite Wigs
        </h1>
        <button className="mt-4 border-2 border-[#F72C5B] text-[#ec5b7d] px-10 py-3 rounded-md hover:bg-[#F72C5B] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#F72C5B] focus:ring-opacity-50 text-lg">
          Shop Now
        </button>
      </div>

      {/* Right Section */}
      <div className="relative w-full max-w-md lg:max-w-lg">
        {/* Main Image */}
        <img
          src={bigImg}
          alt="Main Wig Model"
          className="rounded-lg w-full h-auto object-cover"
        />

        {/* Top Left Wig Image */}
        <img
          src={topLeftImg}
          alt="Straight Wig"
          className="absolute -top-6 -left-6 w-32 h-32 sm:w-40 sm:h-40 rounded-xl "
        />

        {/* Bottom Right Wig Image */}
        <img
          src={bottomRightImg}
          alt="Comb with Wig"
          className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-40 sm:h-40 rounded-xl "
        />

        {/* Decorative corners */}
        <div className="absolute top-0 right-0 w-10 h-1 bg-[#9C5C46] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1 h-10 bg-[#9C5C46] rounded-full"></div>
      </div>
    </div>
    </div>
  );
}













