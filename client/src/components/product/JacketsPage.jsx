import React from 'react';
import TemplatePage from '../templete/TemplatePage';

const jacketsProducts = [
  {
    id: 1,
    name: 'Adrien Light Pink Printed Boxers',
    price: 'INR 399',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.JgAmnzpUFaYPWIvTl-bORAHaJP&pid=Api&P=0&h=180', // replace with actual image path
  },
  {
    id: 2,
    name: 'Adrien Light Yellow Printed Boxers',
    price: 'INR 399',
    imageUrl: "https://tse3.mm.bing.net/th?id=OIP.hEIo4Vbfb3HUc1jHbHuhVAHaIW&pid=Api&P=0&h=180"
  },
  {
    id: 3,
    name: 'Bernadette Beige Stripes Boxers',
    price: 'INR 399',
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.8HGSIuQCBcmPaCRyT7HitAHaHa&pid=Api&P=0&h=180', // replace with actual image path
  },
  {
    id: 4,
    name: 'Bernadette Light Blue Stripes Boxers',
    price: 'INR 399',
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.AsR3aGco4IvS37PshhGW-AHaHa&pid=Api&P=0&h=180', // replace with actual image path
  },
  {
    id: 1,
    name: 'Adrien Light Pink Printed Boxers',
    price: 'INR 399',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.JgAmnzpUFaYPWIvTl-bORAHaJP&pid=Api&P=0&h=180', // replace with actual image path
  },
  {
    id: 2,
    name: 'Adrien Light Yellow Printed Boxers',
    price: 'INR 399',
    imageUrl: "https://tse3.mm.bing.net/th?id=OIP.hEIo4Vbfb3HUc1jHbHuhVAHaIW&pid=Api&P=0&h=180"
  },
  {
    id: 3,
    name: 'Bernadette Beige Stripes Boxers',
    price: 'INR 399',
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.8HGSIuQCBcmPaCRyT7HitAHaHa&pid=Api&P=0&h=180', // replace with actual image path
  },
  {
    id: 4,
    name: 'Bernadette Light Blue Stripes Boxers',
    price: 'INR 399',
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.AsR3aGco4IvS37PshhGW-AHaHa&pid=Api&P=0&h=180', // replace with actual image path
  },
  {
    id: 1,
    name: 'Adrien Light Pink Printed Boxers',
    price: 'INR 399',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.JgAmnzpUFaYPWIvTl-bORAHaJP&pid=Api&P=0&h=180', // replace with actual image path
  },
  {
    id: 2,
    name: 'Adrien Light Yellow Printed Boxers',
    price: 'INR 399',
    imageUrl: "https://tse3.mm.bing.net/th?id=OIP.hEIo4Vbfb3HUc1jHbHuhVAHaIW&pid=Api&P=0&h=180"
  },
  {
    id: 3,
    name: 'Bernadette Beige Stripes Boxers',
    price: 'INR 399',
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.8HGSIuQCBcmPaCRyT7HitAHaHa&pid=Api&P=0&h=180', // replace with actual image path
  },
  {
    id: 4,
    name: 'Bernadette Light Blue Stripes Boxers',
    price: 'INR 399',
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.AsR3aGco4IvS37PshhGW-AHaHa&pid=Api&P=0&h=180', // replace with actual image path
  },
  {
    id: 1,
    name: 'Adrien Light Pink Printed Boxers',
    price: 'INR 399',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.JgAmnzpUFaYPWIvTl-bORAHaJP&pid=Api&P=0&h=180', // replace with actual image path
  },
  {
    id: 2,
    name: 'Adrien Light Yellow Printed Boxers',
    price: 'INR 399',
    imageUrl: "https://tse3.mm.bing.net/th?id=OIP.hEIo4Vbfb3HUc1jHbHuhVAHaIW&pid=Api&P=0&h=180"
  },
  {
    id: 3,
    name: 'Bernadette Beige Stripes Boxers',
    price: 'INR 399',
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.8HGSIuQCBcmPaCRyT7HitAHaHa&pid=Api&P=0&h=180', // replace with actual image path
  },
  {
    id: 4,
    name: 'Bernadette Light Blue Stripes Boxers',
    price: 'INR 399',
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.AsR3aGco4IvS37PshhGW-AHaHa&pid=Api&P=0&h=180', // replace with actual image path
  },
  // Add more products as needed
];
  




const JacketsPage = () => {
  return (
    <TemplatePage>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {jacketsProducts.map((product) => (
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

export default JacketsPage;

