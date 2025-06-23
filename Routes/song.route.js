import express from "express";
import { createSong } from "../Controllers/song.controller.js";

const router = express.Router();

router.post("/", createSong);

export default router;
