import mongoose from "mongoose";
import Product from "../Model/product.model.js";

export const createProduct = async (req, res) => {
  const product = req.body;
  if (!product.title || !product.price || !product.image) {
    return res
      .status(404)
      .json({ success: false, message: "Fill all the fields properly" });
  }
  const newProduct = Product(product);
  try {
    await newProduct.save();
    res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

export const fetchAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const fetchProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.find({ _id: id });
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, data: deletedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "invalid id" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};
