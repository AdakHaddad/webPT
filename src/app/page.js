"use client";
import React, { useState } from "react";
import Navbar from "@/components/Nav"; // Check the path for Navbar
import { Login } from "@/components/Login"; // Check the path for Login
import { PenjualanInput } from "@/components/PenjualanInput"; // Check the path for PenjualanInput

const Home = () => {
  return (
    <div>
      <Navbar />
      <Login />
    </div>
  );
};

export default Home;
