

// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import TemplatePage from '../templete/TemplatePage';

// const shirtsProducts = [
//   {
//     id: 1,
//     name: 'Cool Blue Shirt',
//     price: 'INR 999',
//     imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.PGU90xMjuYZbTrhqyTxIqwD6D6&pid=Api&P=0&h=180',
//   },
//   {
//     id: 2,
//     name: 'Summer Breeze Shirt',
//     price: 'INR 1299',
//     imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.QFWTQVCKpOfSAr544JFFGwHaHA&pid=Api&P=0&h=180',
//   },
//   {
//         id: 1,
//         name: 'Cool Blue Shirt',
//         price: 'INR 999',
//         imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.PGU90xMjuYZbTrhqyTxIqwD6D6&pid=Api&P=0&h=180', // replace with actual image path
//       },
//       {
//         id: 2,
//         name: 'Summer Breeze Shirt',
//         price: 'INR 1299',
//         imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.QFWTQVCKpOfSAr544JFFGwHaHA&pid=Api&P=0&h=180', // replace with actual image path
//       },
//       {
//         id: 1,
//         name: 'Cool Blue Shirt',
//         price: 'INR 999',
//         imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.PGU90xMjuYZbTrhqyTxIqwD6D6&pid=Api&P=0&h=180', // replace with actual image path
//       },
//       {
//         id: 2,
//         name: 'Summer Breeze Shirt',
//         price: 'INR 1299',
//         imageUrl: "https://tse1.mm.bing.net/th?id=OIP.wuomprgTNp6vgHIkfPq-yAHaIp&pid=Api&P=0&h=180"
//       },
//       {
//         id: 2,
//         name: 'Summer Breeze Shirt',
//         price: 'INR 1299',
//         imageUrl: "https://tse1.mm.bing.net/th?id=OIP.wuomprgTNp6vgHIkfPq-yAHaIp&pid=Api&P=0&h=180"
//       },
//       {
//         id: 2,
//         name: 'Summer Breeze Shirt',
//         price: 'INR 1299',
//         imageUrl: "https://tse3.mm.bing.net/th?id=OIP.z87xbwCxLQY9zFVmIBt77AHaJ4&pid=Api&P=0&h=180"
//       },
//       {
//         id: 2,
//         name: 'Summer Breeze Shirt',
//         price: 'INR 1299',
//         imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.QFWTQVCKpOfSAr544JFFGwHaHA&pid=Api&P=0&h=180',
//       },
//       {
//             id: 1,
//             name: 'Cool Blue Shirt',
//             price: 'INR 999',
//             imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.PGU90xMjuYZbTrhqyTxIqwD6D6&pid=Api&P=0&h=180', // replace with actual image path
//           },
//           {
//             id: 2,
//             name: 'Summer Breeze Shirt',
//             price: 'INR 1299',
//             imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.QFWTQVCKpOfSAr544JFFGwHaHA&pid=Api&P=0&h=180', // replace with actual image path
//           },
//           {
//             id: 1,
//             name: 'Cool Blue Shirt',
//             price: 'INR 999',
//             imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.PGU90xMjuYZbTrhqyTxIqwD6D6&pid=Api&P=0&h=180', // replace with actual image path
//           },
//           {
//             id: 2,
//             name: 'Summer Breeze Shirt',
//             price: 'INR 1299',
//             imageUrl: "https://tse1.mm.bing.net/th?id=OIP.wuomprgTNp6vgHIkfPq-yAHaIp&pid=Api&P=0&h=180"
//           },
//           {
//             id: 2,
//             name: 'Summer Breeze Shirt',
//             price: 'INR 1299',
//             imageUrl: "https://tse1.mm.bing.net/th?id=OIP.wuomprgTNp6vgHIkfPq-yAHaIp&pid=Api&P=0&h=180"
//           },
//           {
//             id: 2,
//             name: 'Summer Breeze Shirt',
//             price: 'INR 1299',
//             imageUrl: "https://tse3.mm.bing.net/th?id=OIP.z87xbwCxLQY9zFVmIBt77AHaJ4&pid=Api&P=0&h=180"
//           },
//           {
//             id: 2,
//             name: 'Summer Breeze Shirt',
//             price: 'INR 1299',
//             imageUrl: "https://tse3.mm.bing.net/th?id=OIP.z87xbwCxLQY9zFVmIBt77AHaJ4&pid=Api&P=0&h=180"
//           },
//   // Add more products as needed
// ];

// const ShirtsPage = () => {
//   return (
//     <TemplatePage>
//       <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {shirtsProducts.map((product) => (
//           <Link key={product.id} to={`/product/${product.id}`}>
//             <div className="border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-95">
//               <img
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className="w-full h-48 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//               <p className="text-gray-700">{product.price}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </TemplatePage>
//   );
// };

// export default ShirtsPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TemplatePage from '../templete/TemplatePage';

// Dummy product data (backend se fetch karna hai in future)
const shirtsProducts = [
  {
    id: 1,
    name: 'Cool Blue Shirt',
    price: '999',
    imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.PGU90xMjuYZbTrhqyTxIqwD6D6&pid=Api&P=0&h=180',
    size: 'M',
    fit: 'Slim',
    pattern: 'Solid',
    color: 'Blue',
    occasion: 'Casual',
    sleeves: 'Long',
    neck: 'Collar'
  },
  {
    id: 2,
    name: 'Summer Breeze Shirt',
    price: '1299',
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.QFWTQVCKpOfSAr544JFFGwHaHA&pid=Api&P=0&h=180',
    size: 'L',
    fit: 'Regular',
    pattern: 'Striped',
    color: 'Red',
    occasion: 'Casual',
    sleeves: 'Short',
    neck: 'V-Neck'
  },
  // Aur bhi products yaha add kar sakte hain
];

const ShirtsPage = () => {
  const [filters, setFilters] = useState({
    Collections: [],
    Size: [],
    Fit: [],
    Pattern: [],
    Colors: [],
    Price: [],
    Occasion: [],
    Sleeves: [],
    Neck: []
  });
  const applyFilters = (product) => {
    console.log("Checking product:", product);
    const result = (
      (filters.Collections.length === 0 || filters.Collections.includes('Shirts')) &&
      (filters.Size.length === 0 || filters.Size.includes(product.size)) &&
      (filters.Fit.length === 0 || filters.Fit.includes(product.fit)) &&
      (filters.Pattern.length === 0 || filters.Pattern.includes(product.pattern)) &&
      (filters.Colors.length === 0 || filters.Colors.includes(product.color)) &&
      (filters.Price.length === 0 || filters.Price.some((priceRange) => {
        const [min, max] = priceRange.split('-').map(Number);
        const productPrice = parseInt(product.price);
        return productPrice >= min && productPrice <= max;
      })) &&
      (filters.Occasion.length === 0 || filters.Occasion.includes(product.occasion)) &&
      (filters.Sleeves.length === 0 || filters.Sleeves.includes(product.sleeves)) &&
      (filters.Neck.length === 0 || filters.Neck.includes(product.neck))
    );
    console.log("Filter result for product:", product.name, result);
    return result;
  };
  
  // const applyFilters = (product) => {
  //   return (
  //     (filters.Collections.length === 0 || filters.Collections.includes('Shirts')) &&
  //     (filters.Size.length === 0 || filters.Size.includes(product.size)) &&
  //     (filters.Fit.length === 0 || filters.Fit.includes(product.fit)) &&
  //     (filters.Pattern.length === 0 || filters.Pattern.includes(product.pattern)) &&
  //     (filters.Colors.length === 0 || filters.Colors.includes(product.color)) &&
  //     (filters.Price.length === 0 || filters.Price.some((priceRange) => {
  //       const [min, max] = priceRange.split('-').map(Number);
  //       const productPrice = parseInt(product.price);
  //       return productPrice >= min && productPrice <= max;
  //     })) &&
  //     (filters.Occasion.length === 0 || filters.Occasion.includes(product.occasion)) &&
  //     (filters.Sleeves.length === 0 || filters.Sleeves.includes(product.sleeves)) &&
  //     (filters.Neck.length === 0 || filters.Neck.includes(product.neck))
  //   );
  // };

  const filteredProducts = shirtsProducts.filter(applyFilters);

  return (
    <TemplatePage filters={filters} setFilters={setFilters}>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <div className="border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-95">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700">INR {product.price}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No products found matching your filters.</p>
        )}
      </div>
    </TemplatePage>
  );
};

export default ShirtsPage;


