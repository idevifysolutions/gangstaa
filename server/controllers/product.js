import { Product } from "../models/Product.js";
import { rm } from "fs";

export const createProduct = async (req, res) => {
  //only admin can create product so it is admin route
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({
        message: "Unauthorized", // condition for checking user role
      });

    const { title, description, category, price, stock } = req.body;

    const image = req.file;

    console.log("image", image);

    if (!image)
      return res.status(400).json({
        message: "Please give image",
      });

    const product = await Product.create({
      title,
      description,
      category,
      price,
      stock,
      image: image?.path,
    });

    res.status(201).json({
      message: "Product Created",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const fetchProducts = async (req, res) => {
  try {
    const { search, category, price, page } = req.query; // for filtering products

    const filter = {};

    if (search) {
      filter.title = {
        $regex: search,
        $options: "i",
      };
    }

    if (price) {
      filter.price = {
        $gte: Number(price), //this will help us to show products greater than this price
      };
    }

    if (category) filter.category = category;

    const countProduct = await Product.countDocuments(); //this will give total products

    const limit = 4; // this means we want to show only 4 products in 1 page

    const skip = (page - 1) * limit;

    const totalPages = Math.ceil(countProduct / limit);

    const products = await Product.find(filter)
      .sort("-createdAt")
      .limit(limit)
      .skip(skip);

    const categories = await Product.distinct("category"); //this will give all the distinct categories

    const mostSelling = await Product.find().sort({ sold: -1 }).limit(3); // this is just to show our top 3 most selling products

    res.json({ products, totalPages, categories, mostSelling });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const fetchProductsAdmin = async (req, res) => {
  try {
    const products = await Product.find();

    res.json({ products });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const fetchSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json({ product });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updates = req.body;

    // Define the allowed fields for updating
    const allowedUpdates = ['title', 'description', 'price', 'category', 'sold'];
    const updatesToApply = {};

    // Filter the incoming updates to only include allowed fields
    for (const key in updates) {
        if (allowedUpdates.includes(key)) {
            updatesToApply[key] = updates[key];
        }
    }

    // Update the product in the database
    const updatedProduct = await Product.findByIdAndUpdate(productId, updatesToApply, { new: true });

    if (!updatedProduct) {
        return res.status(404).send({ error: 'Product not found' });
    }

    res.status(200).send(updatedProduct);
} catch (error) {
    console.error('Error updating product:', error); // Log the error
    res.status(500).send({ error: 'Server error' });
}
};


export const deleteProduct = async (req, res) => {
  try {
    //this route is for admin
    if (req.user.role !== "admin")
      return res.status(403).json({
        message: "Unauthorized", // condition for checking user role
      });
      
    const product = await Product.findById(req.params.id);

    rm(product.image, () => {
      console.log("Image deleted"); //this is to delete product image from uploads folder
    });

    await product.deleteOne();

    res.json({
      message: "Product deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
