import express from "express";
import {
  createSong,
  deleteSong,
  fetchAllSongs,
  fetchSong,
} from "../Controllers/song.controller.js";

const router = express.Router();

router.post("/", createSong);
router.get("/", fetchAllSongs);
router.get("/:id", fetchSong);
router.delete("/:id", deleteSong);

export default router;
