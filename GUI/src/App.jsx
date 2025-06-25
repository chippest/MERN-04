import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";
import Songpage from "./pages/Songpage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/songs" element={<Songpage />} />
      </Routes>
    </>
  );
}

export default App;
