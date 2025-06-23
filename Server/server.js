import express from "express";
import songsRouter from "../Routes/song.route.js";

const app = express();

app.get("/", (req, res) => {
  res.send("server has started");
});

app.use(express.json());
app.use("/api/songs", songsRouter);

app.listen(8080, () => {
  console.log("server started on http://localhost:8080");
});
