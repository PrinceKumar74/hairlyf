import React from "react";

const blogPosts = [
  {
    id: 1,
    imageSrc: "blogPics/pic1.png",
    imageAlt: "Woman showing hair",
    title: "Industry Trends: The Rise of Custom Wigs",
    excerpt:
      "With advancements in wig-making technology, custom wigs are becoming the new norm, from lace fronts to hand-tied designs. Discover how personalization is changing the industry.",
  },
  {
    id: 2,
    imageSrc: "blogPics/pic4.png",
    imageAlt: "Blonde hair texture",
    title: "New Arrivals: Fresh Styles You'll Love",
    excerpt:
      "Exciting new designs are here! Whether you're looking for natural textures, bold colors, or trendy cuts, explore our latest collection and find your perfect match.",
  },
  {
    id: 3,
    imageSrc: "blogPics/pic2.png",
    imageAlt: "Woman with hair extension",
    title: "Celebrity Wig Styles: Trending Looks of the Season",
    excerpt:
      "From red carpets to social media, celebrities are redefining wig fashion. Explore the latest styles worn by icons and how you can achieve this same look with our premium collection.",
  },
  {
    id: 4,
    imageSrc: "blogPics/pic5.png",
    imageAlt: "Woman showing wig",
    title: "Customer Spotlight: Real Stories, Real Transformation",
    excerpt:
      "Our wigs are more than just hair; they're confidence boosters. Read inspiring stories from customers who have transformed their look with our quality wigs.",
  },
  {
    id: 5,
    imageSrc: "blogPics/pic3.png",
    imageAlt: "Hair brush with hair extensions",
    title: "Wig Care 101: Pro Tips from Experts",
    excerpt:
      "Maintaining your wig's shine and longevity requires the right care routine. Our experts share insider tips on washing and styling.",
  },
  {
    id: 6,
    imageSrc: "blogPics/pic6.png",
    imageAlt: "Woman with hair products",
    title: "Sustainable Beauty: Our Commitment to Eco-Friendly Wigs",
    excerpt:
      "As sustainability becomes a priority, we are dedicated to producing wigs with ethically sourced and eco-friendly materials. Learn how we're making a difference in the beauty industry.",
  },
];

const Blogs = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <div className="border-t border-gray-300 mb-4 w-full"></div>
          <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-wider inline-block px-4 bg-gray-50 z-10 relative">
            OUR BLOGS
          </h2>
          <div className="border-t border-gray-300 mt-4 w-full"></div>
        </div>

        <p className="mt-10 text-center text-gray-700 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-12">
          We Currently Have Two Offline Centers Where You Can Explore Our Premium Hair
          Extensions In Person. Visit Us For Expert Consultations And A Hands-On Experience!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="col-span-1 space-y-6">
            {blogPosts.slice(0, 2).map((post) => (
              <div key={post.id} className="bg-white shadow rounded overflow-hidden flex flex-col">
                <img
                  src={post.imageSrc}
                  alt={post.imageAlt}
                  className="w-full object-contain"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-base font-bold mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <button className="bg-orange-500 text-white text-xs px-5 py-2 rounded w-full mt-auto hover:bg-orange-600 transition-colors">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-1 space-y-6">
            {blogPosts.slice(2, 4).map((post) => (
              <div key={post.id} className="bg-white shadow rounded overflow-hidden flex flex-col">
                <img
                  src={post.imageSrc}
                  alt={post.imageAlt}
                  className="w-full object-contain"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-base font-bold mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <button className="bg-orange-500 text-white text-xs px-5 py-2 rounded w-full mt-auto hover:bg-orange-600 transition-colors">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-1 space-y-6">
            {blogPosts.slice(4, 6).map((post) => (
              <div key={post.id} className="bg-white shadow rounded overflow-hidden flex flex-col">
                <img
                  src={post.imageSrc}
                  alt={post.imageAlt}
                  className="w-full object-contain"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-base font-bold mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <button className="bg-orange-500 text-white text-xs px-5 py-2 rounded w-full mt-auto hover:bg-orange-600 transition-colors">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button className="border border-orange-500 text-gray-800 text-sm px-8 py-2 hover:bg-gray-100 transition-colors rounded">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
