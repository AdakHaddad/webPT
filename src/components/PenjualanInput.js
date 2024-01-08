// components/PenjualanInput.js
"use client";
import React, { useState } from "react";

const PenjualanInput = ({ customId, onPenjualanSubmit }) => {
  const [penjualan, setPenjualan] = useState("");

  const handlePenjualanSubmit = () => {
    if (penjualan.trim() !== "") {
      onPenjualanSubmit(customId, penjualan.trim());
      setPenjualan("");
    }
  };

  return (
    <div>
      <label>
        Enter Your Penjualan:
        <input
          type="text"
          value={penjualan}
          onChange={(e) => setPenjualan(e.target.value)}
        />
      </label>
      <button onClick={handlePenjualanSubmit}>Submit Penjualan</button>
    </div>
  );
};

export default PenjualanInput;
