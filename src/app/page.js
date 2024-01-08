"use client";
import React, { useState } from "react";
import Navbar from "@/components/Nav"; // Check the path for Navbar
import { Login } from "@/components/Login"; // Check the path for Login
import { PenjualanInput } from "@/components/PenjualanInput"; // Check the path for PenjualanInput

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handlePenjualanSubmit = (penjualanData) => {
    console.log("Penjualan submitted:", penjualanData);
  };

  return (
    <div>
      <Navbar />
      {/* {!loggedInUser ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <PenjualanInput
            customId={loggedInUser}
            onPenjualanSubmit={handlePenjualanSubmit}
          />
        </div>
      )} */}
    </div>
  );
};

export default Home;
