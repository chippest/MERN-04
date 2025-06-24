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
