import { useState } from "react";

const TemplatePage = ({ children }) => {
    const [selectedOptions, setSelectedOptions] = useState({
        Collections: {},
        Size: {},
        Colors: {},
        'Price (INR)': {}
      });

  const handleOptionChange = (dropdownTitle, option) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [dropdownTitle]: {
        ...prevState[dropdownTitle],
        [option]: !prevState[dropdownTitle]?.[option]
      }
    }));
  };

      console.log("selectedOption", selectedOptions);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-wrap">
        <aside className="w-full sm:w-1/4 pr-4 mb-4 sm:mb-0">
          <Dropdown
            title="Collections"
            options={['Shirts', 'Jeans', 'T-Shirts', 'Trousers', 'Boxers', 'Chinos', 'Cargo Pants']}
            onOptionChange={(option) => handleOptionChange('Collections', option)}
          />
          <Dropdown
            title="Size"
            options={['S', 'M', 'L', 'XL', 'XXL']}
            onOptionChange={(option) => handleOptionChange('Size', option)}
          />
          <Dropdown
            title="Colors"
            options={['Red', 'Blue', 'Green']}
            onOptionChange={(option) => handleOptionChange('Colors', option)}
          />
          <Dropdown
            title="Price (INR)"
            options={['0-500', '500-1000', '1000-2000']}
            onOptionChange={(option) => handleOptionChange('Price (INR)', option)}
          />
        </aside>
        {/* <main className="w-full sm:w-3/4">
        {React.cloneElement(children, { selectedOptions })}
        </main> */}


        

      </div>
    </div>
  );
};

const Dropdown = ({ title, options, onOptionChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option) => {
    if (onOptionChange) {
      onOptionChange(option);
    }
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
         
        </ul>
      )}
    </div>
  );
};

export default TemplatePage;
