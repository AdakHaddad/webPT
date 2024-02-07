"use client";
import React from "react";
import OrgChartNode from "../../components/OrgChartNode";
import Link from "next/link";

const Home = () => {
  return (
    <div
      className="text-white font-bold"
      style={{ textAlign: "center", marginTop: "20px" }}
    >
      <h1>Organization Chart</h1>
      <OrgChartNode />
      <div className="mt-4">
        <Link href="/">
          <span className="text-indigo-500 underline">Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
