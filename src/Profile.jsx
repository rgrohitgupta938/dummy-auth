import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style/Profile.css";
import axios from "axios";
import { setToken, setUser, setUserId } from "./store/authSlice";

const Profile = () => {
  const user = useSelector((state) => state.auth.user) || {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");
        if (!userId || !token) {
          navigate("/");
          return;
        }
        let res = await axios.get(`https://dummyjson.com/users/${userId}`);
        console.log(res);
        dispatch(setUser({ user: res.data }));
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    };
    fetchUser();
  }, [dispatch, navigate]);

  const handleLogout = () => {
    dispatch(setUser({ user: {} }));
    dispatch(setUserId({ userId: "" }));
    dispatch(setToken({ token: "" }));
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="box1">
      <h1>Profile</h1>
      <img src={user.image} alt="" />
      <p>Username : {user.username}</p>
      <p>
        Name: {user.firstName} {user.lastName}
      </p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      <p>Gender : {user.gender}</p>
      <p>Age : {user.age}</p>
      <p>Phone : {user.phone}</p>
      <p>Date of Birth : {user.birthDate}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
