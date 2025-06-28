import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./songPage.css";
import CreateSong from "../components/CreateSong";

function Songpage({ navigate }) {
  const [songs, setSongs] = useState([]);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const fetchedSongs = await axios.get("http://localhost:8080/api/songs");
        setSongs(fetchedSongs?.data?.data);
        console.log(fetchedSongs.data.data);
      } catch (error) {}
    };
    return fetch;
  }, []);

  return (
    <>
      <div className="songPage">
        <h1>
          <span>Songs | </span>
          <button
            onClick={() => {
              setCreating((o) => (o = !o));
            }}
          >
            +
          </button>
        </h1>
        <div className="songList">
          {songs.map((s, index) => {
            return (
              <>
                <div className="song">
                  <img src={s.cover} alt="" />
                  <audio src={s.song} controls></audio>
                  <span className="title">{s.title}</span>
                  <span className="artist">{s.artist}</span>
                  <button>edit</button>
                </div>
              </>
            );
          })}
        </div>
        <button
          onClick={() => {
            navigate("../");
          }}
        >
          go back
        </button>
        {creating && <CreateSong off={setCreating} />}
      </div>
    </>
  );
}

export default Songpage;
