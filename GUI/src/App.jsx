import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";
import Songpage from "./pages/Songpage";

function App() {
  const nav = useNavigate();
  const navigate = (page) => {
    nav(`/${page}`);
  };

  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage navigate={navigate} />} />
          <Route
            path="/products"
            element={<Productpage navigate={navigate} />}
          />
          <Route path="/songs" element={<Songpage navigate={navigate} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
