import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

// Using middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


app.use(bodyParser.json());

const __dirname = path.resolve();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Server is working");
});

// Importing routes
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";
import cartRoutes from "./routes/cart.js";
import addressRoutes from "./routes/address.js";
import orderRoutes from "./routes/order.js";
// import MyOrder from './routes/MyOrder.js';
// import Userprofile from './routes/userRoutes.js';
// import UserProfile from './routes/Userprofile.js';
// app.use("/api/users", Userprofile)
// import { Routes } from 'react-router-dom';
// Using routes
app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", addressRoutes);
app.use("/api", orderRoutes);
// app.use('/api', Userprofile)



app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
//     }
// });


// const upload = multer({ storage: storage });

// Import routes
// const userRoutes = require('./routes/user');
app.use('/api/user', userRoutes);

// app.use("/api", MyOrder);
// This will help us to fetch images from server URL

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDb();
});