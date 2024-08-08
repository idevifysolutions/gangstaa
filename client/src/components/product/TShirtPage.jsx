import React from 'react';
import TemplatePage from '../templete/TemplatePage';

const tshirtProducts = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 'INR 499',
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.iTtCdo2MWG8Jg93bWoswpwAAAA&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: 'Black V-Neck T-Shirt',
    price: 'INR 599',
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.hosIOB-LLvbm_UtuwFiOKgAAAA&pid=Api&P=0&h=180',
  },
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 'INR 499',
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.iTtCdo2MWG8Jg93bWoswpwAAAA&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: 'Black V-Neck T-Shirt',
    price: 'INR 599',
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.hosIOB-LLvbm_UtuwFiOKgAAAA&pid=Api&P=0&h=180',
  },
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 'INR 499',
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.iTtCdo2MWG8Jg93bWoswpwAAAA&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: 'Black V-Neck T-Shirt',
    price: 'INR 599',
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.A6pas5ib5oP0fBdh-b6zZAHaJ-&pid=Api&P=0&h=180',
  },
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 'INR 499',
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.iTtCdo2MWG8Jg93bWoswpwAAAA&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: 'Black V-Neck T-Shirt',
    price: 'INR 599',
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.hosIOB-LLvbm_UtuwFiOKgAAAA&pid=Api&P=0&h=180',
  },
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 'INR 499',
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.iTtCdo2MWG8Jg93bWoswpwAAAA&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: 'Black V-Neck T-Shirt',
    price: 'INR 599',
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.A6pas5ib5oP0fBdh-b6zZAHaJ-&pid=Api&P=0&h=180',
  },
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 'INR 499',
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.69EHsjxVcYTGexTcQQUM9QHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: 'Black V-Neck T-Shirt',
    price: 'INR 599',
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.hosIOB-LLvbm_UtuwFiOKgAAAA&pid=Api&P=0&h=180',
  },
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 'INR 499',
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.iTtCdo2MWG8Jg93bWoswpwAAAA&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: 'Black V-Neck T-Shirt',
    price: 'INR 599',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.69EHsjxVcYTGexTcQQUM9QHaHa&pid=Api&P=0&h=180',
  },
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 'INR 499',
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.iTtCdo2MWG8Jg93bWoswpwAAAA&pid=Api&P=0&h=180",
  },
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 'INR 499',
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.iTtCdo2MWG8Jg93bWoswpwAAAA&pid=Api&P=0&h=180",
  },
  // Add more products as needed
];

const TShirtPage = () => {
  return (
    <TemplatePage>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tshirtProducts.map((product) => (
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

export default TShirtPage;
