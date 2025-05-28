
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const FreshArrivals = () => {
  const [products, setProducts] = useState();
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedData = await fetch("https://hairlyf-backend-api.onrender.com/api/products");
        const data = await fetchedData.json();
        setProducts(data);
        const allItem = data.products;
        const men = allItem.filter((product) => product.category === "men");
        const women = allItem.filter((product) => product.category === "women");
        const fourMenProduct = men.slice(0, 4);
        const fourWomenProduct = women.slice(0, 4);
        const menWithUrls = fourMenProduct.map((item) => ({
          ...item,
          imageUrls: item.images.map((imageObj) => {
            const urlCharacters = Object.values(imageObj).slice(0, -1);
            return urlCharacters.join("");
          }),
        }));
        const womenWithUrls = fourWomenProduct.map((item) => ({
          ...item,
          imageUrls: item.images.map((imageObj) => {
            const urlCharacters = Object.values(imageObj).slice(0, -1);
            return urlCharacters.join("");
          }),
        }));

        setMenProducts(menWithUrls);
        setWomenProducts(womenWithUrls);

        console.log("menProducts: ", womenProducts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="text-center py-10">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">OUR FRESH ARRIVALS</h2>
      <hr className="border-t border-black w-[90%] mx-auto mt-4 mb-12" />
      <div className="grid grid-cols-2 gap-6 md:flex md:flex-row justify-center px-12 md:px-16 lg:px-20 mb-5">
        {menProducts.map((item) => (
          <div className="flex flex-col md:w-80" key={item._id}>
            <Link to={`/product/${item._id}`}>
              <div className="bg-[#C9AEDE]">
                <img src={item.imageUrls?.[0]} alt={item.name || "Men's Product"} className="w-62" />
              </div>
            </Link>
            <p className="text-xl md:text-2xl font-semibold mt-2">{item.name}</p>
            <hr className="border-t border-black w-[90%] mb-4 mt-1" />
            <div className="flex flex-col xl:flex-row xl:gap-3 justify-center mb-3">
              <p className="text-purple-700 line-through">MRP: {item.price}</p>
              <p className="text-purple-700">MRP: {item.price}</p>
            </div>
            <button className="bg-[#AA5BAE] hover:bg-[#a941ae] text-white px-4 py-2 rounded-lg cursor-pointer xl:w-1/2">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6 md:flex md:flex-row justify-center px-12 md:px-16 lg:px-20">
        {womenProducts.map((item) => (
          <div className="flex flex-col md:w-80" key={item._id}>
            <Link to={`/product/${item._id}`}>
              <div className="bg-[#E2D1CA]">
                <img src={item.imageUrls?.[0]} alt={item.name || "Women's Product"} className="w-62" />
              </div>
            </Link>
            <p className="text-xl md:text-2xl font-semibold mt-2">{item.name}</p>
            <hr className="border-t border-black w-[90%] mb-4 mt-1" />
            <div className="flex flex-col xl:flex-row xl:gap-3 justify-center mb-3">
              <p className="text-purple-700 line-through">MRP: {item.price}</p>
              <p className="text-purple-700">MRP: {item.price}</p>
            </div>
            <button className="bg-[#AA5BAE] hover:bg-[#a941ae] text-white px-4 py-2 rounded-lg cursor-pointer xl:w-1/2">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <button className="mt-4 px-7 py-3 border-2 border-[#AA5BAE] text-lg font-semibold rounded-md hover:bg-purple-50 transition cursor-pointer">
          View More
        </button>
      </div>
    </div>
  );
};
export default FreshArrivals;