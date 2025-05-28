import React from 'react';
import { Link } from "react-router-dom";
const TryOur3DVirtualHair = () => {
  const bgColor = '#FFEEF0';
  const headingColor = '#FFFFFF';
  const barColor = '#E91E63';



  return (
    <section style={{ backgroundColor: bgColor }} className="py-8 md:py-12 ">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center ">
          <div className="md:col-span-1 text-center md:text-left">
            <div style={{ backgroundColor: barColor, color: headingColor }} className="inline-block  px-4  rounded-lg lg:px-10  lg:py-4 py-2 uppercase font-semibold text-xl lg:text-3xl tracking-wider  mx-auto md:mx-0">
              FIND YOUR PERFECT MATCH
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-4 md:mt-6 text-gray-800 leading-tight">
              Try Our 3D Virtual Hair
            </h2>

            <p className="text-base md:text-lg lg:text-xl font-serif mt-1 md:mt-2 text-gray-700">
              - See Your New Look Instantly!
            </p>

            <div className="flex items-center justify-center md:justify-start mt-6 md:mt-8 space-x-4">
            <img src="/camera.png" alt="Camera icon" className="w-16 h-10 md:w-8 md:h-8 lg:w-32 lg:h-20" />
            <Link to='/tryOn'>
            <button className="relative group overflow-hidden cursor-pointer border border-gray-500 text-gray-600 px-8 py-2 md:px-34 md:py-2 rounded-lg transition-colors text-base lg:text-2xl md:text-lg font-semibold">
 
  <span
    className="absolute inset-0 bg-[#E91E63] w-0 group-hover:w-full rounded-md transition-all duration-300 ease-out"
    aria-hidden="true"
  ></span>
  
  <span className="relative group-hover:text-white transition-colors duration-700 ">
    Try Now
  </span>
</button></Link>
            </div>

            
          </div>

          <div className="md:col-span-1 relative mt-8 md:mt-0 px-2 md:px-4">
            <img src="/hair/woman.png" alt="Woman using virtual hair try-on app" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryOur3DVirtualHair;