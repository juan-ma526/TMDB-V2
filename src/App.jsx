import Navbar from "./Components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import CardDetails from "./Pages/CardDetails";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movieDetails/:id" element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
