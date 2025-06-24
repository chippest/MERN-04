import express from "express";
import {
  createSong,
  fetchAllSongs,
  fetchSong,
} from "../Controllers/song.controller.js";

const router = express.Router();

router.post("/", createSong);
router.get("/", fetchAllSongs);
router.get("/:id", fetchSong);

export default router;
