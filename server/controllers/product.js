import { Product } from "../models/Product.js";
import { rm } from "fs";

export const createProduct = async (req, res) => {
  //only admin can create product so it is admin route
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({
        message: "Unauthorized", // condition for checking user role
      });

    let { title, description, category, price, stock, colors, size } = req.body;

     colors = colors.split(',');
     size = size.split(',');
     stock = Number(stock);


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
      colors, 
      size,
      image: image?.path,
    });

    res.status(201).json({
      message: "Product Created",
      product,
    });

    console.log("array of colors", product);
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
    console.log(products);
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


// update the product
export const updateProduct = async (req, res) => {
  try {
    const { title, description, colors, size, stock, price, sold, category } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        colors,
        size,
        stock,
        price,
        sold,
        category,
      },
      { new: true } // Return the updated document
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// update the product stokc
export const updateStock = async (req, res) => {
  try {
    //this route is for admin
    if (req.user.role !== "admin")
      return res.status(403).json({
        message: "Unauthorized", // condition for checking user role
      });

    const product = await Product.findById(req.params.id);

    console.log("body of the updated stock", req.body);

    if (req.body.stock) {
      product.stock = req.body.stock;
      await product.save();
      return res.json({
        message: "Stock Updated",
      });
    }

    res.status(400).json({
      message: "Please give stock value",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
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



// filter the products on the basis of the conditions
export const filterProducts = async (req, res) => {
  try {
    const { category, size, colors, priceRange } = req.query;

    let filter = {};

    if (category) {
      filter.category = { $in: Array.isArray(category) ? category : [category] };
    }

    if (size) {
      filter.size = { $in: Array.isArray(size) ? size : [size] };
    }

    if (colors) {
      filter.colors = { $in: Array.isArray(colors) ? colors : [colors] };
    }

    if (priceRange) {
      const priceValues = Array.isArray(priceRange) ? priceRange : [priceRange];
      const minPrice = Math.min(...priceValues.map(range => parseInt(range.split('-')[0], 10)));
      const maxPrice = Math.max(...priceValues.map(range => parseInt(range.split('-')[1], 10)));
      
      filter.price = { $gte: minPrice, $lte: maxPrice };
    }

    // Fetch the filtered products from the database
    const products = await Product.find(filter);
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
