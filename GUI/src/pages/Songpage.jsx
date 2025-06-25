function Songpage({ navigate }) {
  return (
    <>
      <div className="songPage">Songs</div>
      <button
        onClick={() => {
          navigate("../");
        }}
      >
        go back
      </button>
    </>
  );
}

export default Songpage;
