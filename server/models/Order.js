import mongoose from "mongoose";

const schema = new mongoose.Schema({
  items: [
    {
      name: String,
      photo: String,
      price: Number,
      quantity: Number,
      productId: {
        type: mongoose.Types.ObjectId,
        ref: "Product"
      }
    },
  ],

  method: {
    type: String,
    required: true,
  },

  paymentInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment", // we will create this model in few minutes
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true
  },

  phone: {
    type: Number,
    required: true,
  },

  shippingInfo: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
  },

  status: {
    type: String,
    default: "Pending",
  },

  paidAt: {
    type: String,
  },

  subTotal: {
    type: Number,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Order = mongoose.model("Order", schema);
