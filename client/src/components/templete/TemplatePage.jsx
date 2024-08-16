

import React, { useState } from 'react';

const Dropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full px-4 py-2 text-left text-xl font-bold border-b-2"
      >
        {title}
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <ul className="mt-2 pl-4">
          {options.map((option, index) => (
            <li key={index} className="mb-2">
              <input type="checkbox" /> {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


const TemplatePage = ({ children }) => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-wrap">
        <aside className="w-full sm:w-1/4 pr-4 mb-4 sm:mb-0">
          <Dropdown
            title="Collections"
            options={['Shirts (543)', 'Jeans (138)', 'T-Shirts (81)', 'Trousers (69)', 'Boxers (33)', 'Chinos (27)', 'Cargo Pants (26)']}
          />
          <Dropdown
            title="Size"
            options={['S (607)', 'M (627)', 'L (656)', 'XL (563)', 'XXL (460)', '28 (20)', '30 (200)']}
          />
          {/* <Dropdown
            title="Fit"
            options={['Slim', 'Regular', 'Loose']}
          /> */}
          {/* <Dropdown
            title="Pattern"
            options={['Solid', 'Striped', 'Checked']}
          /> */}
          <Dropdown
            title="Colors"
            options={['Red', 'Blue', 'Green']}
          />
          <Dropdown
            title="Price (INR)"
            options={['0-500', '500-1000', '1000-2000']}
          />
          {/* <Dropdown
            title="Occasion"
            options={['Casual', 'Formal']}
          /> */}
          {/* <Dropdown
            title="Sleeves"
            options={['Short', 'Long']}
          /> */}
          {/* <Dropdown
            title="Neck/Collar"
            options={['Round', 'V-Neck', 'Collar']}
          /> */}
        </aside>
        <main className="w-full sm:w-3/4">
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

