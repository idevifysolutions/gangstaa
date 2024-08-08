import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeProductData } from "../data/homeProductData";
import { removeProductFromCart } from "../features/productCart/productCart";

const Cart = () => {
  const dispatch = useDispatch();
  const addToCart = useSelector((state) => state.productAddedToCartId || []);

  // Debugging output
  console.log("Redux state:", addToCart);

  // Filter the products that are in the cart
  const cartProducts = homeProductData.filter((product) =>
    addToCart.includes(product.id)
  );

  // Function to handle removing a product from the cart
  const handleRemoveFromCart = (id) => {
    dispatch(removeProductFromCart(id));
  };

  return (
    <div>
      {cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100px", height: "100px" }}
            />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button onClick={() => handleRemoveFromCart(product.id)}>
              Remove From Cart
            </button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
