import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server has started");
});

app.listen(8080, () => {
  console.log("server started on http://localhost:8080");
});
