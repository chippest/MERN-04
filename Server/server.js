import express from "express";
import songsRouter from "./Routes/song.route.js";
import productsRouter from "./Routes/product.route.js";
import dotenv from "dotenv";
import { connectDB } from "./Config/db.js";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("server has started");
});

app.use(express.json());
app.use("/api/songs", songsRouter);
app.use("/api/products", productsRouter);

app.listen(8080, () => {
  connectDB();
  console.log("server started on http://localhost:8080");
});
