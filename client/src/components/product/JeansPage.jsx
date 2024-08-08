import React from 'react';
// import TemplatePage from './template/TemplatePage';
import TemplatePage from '../templete/TemplatePage';
const jeansProducts = [
  {
    id: 1,
    name: 'Classic Blue Jeans',
    price: 'INR 999',
    imageUrl: ' https://tse4.mm.bing.net/th?id=OIP.gyya6EB4cYOQgaHeu36NBAHaHa&pid=Api&P=0&h=180',
  },
  {
    id: 2,
    name: 'Black Slim Fit Jeans',
    price: 'INR 1199',
    imageUrl: ' https://tse4.mm.bing.net/th?id=OIP.gyya6EB4cYOQgaHeu36NBAHaHa&pid=Api&P=0&h=180',
  },
  {
    id: 2,
    name: 'Black Slim Fit Jeans',
    price: 'INR 1199',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.c7E-XZnIHtDtDusXxnIatAHaHa&pid=Api&P=0&h=180',
  },
  {
    id: 2,
    name: 'Black Slim Fit Jeans',
    price: 'INR 1199',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.c7E-XZnIHtDtDusXxnIatAHaHa&pid=Api&P=0&h=180',
  },
  {
    id: 2,
    name: 'Black Slim Fit Jeans',
    price: 'INR 1199',
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.lJ2D9R2OnKxmPYoBmU0KYQHaKD&pid=Api&P=0&h=180',
  },
  {
    id: 2,
    name: 'Black Slim Fit Jeans',
    price: 'INR 1199',
    imageUrl: ' https://tse4.mm.bing.net/th?id=OIP.gyya6EB4cYOQgaHeu36NBAHaHa&pid=Api&P=0&h=180',
  },
  {
    id: 1,
    name: 'Classic Blue Jeans',
    price: 'INR 999',
    imageUrl: ' https://tse4.mm.bing.net/th?id=OIP.gyya6EB4cYOQgaHeu36NBAHaHa&pid=Api&P=0&h=180',
  },
  {
    id: 2,
    name: 'Black Slim Fit Jeans',
    price: 'INR 1199',
    imageUrl: ' https://tse4.mm.bing.net/th?id=OIP.gyya6EB4cYOQgaHeu36NBAHaHa&pid=Api&P=0&h=180',
  },
  {
    id: 2,
    name: 'Black Slim Fit Jeans',
    price: 'INR 1199',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.c7E-XZnIHtDtDusXxnIatAHaHa&pid=Api&P=0&h=180',
  },
  {
    id: 1,
    name: 'Classic Blue Jeans',
    price: 'INR 999',
    imageUrl: ' https://tse4.mm.bing.net/th?id=OIP.gyya6EB4cYOQgaHeu36NBAHaHa&pid=Api&P=0&h=180',
  },
  {
    id: 2,
    name: 'Black Slim Fit Jeans',
    price: 'INR 1199',
    imageUrl: ' https://tse4.mm.bing.net/th?id=OIP.gyya6EB4cYOQgaHeu36NBAHaHa&pid=Api&P=0&h=180',
  },
  {
    id: 2,
    name: 'Black Slim Fit Jeans',
    price: 'INR 1199',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.c7E-XZnIHtDtDusXxnIatAHaHa&pid=Api&P=0&h=180',
  },
  
  // Add more products as needed
];

const JeansPage = () => {
  return (
    <TemplatePage>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {jeansProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-95 w-full 442px:w-[30%]">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </TemplatePage>
  );
};

export default JeansPage;
