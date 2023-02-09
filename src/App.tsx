import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navabar from "./components/Navabar";
import AuthContext from "./context/AuthContext";
import About from "./routes/About";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";

function App() {
  const {isLoggedIn} = useContext(AuthContext)
  return (
    <>
      <Navabar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        {!isLoggedIn && <Route path="/register" element={<Register />} />}
      </Routes>
    </>
  );
}
export default App;