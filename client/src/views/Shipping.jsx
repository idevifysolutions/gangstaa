import React, { useState } from "react";
import axios from "axios";

const Shipping = () => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      console.log(address, phone);
      const response = await axios.post(
        "http://localhost:4000/api/order/new/cod",
        {
          method: "COD",
          phone: phone,
          address: address,
        },
        {
          headers: {
            token: token,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address..."
          value={address}
        />
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Pone..."
          value={phone}
        />
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default Shipping;
