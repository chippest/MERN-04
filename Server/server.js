import express from "express";
import songsRouter from "./Routes/song.route.js";
import productsRouter from "./Routes/product.route.js";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./Config/db.js";

const app = express();
dotenv.config();

const corsOptions = {
  origin: "http://localhost:5173",
};

app.get("/", (req, res) => {
  res.send("server has started");
});

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/songs", songsRouter);
app.use("/api/products", productsRouter);

app.listen(8080, () => {
  connectDB();
  console.log("server started on http://localhost:8080");
});
