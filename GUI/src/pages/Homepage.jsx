function Homepage({ navigate }) {
  return (
    <>
      <div className="homepage">Homepage</div>
      <button
        onClick={() => {
          navigate("products");
        }}
      >
        Products
      </button>
      <button
        onClick={() => {
          navigate("songs");
        }}
      >
        Songs
      </button>
    </>
  );
}

export default Homepage;
