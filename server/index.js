import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
import cors from "cors";
import path from "path";

dotenv.config();



const app = express();

// using middlewares
app.use(express.json());
app.use(cors());
const __dirname = path.resolve();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is working");
});



// importing routes
import userRoutes from "./routes/user.js";


// using routes
app.use("/api", userRoutes);




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDb();
});
