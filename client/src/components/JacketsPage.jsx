import React from 'react';

const jacketsProducts = [
  {
    id: 1,
    name: 'Adrien Light Pink Printed Boxers',
    price: 'INR 399',
    imageUrl: 'path-to-image', // replace with actual image path
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 2,
    name: 'Adrien Light Yellow Printed Boxers',
    price: 'INR 399',
    imageUrl: 'path-to-image', // replace with actual image path
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    // id: 3,
    // name: 'Bernadette Beige Stripes Boxers',
    // price: 'INR 399',
    // imageUrl: 'path-to-image', // replace with actual image path
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    // id: 4,
    // name: 'Bernadette Light Blue Stripes Boxers',
    // price: 'INR 399',
    // imageUrl: 'path-to-image', // replace with actual image path
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  // Add more products as needed
];

const JacketsPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex">
        <aside className="w-1/4 pr-4">
          <h2 className="text-xl font-bold mb-4">Collections</h2>
          <ul className="mb-8">
            <li className="mb-2"><input type="checkbox" /> Shirts (543)</li>
            <li className="mb-2"><input type="checkbox" /> Jeans (138)</li>
            <li className="mb-2"><input type="checkbox" /> T-Shirts (81)</li>
            <li className="mb-2"><input type="checkbox" /> Trousers (69)</li>
            <li className="mb-2"><input type="checkbox" /> Boxers (33)</li>
            <li className="mb-2"><input type="checkbox" /> Chinos (27)</li>
            <li className="mb-2"><input type="checkbox" /> Cargo Pants (26)</li>
          </ul>
          <h2 className="text-xl font-bold mb-4">Size</h2>
          <ul>
            <li className="mb-2"><input type="checkbox" /> S (607)</li>
            <li className="mb-2"><input type="checkbox" /> M (627)</li>
            <li className="mb-2"><input type="checkbox" /> L (656)</li>
            <li className="mb-2"><input type="checkbox" /> XL (563)</li>
            <li className="mb-2"><input type="checkbox" /> XXL (460)</li>
            <li className="mb-2"><input type="checkbox" /> 28 (20)</li>
            <li className="mb-2"><input type="checkbox" /> 30 (200)</li>
          </ul>
        </aside>
        <main className="w-3/4">
          <div className="flex justify-between mb-4">
            <div>
              <button className="px-2 py-1 border"><i className="fas fa-th-large"></i></button>
              <button className="px-2 py-1 border"><i className="fas fa-th"></i></button>
              <button className="px-2 py-1 border"><i className="fas fa-th-list"></i></button>
            </div>
            <div>
              <select className="px-2 py-1 border">
                <option>Price (Low to High)</option>
                <option>Price (High to Low)</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {jacketsProducts.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-95">
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700">{product.price}</p>
                <p>{product.sizes.join(' ')}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default JacketsPage;
