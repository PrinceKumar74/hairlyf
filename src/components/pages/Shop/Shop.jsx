

// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../../store/slice/cartSlice';

// const Shop = () => {
//   const dispatch = useDispatch();
//   const [data, setData] = React.useState([]);

//   React.useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price');
//         const result = await response.json();
//         setData(result.products);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="p-4">
//       <Outlet/>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {data.map(product => (
//           <div key={product.id} className="border p-4 rounded-lg">
//             <h3 className="font-bold">{product.title}</h3>
//             <p className="text-gray-600">₹{product.price}</p>
//             <button 
//               className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//               onClick={() => dispatch(addToCart({
//                 id: product.id,
//                 title: product.title,
//                 price: product.price,
//               }))}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;

import React from 'react'

const Shop = () => {
  return (
    <div>
      this is the shop Page
    </div>
  )
}

export default Shop
