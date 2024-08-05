// import React from "react";
// import { motion } from "framer-motion";
// import HomeProductCard from "./HomeProductCard";
// import { homeProductData } from "../../public/homeProductData";

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//     },
//   }),
// };

// const ProductGrid = () => {
//   return (
//     <motion.div
//       className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
//       initial="hidden"
//       animate="visible"
//       variants={{
//         visible: {
//           transition: {
//             staggerChildren: 0.2,
//           },
//         },
//       }}
//     >
//       {homeProductData.map((product, index) => (
//         <motion.div key={product.id} custom={index} variants={cardVariants}>
//           <HomeProductCard product={product} />
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// export default ProductGrid;
