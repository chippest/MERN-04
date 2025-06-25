import mongoose from "mongoose";
import Song from "../Model/song.model.js";

export const createSong = async (req, res) => {
  const song = req.body;
  if (!song.title || !song.artist || !song.cover) {
    return res
      .status(404)
      .json({ success: false, message: "Fill all the fields properly" });
  }
  const newSong = Song(song);
  try {
    await newSong.save();
    res.status(201).json({
      success: true,
      data: newSong,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

export const fetchAllSongs = async (req, res) => {
  try {
    const songs = await Song.find({});
    res.status(200).json({ success: true, data: songs });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const fetchSong = async (req, res) => {
  const { id } = req.params;
  try {
    const song = await Song.find({ _id: id });
    res.status(200).json({ success: true, data: song });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const deleteSong = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSong = await Song.findByIdAndDelete(id);
    res.status(200).json({ success: true, data: deletedSong });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const updateSong = async (req, res) => {
  const { id } = req.params;
  const song = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "invalid id" });
  }
  try {
    const updatedSong = await Song.findByIdAndUpdate(id, song, { new: true });
    res.status(200).json({ success: true, data: updatedSong });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};
