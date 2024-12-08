import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h2>Welcome, {user?.username}!</h2>
      <Link to="/home">
        <Button variant="contained">Home</Button>
      </Link>
      {user?.role === "admin" && (
        <Link to="/about">
          <Button variant="contained">About</Button>
        </Link>
      )}
      <Link to="/contact">
        <Button variant="contained">Contact</Button>
      </Link>
    </div>
  );
};

export default Home;
