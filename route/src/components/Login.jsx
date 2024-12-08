import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const users = {
    admin: { username: "admin", password: "admin123", role: "admin" },
    user: { username: "user", password: "user123", role: "user" },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = Object.values(users).find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
