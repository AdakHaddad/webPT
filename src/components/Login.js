// components/Login.js
"use client";

import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [customId, setCustomId] = useState();

  const handleLogin = () => {
    if (customId.trim() !== "") {
      onLogin(customId.trim());
    }
  };

  return (
    <div>
      <label>
        Enter Your customId:
        <input
          type="text"
          value={customId}
          onChange={(e) => setCustomId(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
