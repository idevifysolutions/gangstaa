import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Emptycart from "../components/EmptyCart/Emptycart";
import CartItemCard from "../components/CartItemCard";
import {
  addToCart,
  calculatePrice,
  removeProductFromCart,
} from "../features/productCart/productCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, subtotal, tax, total, shippingCharges, discount } =
    useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  const incrementHandler = (cartItem) => {
    if (cartItem.quantity >= cartItem.stock) return;
    dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity + 1 }));
  };

  const decrementHandler = (cartItem) => {
    if (cartItem.quantity <= 1) return;
    dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity - 1 }));
  };

  const removeHandler = (productId) => {
    dispatch(removeProductFromCart(productId));
  };


  useEffect(()=>{
    dispatch(calculatePrice())
    localStorage.setItem("cart_items", JSON.stringify(cartItems));
  }, [cartItems])


  return (
    <div className='py-8 px-16 flex flex-wrap justify-center gap-[4rem] "h-[calc(100vh-4rem)]"'>
      <main className="w-full md:w-[60%] overflow-y-auto flex flex-col justify-between">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <>


              <CartItemCard key={crypto.randomUUID()} cartItem={item} incrementHandler={incrementHandler} decrementHandler={decrementHandler} removeHandler={removeHandler} />



            </>
          ))
        ) : (
          <div>
            <Emptycart />
          </div>
        )}
      </main>
      <aside className="w-[80%] md:w-[30%] lg:w-[30%] h-[70%] p-16 flex flex-col justify-center items-stretch gap-[1.3rem] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <p className="text-[1.1rem] flex justify-between">
          Subtotal: <span>₹ {subtotal}</span>
        </p>
        <p className="text-[1.1rem] flex justify-between">
          Shipping Charges: <span>₹ {shippingCharges}</span>
        </p>
        <p className="text-[1.1rem] flex justify-between">
          Tax: <span>₹ {tax}</span>
        </p>
        <p className="text-[1.1rem] flex justify-between">
          Discount: <span>₹ {discount}</span>
        </p>
       {
        subtotal === 0 ? ( <p className="text-[1.1rem] font-bold flex justify-between">
          Total: <span>₹ {0}</span>
        </p>): ( <p className="text-[1.1rem] font-bold flex justify-between">
          Total: <span>₹ {total}</span>
        </p>)
       }

        {
          //Add the route to the shipping form page
          cartItems.length > 0 && (
            <Link
              className="bg-gray-600 text-white 
          text-2xl text-center rounded-md p-3 hover:bg-gray-500 "
              to="/shipping"
            >
              Checkout
            </Link>
          )
        }
      </aside>
    </div>
  );
};

export default Cart;
