import Navbar from "./Components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import CardDetails from "./Pages/CardDetails";
import CardSerieDetails from "./Pages/CardSerieDetails";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movieDetails/:id" element={<CardDetails />} />
        <Route path="/serieDetails/:id" element={<CardSerieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
