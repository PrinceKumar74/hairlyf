import React from 'react';
import girlModel from '../../../../../public/hair/girlModel.jpeg';
import boyModel from '../../../../../public/hair/boyModel.png';
import { Link } from "react-router-dom";

const HairCategories = () => {
  return (
    <div className="text-center py-10">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">OUR HAIR CATEGORIES</h2>
      <hr className="border-t border-black w-[90%] mx-auto mt-4  mb-12" />

      {/* Categories */}
      <div className="flex flex-row md:flex-row justify-center items-center gap-12 md:gap-20">
        {/* Men */}
        <div className="flex flex-col items-center">
            <Link to='/menProducts' className='text-xl md:text-2xl font-bold'>
          <img
            src={boyModel}
            alt="Men"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 object-cover rounded-full"
          />
          </Link>
          <p className="mt-4 text-xl md:text-2xl font-bold">Men</p>
        </div>

        {/* Women */}
        <div className="flex flex-col items-center">
        <Link to='/womenProducts' className='text-xl md:text-2xl font-bold'>
          <img
            src={girlModel}
            alt="Women"
            className="w-48 h-48  md:w-64 md:h-64  lg:w-96 lg:h-96 object-cover rounded-full"
          />
          </Link>
          <p className="mt-4 text-xl md:text-2xl font-bold">Women</p>
        </div>
      </div>
    </div>
  );
};

export default HairCategories;
