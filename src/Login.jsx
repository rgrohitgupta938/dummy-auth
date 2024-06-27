import React, { useState } from "react";
import "./style/login.css";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import { setToken, setUserId } from "./store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const { username, password } = user;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (username === "" || password === "") {
      setError("Enter Email or password");
      setLoading(false);
      return;
    }
    try {
      const res = await axios.post(`https://dummyjson.com/auth/login`, user);
      console.log(res);
      if (res.status === 200) {
        const { id, token } = res.data;
        dispatch(setToken({ token }));
        dispatch(setUserId({ userId: id }));
        localStorage.setItem("userId", `${id}`);
        localStorage.setItem("token", `${token}`);
        navigate("/profile");
      }
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="box">
      {!loading && (
        <>
          <h1>Login</h1>
          <form id="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              value={username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={handleChange}
            />
            {error && <div className="error">{error}</div>}
            <button type="submit">Login</button>
          </form>
        </>
      )}
      {loading && (
        <div className="loader-container">
          <TailSpin
            height="80"
            width="80"
            color="#ffffff"
            ariaLabel="tail-spin-loading"
            radius="4"
            visible={true}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
