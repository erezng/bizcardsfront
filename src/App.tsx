import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navabar from "./components/Navbar";
import About from "./routes/about";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";

function App() {
  return (
    <>
      <Navabar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;