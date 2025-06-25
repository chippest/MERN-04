import express from "express";
import {
  createProduct,
  deleteProduct,
  fetchAllProducts,
  fetchProduct,
  updateProduct,
} from "../Controllers/product.controller.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/", fetchAllProducts);
router.get("/:id", fetchProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;
