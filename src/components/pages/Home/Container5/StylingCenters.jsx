import React from 'react';
import delhi from '../../../../../public/assets/citiesSection/delhi.png';
import mumbai from '../../../../../public/assets/citiesSection/mumbai.png';
import pune from '../../../../../public/assets/citiesSection/pune.png';

const centers = [
  {
    image: delhi,
    label: 'Delhi',
  },
  {
    image: mumbai,
    label: 'Mumbai',
  },
  {
    image: pune,
    label: 'Pune',
  },
];

export default function OfflineCenters() {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-6 uppercase">
        Our Offline Centers
      </h2>

      <hr className="border-t border-gray-400 w-3/4 mx-auto mb-8" />

      <p className="text-gray-700 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
        We Currently Have Two Offline Centers Where You Can Explore Our Premium Hair
        Extensions In Person. Visit Us For Expert Consultations And A Hands-On Experience!
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {centers.map((center, index) => (
          <div
            key={index}
            className="w-80 h-80 border-2 border-red-600 rounded-full flex flex-col items-center justify-center overflow-hidden p-8"
          >
            <img src={center.image} alt={center.label} className="w-52 h-52 object-contain mb-2" />
            <span className="text-black font-medium">{center.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
