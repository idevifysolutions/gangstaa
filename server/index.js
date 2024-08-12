import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

// using middlewares
app.use(express.json());
app.use(cors());


app.use(bodyParser.json()); 

const __dirname = path.resolve();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is working");
});

// importing routes
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";
import cartRoutes from "./routes/cart.js";
import addressRoutes from "./routes/address.js";
import orderRoutes from "./routes/order.js";

// using routes
app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", addressRoutes);
app.use("/api", orderRoutes);

app.use("/uploads", express.static("uploads")); //  this will help us to fetch image from server url

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDb();
});
