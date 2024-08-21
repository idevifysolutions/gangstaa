import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import {
  createProduct,
  deleteProduct,
  fetchProducts,
  fetchProductsAdmin,
  fetchSingleProduct,
  filterProducts,
  updateProduct,
  updateStock,
} from "../controllers/product.js";
import { uploadFiles } from "../middlewares/multer.js";

const router = express.Router();

router.post("/product/new", isAuth, uploadFiles, createProduct);
router.get("/product/all", fetchProducts);
router.get("/product/admin/all", fetchProductsAdmin);
router.get("/product/:id", fetchSingleProduct);
router.put("/product/:id",  updateProduct);
router.put("/product/updatestock/:id", isAuth, updateStock);
router.delete("/product/:id", isAuth, deleteProduct);
router.get("/products/filterProducts", filterProducts);


export default router;
