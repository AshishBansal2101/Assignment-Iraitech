import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        <Link
          to="/login"
          style={{ textDecoration: "none", fontSize: "2vmax", color: "black" }}
        >
          Login/SignUp
        </Link>
      </div>
    </div>
  );
};

export default Home;
