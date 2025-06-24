import express from "express";
import { createSong, fetchAllSongs } from "../Controllers/song.controller.js";

const router = express.Router();

router.post("/", createSong);
router.get("/", fetchAllSongs);

export default router;
