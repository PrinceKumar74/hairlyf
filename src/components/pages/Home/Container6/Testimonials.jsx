
// export default TestimonialsSection;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import firstImg from "../../../../../public/womenSection/1.png";
import secImg from "../../../../../public/womenSection/2.png";
import thirdImg from "../../../../../public/womenSection/3.png";

const testimonials = [
  {
    id: 1,
    name: "Charlotte",
    rating: 4,
    text: "DuoPod i7 provides an immersive experience with amazing sound effects, and crystal clear music.",
    image: firstImg,
  },
  {
    id: 2,
    name: "Amalia",
    rating: 4,
    text: "DuoPod i7 provides an immersive experience with amazing sound effects, and crystal clear music.",
    image: secImg,
  },
  {
    id: 3,
    name: "Sophia",
    rating: 5,
    text: "The best audio experience I've ever had. Truly revolutionary sound quality.",
    image: thirdImg,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-2xl ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="min-h-screen bg-red-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          OUR TESTIMONIALS
        </h2>
        <hr className="border-t border-black w-[90%] mx-auto mt-4" />
        <p className="text-xl text-gray-600 mb-12">
          See What Our Customers Say
        </p>

        <div
          className="relative h-96 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false}>
            {testimonials.map((testimonial, index) => {
              let rawPosition = index - activeIndex;
              let position = rawPosition;

              // Adjust position for circular wrapping
              if (rawPosition > 1) position -= testimonials.length;
              else if (rawPosition < -1) position += testimonials.length;

              const isActive = position === 0;

              return (
                <motion.div
                  key={testimonial.id}
                  className={`absolute inset-0 flex flex-col items-center justify-center gap-4 ${
                    isActive ? "z-10" : "z-0"
                  }`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    x: position * 100 + "%",
                    filter: "blur(4px)",
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0.6,
                    scale: isActive ? 1 : 0.9,
                    x: position * 100 + "%",
                    filter: isActive ? "blur(0px)" : "blur(4px)",
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <div
                    className={`flex flex-col items-center gap-4 max-w-2xl p-8 bg-red-100 
                        rounded-xl border-2 transition-all duration-300 ${
                          isActive ? "border-[#F72C5B]" : "border-[#f8809c]"
                        }`}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className={`rounded-full object-cover transition-all duration-300 ${
                        isActive ? "w-32 h-32" : "w-24 h-24"
                      }`}
                    />
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                    <h3
                      className={`font-semibold ${
                        isActive
                          ? "text-2xl text-gray-900"
                          : "text-xl text-gray-600"
                      }`}
                    >
                      {testimonial.name}
                    </h3>
                    <p
                      className={`text-center ${
                        isActive ? "text-lg text-gray-700" : "text-gray-500"
                      }`}
                    >
                      {testimonial.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;






// import React, { useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// // Sample testimonials data
// const testimonials = [
//   {
//     id: 1,
//     name: "Charlotte",
//     rating: 5,
//     review:
//       "DuoPod i7 provides an immersive experience with amazing sound effects and crystal clear music.",
//     image: "https://via.placeholder.com/60",
//   },
//   {
//     id: 2,
//     name: "Amelia",
//     rating: 5,
//     review:
//       "DuoPod i7 provides an immersive experience with amazing sound effects and crystal clear music.",
//     image: "https://via.placeholder.com/60",
//   },
//   {
//     id: 3,
//     name: "Amika",
//     rating: 5,
//     review:
//       "DuoPod i7 provides an immersive experience with amazing sound effects and crystal clear music.",
//     image: "https://via.placeholder.com/60",
//   },
// ];

// const TestimonialSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(1); // Start with the second card active
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.5, // Trigger when 50% of the element is visible
//   });

//   // Handle card click to change active index
//   const handleClick = (index) => {
//     setActiveIndex(index);
//   };

//   // Animation variants for cards
//   const cardVariants = {
//     inactive: (direction) => ({
//       x: direction > 0 ? 200 : -200,
//       opacity: 0,
//     }),
//     active: {
//       x: 0,
//       opacity: 1,
//       transition: { duration: 0.5, type: "spring", stiffness: 100 },
//     },
//     exit: (direction) => ({
//       x: direction < 0 ? 200 : -200,
//       opacity: 0,
//       transition: { duration: 0.5 },
//     }),
//   };

//   return (
//     <div
//       className="bg-primary min-h-screen p-8"
//       ref={ref}
//       style={{ position: "relative" }}
//     >
//       {/* Header */}
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold">OUR TESTIMONIALS</h1>
//         <p className="text-lg mt-2">See What Our Customers Say</p>
//       </div>

//       {/* Testimonial Cards */}
//       <div className="flex justify-center gap-4 overflow-hidden">
//         {testimonials.map((testimonial, index) => (
//           <motion.div
//             key={testimonial.id}
//             initial="inactive"
//             animate={
//               activeIndex === index + 1
//                 ? "active"
//                 : activeIndex > index + 1
//                 ? "exit"
//                 : "inactive"
//             }
//             exit="exit"
//             variants={cardVariants(index - activeIndex)}
//             onClick={() => handleClick(index + 1)}
//             className={`w-[300px] bg-secondary rounded-lg p-4 cursor-pointer border-2 border-accent hover:border-accent-dark transition-all duration-300`}
//           >
//             <div className="flex items-center justify-between mb-2">
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className="w-10 h-10 rounded-full"
//               />
//               <span className="text-sm text-gray-500">{testimonial.rating} ⭐</span>
//             </div>
//             <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
//             <p className="text-gray-700">{testimonial.review}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Footer */}
//       <div className="text-center mt-16">
//         <h2 className="text-2xl font-bold">OUR BLOGS</h2>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;
