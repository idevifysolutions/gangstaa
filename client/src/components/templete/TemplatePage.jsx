import React from 'react';

const TemplatePage = ({ children }) => {
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
          <ul className="mb-8">
            <li className="mb-2"><input type="checkbox" /> S (607)</li>
            <li className="mb-2"><input type="checkbox" /> M (627)</li>
            <li className="mb-2"><input type="checkbox" /> L (656)</li>
            <li className="mb-2"><input type="checkbox" /> XL (563)</li>
            <li className="mb-2"><input type="checkbox" /> XXL (460)</li>
            <li className="mb-2"><input type="checkbox" /> 28 (20)</li>
            <li className="mb-2"><input type="checkbox" /> 30 (200)</li>
          </ul>
          <h2 className="text-xl font-bold mb-4">Fit</h2>
          <ul className="mb-8">
            <li className="mb-2"><input type="checkbox" /> Slim</li>
            <li className="mb-2"><input type="checkbox" /> Regular</li>
            <li className="mb-2"><input type="checkbox" /> Loose</li>
          </ul>
          <h2 className="text-xl font-bold mb-4">Pattern</h2>
          <ul className="mb-8">
            <li className="mb-2"><input type="checkbox" /> Solid</li>
            <li className="mb-2"><input type="checkbox" /> Striped</li>
            <li className="mb-2"><input type="checkbox" /> Checked</li>
          </ul>
          <h2 className="text-xl font-bold mb-4">Colors</h2>
          <ul className="mb-8">
            <li className="mb-2"><input type="checkbox" /> Red</li>
            <li className="mb-2"><input type="checkbox" /> Blue</li>
            <li className="mb-2"><input type="checkbox" /> Green</li>
          </ul>
          <h2 className="text-xl font-bold mb-4">Price (INR)</h2>
          <ul className="mb-8">
            <li className="mb-2"><input type="checkbox" /> 0-500</li>
            <li className="mb-2"><input type="checkbox" /> 500-1000</li>
            <li className="mb-2"><input type="checkbox" /> 1000-2000</li>
          </ul>
          <h2 className="text-xl font-bold mb-4">Occasion</h2>
          <ul className="mb-8">
            <li className="mb-2"><input type="checkbox" /> Casual</li>
            <li className="mb-2"><input type="checkbox" /> Formal</li>
          </ul>
          <h2 className="text-xl font-bold mb-4">Sleeves</h2>
          <ul className="mb-8">
            <li className="mb-2"><input type="checkbox" /> Short</li>
            <li className="mb-2"><input type="checkbox" /> Long</li>
          </ul>
          <h2 className="text-xl font-bold mb-4">Neck/Collar</h2>
          <ul className="mb-8">
            <li className="mb-2"><input type="checkbox" /> Round</li>
            <li className="mb-2"><input type="checkbox" /> V-Neck</li>
            <li className="mb-2"><input type="checkbox" /> Collar</li>
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
          {children}
        </main>
      </div>
    </div>
  );
};

export default TemplatePage;
