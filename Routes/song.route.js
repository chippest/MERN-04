import express from "express";
import {
  createSong,
  deleteSong,
  fetchAllSongs,
  fetchSong,
  updateSong,
} from "../Controllers/song.controller.js";

const router = express.Router();

router.post("/", createSong);
router.get("/", fetchAllSongs);
router.get("/:id", fetchSong);
router.delete("/:id", deleteSong);
router.put("/:id", updateSong);

export default router;
