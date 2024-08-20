import { useNavigate } from "react-router-dom";

const SaleBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white py-16 px-8 lg:px-24 min-h-screen">
      {/* Left Side Content */}
      <div className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0">
        <h4 className="text-base uppercase tracking-widest text-gray-500">
          Spring/Summer 2024
        </h4>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mt-2">
          Sale 30% Off Everything
        </h1>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-black text-white py-2 px-6 text-sm sm:text-base uppercase tracking-wider hover:scale-105"
        >
          Shop Now
        </button>
      </div>

      {/* Right Side Image */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src="https://img.freepik.com/premium-photo/handsome-young-man-leather-jacket-isolated-white-background_956363-2367.jpg"
          alt="Sale Banner"
          className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
};

export default SaleBanner;
