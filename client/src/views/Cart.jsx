import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "../features/productCart/productCart";
import Emptycart from "../components/EmptyCart/Emptycart";
import { jacketsProducts } from "../data/jacketsProducts";

const Cart = () => {
  const dispatch = useDispatch();
  const productAddedToCartId = useSelector(
    (state) => state.productAddedToCart || []
  );

  // Filter the products that are in the cart
  const cartProducts = jacketsProducts.filter((product) =>
    productAddedToCartId.includes(product.id)
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
              src={product.imageUrl}
              alt={product.name}
              style={{ width: "100px", height: "100px" }}
            />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button onClick={() => handleRemoveFromCart(product.id)}>
              Remove From Cart
            </button>
            <button style={{ marginLeft: "10px" }}>Buy</button>
          </div>
        ))
      ) : (
        <Emptycart />
      )}
    </div>
  );
};

export default Cart;
