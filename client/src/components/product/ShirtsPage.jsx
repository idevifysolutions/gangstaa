import React from 'react';
import TemplatePage from '../templete/TemplatePage';

const shirtsProducts = [
  {
    id: 1,
    name: 'Cool Blue Shirt',
    price: 'INR 999',
    imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.PGU90xMjuYZbTrhqyTxIqwD6D6&pid=Api&P=0&h=180', // replace with actual image path
  },
  {
    id: 2,
    name: 'Summer Breeze Shirt',
    price: 'INR 1299',
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.QFWTQVCKpOfSAr544JFFGwHaHA&pid=Api&P=0&h=180', // replace with actual image path
  },
  {
    id: 1,
    name: 'Cool Blue Shirt',
    price: 'INR 999',
    imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.PGU90xMjuYZbTrhqyTxIqwD6D6&pid=Api&P=0&h=180', // replace with actual image path
  },
  {
    id: 2,
    name: 'Summer Breeze Shirt',
    price: 'INR 1299',
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.wuomprgTNp6vgHIkfPq-yAHaIp&pid=Api&P=0&h=180"
  },
  {
    id: 2,
    name: 'Summer Breeze Shirt',
    price: 'INR 1299',
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.wuomprgTNp6vgHIkfPq-yAHaIp&pid=Api&P=0&h=180"
  },
  {
    id: 2,
    name: 'Summer Breeze Shirt',
    price: 'INR 1299',
    imageUrl: "https://tse3.mm.bing.net/th?id=OIP.z87xbwCxLQY9zFVmIBt77AHaJ4&pid=Api&P=0&h=180"
  },
  {
    id: 2,
    name: 'Summer Breeze Shirt',
    price: 'INR 1299',
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.wuomprgTNp6vgHIkfPq-yAHaIp&pid=Api&P=0&h=180"
  },
  {
    id: 2,
    name: 'Summer Breeze Shirt',
    price: 'INR 1299',
    imageUrl: "https://tse4.mm.bing.net/th?id=OIP.8Ir2--khfKvLl2S3ch-BWQHaHa&pid=Api&P=0&w=300&h=300"
  },
  {
    id: 2,
    name: 'Summer Breeze Shirt',
    price: 'INR 1299',
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.R55n-HPSQXtF_hdJFcmcRgHaHa&pid=Api&P=0&h=180"
  },
  
  // Add more products as needed
];

const ShirtsPage = () => {
  return (
    <TemplatePage>
        <></>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {shirtsProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-95">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </TemplatePage>
  );
};

export default ShirtsPage;
