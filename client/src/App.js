import React from "react";
import "./App.css";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frontpage from "./pages/frontPage";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/" element={<Frontpage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
