import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import "./style/App.css";
import Profile from "./Profile";
import { useSelector } from "react-redux";

const App = () => {
  const userId = useSelector((state) => state.auth.userId);

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
       { <Route path="/profile" element={<Profile />} />}
      </Routes>
    </div>
  );
};

export default App;
