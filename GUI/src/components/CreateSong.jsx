import axios from "axios";
import "./createSong.css";
import { useState } from "react";

function CreateSong({ off }) {
  const [titlee, setTitlee] = useState("");
  const [artistt, setArtistt] = useState("");
  const [coverr, setCoverr] = useState("");
  const [songg, setSongg] = useState("");

  const handleCreate = async (song) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/songs",
        product
      );
      console.log("done?");
    } catch (error) {
      console.log(error);
    } finally {
      off(false);
    }
  };

  return (
    <>
      <div className="createSong">
        <button
          onClick={() => {
            off((o) => (o = !o));
          }}
          className="OUT"
        >
          X
        </button>
        <div className="formThingie">
          <input
            value={titlee}
            onChange={(e) => {
              setTitlee(e.target.value);
            }}
            type="text"
            placeholder="do you have a title?"
          />
          <input
            value={artistt}
            onChange={(e) => {
              setArtistt(e.target.value);
            }}
            type="text"
            placeholder="ARtist????"
          />
          <input
            value={coverr}
            onChange={(e) => {
              setCoverr(e.target.value);
            }}
            type="text"
            placeholder="CoveR!"
          />
          <input
            value={songg}
            onChange={(e) => {
              setSongg(e.target.value);
            }}
            type="text"
            placeholder="SONG!"
          />
          <button
            onClick={() => {
              handleCreate({
                title: titlee,
                artist: artistt,
                cover: coverr,
                song: songg,
              });
            }}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateSong;
