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
      <OrgChartNode
        data={[
          {
            customId: "Manager",
            customParentId: null,
            customName: "Manager",
            customImage: "/img/p.png",
            penjualan: 1999,
          },
          {
            customId: "alan",
            customParentId: "Manager",
            customName: "Alan",
            customImage: "/img/p.png",
            penjualan: 1945,
          },
          {
            customId: "Steve",
            customParentId: "Manager",
            customName: "Steve",
            customImage: "/img/p1.png",
            penjualan: 2000,
          },
          {
            customId: "karen",
            customParentId: "Manager",
            customName: "Karen",
            customImage: "/img/p2.png",
            penjualan: 3000,
          },
          {
            customId: "bob",
            customParentId: "Manager",
            customName: "Bob",
            customImage: "/img/p1.png",
            penjualan: 1000,
          },
          {
            customId: "andy",
            customParentId: "Manager",
            customName: "Andy",
            customImage: "/img/p.png",
            penjualan: 4998,
          },

          {
            customId: "John_Doe",
            customParentId: "Manager",
            customName: "John Doe",
            customImage: "/img/p.png",
            penjualan: 1500,
          },
          {
            customId: "suga",
            customParentId: "Bob",
            customName: "Suga",
            customImage: "/img/p1.png",
            penjualan: 2500,
          },
          {
            customId: "Nur",
            customParentId: "Bob",
            customName: "Nur",
            customImage: "/img/p2.png",
            penjualan: 2500,
          },
          // Add more entries with random names
        ]}
      />
      <div className="mt-4">
        <Link href="/">
          <span className="text-indigo-500 underline">Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
